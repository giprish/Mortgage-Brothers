export type FormKind = "preapproval" | "quiz" | "contact";

function asElement(target: EventTarget | Element | null): Element | null {
  if (!target) return null;
  if (target instanceof Element) return target;
  if (target instanceof Node) return target.parentElement;
  return null;
}

function isInternalPageHref(href: string): boolean {
  const raw = (href || "").trim().toLowerCase();
  if (!raw) return false;
  if (raw.startsWith("#")) return false;
  if (
    raw.startsWith("mailto:") ||
    raw.startsWith("tel:") ||
    raw.startsWith("sms:") ||
    raw.startsWith("javascript:")
  ) {
    return false;
  }
  if (raw.includes("jotform.com") || raw.includes("jsform/")) return false;

  let pathname = "";
  if (raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("//")) {
    try {
      const url = new URL(raw.startsWith("//") ? `https:${raw}` : raw);
      pathname = url.pathname;
    } catch {
      return false;
    }
  } else if (raw.startsWith("/")) {
    pathname = raw.split("#")[0].split("?")[0];
  } else {
    return false;
  }

  const path = pathname.replace(/\/+$/, "") || "/";
  return path !== "/";
}

function isProtectedPageHref(href: string): boolean {
  const h = (href || "").toLowerCase();
  return (
    h.includes("/loan-applications") ||
    h.includes("/credit-score-quiz") ||
    h.includes("/sell-my-house-fast-arizona") ||
    h.includes("/how-to-sell-my-house-fast-in-arizona")
  );
}

function isPreApprovalTarget(clickable: HTMLElement): boolean {
  const href = (clickable.getAttribute("href") || "").toLowerCase().trim();
  const text = (clickable.textContent || "").toLowerCase().replace(/\s+/g, " ").trim();
  const id = (clickable.id || "").toLowerCase().trim();

  if (id === "get-pre-approved" || id === "preapproval" || id === "pre-approval" || id === "get-started") {
    return true;
  }
  if (clickable.hasAttribute("data-preapproval") || clickable.hasAttribute("data-open-preapproval")) {
    return true;
  }

  if (
    href === "#get-pre-approved" ||
    href === "/#get-pre-approved" ||
    href.includes("#get-pre-approved") ||
    href.includes("get-pre-approved") ||
    href.includes("/pre-approval") ||
    href.includes("/preapproval") ||
    href.includes("get-started") ||
    href.includes("#get-in-touch") ||
    href.includes("/#get-in-touch")
  ) {
    return true;
  }

  if (text.length > 0 && text.length < 120) {
    if (
      text.includes("start my preapproval") ||
      text.includes("start my pre-approval") ||
      text.includes("start your pre-approval") ||
      text.includes("start your preapproval") ||
      text.includes("get pre-approved") ||
      text.includes("get preapproved") ||
      text.includes("get pre approved") ||
      text.includes("start pre-approval") ||
      text.includes("start preapproval") ||
      text.includes("get started today") ||
      text.includes("get started now") ||
      text.includes("get started") ||
      (text.includes("pre-approval") && (text.includes("start") || text.includes("get") || text.includes("apply"))) ||
      (text.includes("preapproval") && (text.includes("start") || text.includes("get") || text.includes("apply")))
    ) {
      return true;
    }
  }

  return false;
}

function isQuizTarget(clickable: HTMLElement): boolean {
  if (clickable.hasAttribute("data-quiz") || clickable.hasAttribute("data-open-quiz")) return true;

  const href = (clickable.getAttribute("href") || "").toLowerCase().trim();
  return (
    href.includes("250305896122151") ||
    href.includes("form.jotform.com/250305896122151") ||
    href.includes("jsform/250305896122151")
  );
}

function isContactTarget(clickable: HTMLElement): boolean {
  if (clickable.hasAttribute("data-contact") || clickable.hasAttribute("data-open-contact")) return true;

  const href = (clickable.getAttribute("href") || "").toLowerCase().trim();
  return (
    href.includes("form.jotform.com/250026749097159") ||
    href.includes("jsform/250026749097159")
  );
}

function isPreapprovalJotformHref(clickable: HTMLElement): boolean {
  const href = (clickable.getAttribute("href") || "").toLowerCase().trim();
  return (
    href.includes("250065764860157") ||
    href.includes("form.jotform.com/250065764860157") ||
    href.includes("jsform/250065764860157")
  );
}

export function resolveFormKind(target: EventTarget | Element | null): FormKind | null {
  const element = asElement(target);
  if (!element) return null;

  // Footer / explicit page links must always navigate.
  if (element.closest("footer, [data-no-form-modal]")) return null;

  const pageAnchor = element.closest("a[href]") as HTMLAnchorElement | null;
  if (pageAnchor) {
    const href = pageAnchor.getAttribute("href") || "";
    if (isProtectedPageHref(href) || isInternalPageHref(href)) return null;
  }

  const clickable = element.closest("a[href], button, [role='button']") as HTMLElement | null;
  if (!clickable) return null;

  if (clickable.hasAttribute("data-preapproval") || clickable.hasAttribute("data-open-preapproval")) {
    return "preapproval";
  }
  if (clickable.hasAttribute("data-quiz") || clickable.hasAttribute("data-open-quiz")) {
    return "quiz";
  }
  if (clickable.hasAttribute("data-contact") || clickable.hasAttribute("data-open-contact")) {
    return "contact";
  }

  if (isPreApprovalTarget(clickable)) return "preapproval";
  if (isPreapprovalJotformHref(clickable)) return "preapproval";
  if (isQuizTarget(clickable)) return "quiz";
  if (isContactTarget(clickable)) return "contact";
  return null;
}
