"use client";

import React, {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export type CalcSelectOption = {
  value: string | number;
  label: ReactNode;
};

type CalcSelectProps = {
  value: string | number;
  options: CalcSelectOption[];
  onChange: (value: string) => void;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
};

const PANEL_MAX_HEIGHT = 264;
const PANEL_MIN_HEIGHT = 96;
const VIEWPORT_GUTTER = 12;

export default function CalcSelect({
  value,
  options,
  onChange,
  className,
  style,
  ariaLabel,
}: CalcSelectProps) {
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const [maxHeight, setMaxHeight] = useState(PANEL_MAX_HEIGHT);
  const selectedIndex = options.findIndex((o) => String(o.value) === String(value));
  const [activeIndex, setActiveIndex] = useState(selectedIndex < 0 ? 0 : selectedIndex);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const listboxId = useId();

  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  // The panel lives in normal flow beneath the field, so it has to pick the side
  // with more room and cap its height to whatever is actually on screen.
  const measure = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom - VIEWPORT_GUTTER;
    const above = rect.top - VIEWPORT_GUTTER;
    const useUp = above > below;
    const room = useUp ? above : below;
    setDropUp(useUp);
    setMaxHeight(Math.max(PANEL_MIN_HEIGHT, Math.min(PANEL_MAX_HEIGHT, room)));
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    measure();
  }, [open, measure]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent | MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onViewportChange = () => measure();

    document.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("resize", onViewportChange);
    window.addEventListener("scroll", onViewportChange, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("resize", onViewportChange);
      window.removeEventListener("scroll", onViewportChange, true);
    };
  }, [open, measure]);

  // Scroll the panel itself rather than calling scrollIntoView, which would also
  // scroll the page and move the panel out from under the field.
  useEffect(() => {
    if (!open) return;
    const list = listRef.current;
    const active = list?.children[activeIndex] as HTMLElement | undefined;
    if (!list || !active) return;
    const top = active.offsetTop;
    const bottom = top + active.offsetHeight;
    if (top < list.scrollTop) {
      list.scrollTop = top;
    } else if (bottom > list.scrollTop + list.clientHeight) {
      list.scrollTop = bottom - list.clientHeight;
    }
  }, [open, activeIndex]);

  const commit = (index: number) => {
    const option = options[index];
    if (!option) return;
    onChange(String(option.value));
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveIndex(selectedIndex < 0 ? 0 : selectedIndex);
        setOpen(true);
      }
      return;
    }

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus({ preventScroll: true });
        break;
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((i) => Math.min(options.length - 1, i + 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        commit(activeIndex);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div ref={wrapRef} className="calc-dropdown" onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        className={`calc-dropdown-trigger${className ? ` ${className}` : ""}`}
        style={style}
        role="combobox"
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        onClick={() => {
          setActiveIndex(selectedIndex < 0 ? 0 : selectedIndex);
          setOpen((prev) => !prev);
        }}
      >
        <span className="calc-dropdown-value">{selected ? selected.label : ""}</span>
        <svg
          className="calc-dropdown-chevron"
          viewBox="0 0 12 8"
          aria-hidden
          style={{ transform: open ? "rotate(180deg)" : undefined }}
        >
          <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          ref={listRef}
          id={listboxId}
          role="listbox"
          className="calc-dropdown-panel"
          style={{ maxHeight, ...(dropUp ? { bottom: "calc(100% + 4px)" } : { top: "calc(100% + 4px)" }) }}
        >
          {options.map((option, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={String(option.value)}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`calc-dropdown-option${isSelected ? " is-selected" : ""}${index === activeIndex ? " is-active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => commit(index)}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
