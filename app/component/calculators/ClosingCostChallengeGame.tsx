"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const GAME_SECONDS = 30;
const START_RATE = 7.0;
const MIN_RATE = 1.5;

type Phase = "idle" | "running" | "result";

function randBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function drawDesertSky(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  balloonY: number,
) {
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, "#2d1b4e");
  sky.addColorStop(0.45, "#c45c2a");
  sky.addColorStop(0.7, "#e8793a");
  sky.addColorStop(1, "#d4a574");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // Ground
  const groundY = Math.min(h * 0.72, balloonY + 80);
  ctx.fillStyle = "#c47a3a";
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.quadraticCurveTo(w * 0.3, groundY - 18, w * 0.55, groundY + 8);
  ctx.quadraticCurveTo(w * 0.8, groundY + 22, w, groundY - 6);
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();

  // Simple cacti
  const drawCactus = (x: number, baseY: number, scale: number) => {
    ctx.fillStyle = "#3a7a2a";
    ctx.fillRect(x - 6 * scale, baseY - 40 * scale, 12 * scale, 40 * scale);
    ctx.fillRect(x - 18 * scale, baseY - 28 * scale, 12 * scale, 8 * scale);
    ctx.fillRect(x - 18 * scale, baseY - 28 * scale, 8 * scale, 18 * scale);
    ctx.fillRect(x + 6 * scale, baseY - 22 * scale, 12 * scale, 8 * scale);
    ctx.fillRect(x + 10 * scale, baseY - 22 * scale, 8 * scale, 14 * scale);
  };
  drawCactus(w * 0.18, groundY + 4, 1);
  drawCactus(w * 0.78, groundY + 10, 0.85);
}

function drawBalloon(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  lit: boolean,
) {
  ctx.save();
  ctx.translate(x, y);

  // Envelope
  const colors = ["#e53935", "#fdd835", "#43a047", "#e53935", "#fdd835", "#43a047"];
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.55);
    ctx.quadraticCurveTo(
      Math.sin(((i + 0.5) / 6) * Math.PI * 2) * size * 0.55,
      -size * 0.1,
      Math.sin((i / 6) * Math.PI * 2) * size * 0.2,
      size * 0.35,
    );
    ctx.quadraticCurveTo(
      Math.sin(((i - 0.5) / 6) * Math.PI * 2) * size * 0.55,
      -size * 0.1,
      0,
      -size * 0.55,
    );
    ctx.fillStyle = colors[i];
    ctx.fill();
  }

  // Outer outline
  ctx.beginPath();
  ctx.ellipse(0, -size * 0.1, size * 0.42, size * 0.5, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "#222";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Burner
  if (lit) {
    ctx.beginPath();
    ctx.moveTo(0, size * 0.38);
    ctx.quadraticCurveTo(size * 0.04, size * 0.48, 0, size * 0.55);
    ctx.quadraticCurveTo(-size * 0.04, size * 0.48, 0, size * 0.38);
    ctx.fillStyle = "rgba(255,140,0,0.75)";
    ctx.fill();
  }

  // Basket ropes
  ctx.strokeStyle = "#222";
  ctx.lineWidth = 1.5;
  for (const sx of [-0.12, 0.12]) {
    ctx.beginPath();
    ctx.moveTo(sx * size, size * 0.32);
    ctx.lineTo(sx * size * 0.7, size * 0.55);
    ctx.stroke();
  }

  // Basket
  ctx.fillStyle = "#a0522d";
  ctx.strokeStyle = "#222";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(-size * 0.12, size * 0.55, size * 0.24, size * 0.14);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

function drawTimeBar(
  ctx: CanvasRenderingContext2D,
  progress: number,
  w: number,
  h: number,
) {
  const barW = w * 0.5;
  const barH = 10;
  const x = (w - barW) / 2;
  const y = h - barH - 28;

  ctx.save();
  ctx.font = "bold 13px system-ui, sans-serif";
  ctx.fillStyle = "#222";
  ctx.textAlign = "center";
  ctx.fillText("Time left", x + barW / 2, y - 10);

  ctx.fillStyle = "rgba(238,238,238,0.55)";
  ctx.beginPath();
  ctx.roundRect(x, y, barW, barH, 5);
  ctx.fill();

  const fill = Math.max(0, Math.min(1, progress));
  ctx.fillStyle = fill > 0.5 ? "#43a047" : fill > 0.2 ? "#fbc02d" : "#e53935";
  ctx.beginPath();
  ctx.roundRect(x, y, barW * fill, barH, 5);
  ctx.fill();

  ctx.strokeStyle = "rgba(34,34,34,0.3)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, barW, barH);
  ctx.restore();
}

function drawHeightScale(
  ctx: CanvasRenderingContext2D,
  progress: number,
  w: number,
  h: number,
) {
  const x = w - 18;
  const top = 24;
  const bottom = h - 48;
  const height = bottom - top;

  ctx.save();
  const grad = ctx.createLinearGradient(0, top, 0, bottom);
  grad.addColorStop(0, "#e53935");
  grad.addColorStop(0.5, "#fbc02d");
  grad.addColorStop(1, "#43a047");
  ctx.fillStyle = grad;
  ctx.fillRect(x, top, 6, height);

  const markerY = top + height * Math.max(0, Math.min(1, progress));
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#222";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x - 4, markerY);
  ctx.lineTo(x + 10, markerY - 5);
  ctx.lineTo(x + 10, markerY + 5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

/**
 * Live "Closing Cost Challenge" mini-game — rate-lock timing game.
 * Placed under CalculatorMidCta on the closing-cost calculator page only.
 */
export default function ClosingCostChallengeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const phaseRef = useRef<Phase>("idle");
  const rateRef = useRef(START_RATE);
  const timeRef = useRef(0);
  const roundStartRef = useRef(0);
  const roundEndRef = useRef(0);
  const crashPointRef = useRef(3);

  const [phase, setPhase] = useState<Phase>("idle");
  const [rate, setRate] = useState(START_RATE);
  const [lockedRate, setLockedRate] = useState<number | null>(null);

  const paint = useCallback((running: boolean, multiplier: number, timeLeft: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (cssW < 2 || cssH < 2) return;

    if (canvas.width !== Math.round(cssW * dpr) || canvas.height !== Math.round(cssH * dpr)) {
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Higher rate = balloon lower (bad); lower rate = balloon higher (good)
    const visualProgress = (10 - multiplier) / 10;
    const balloonY = cssH * (0.55 - visualProgress * 0.28);
    const size = Math.min(cssW, cssH) * 0.22;

    drawDesertSky(ctx, cssW, cssH, balloonY);
    drawBalloon(ctx, cssW * 0.5, balloonY, size, running);
    drawTimeBar(ctx, timeLeft, cssW, cssH);
    drawHeightScale(ctx, visualProgress, cssW, cssH);
  }, []);

  const endGame = useCallback(
    (finalRate: number) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      phaseRef.current = "result";
      const display = Math.max(MIN_RATE, finalRate);
      setLockedRate(display);
      setRate(display);
      setPhase("result");
      paint(false, display, 0);
    },
    [paint],
  );

  const gameLoop = useCallback(() => {
    if (phaseRef.current !== "running") return;

    const now = performance.now();
    const total = roundEndRef.current - roundStartRef.current;
    const elapsed = Math.min(total, now - roundStartRef.current);
    const timeProgress = elapsed / total;

    const base = START_RATE - Math.pow(timeProgress, 0.7) * 6.0;
    timeRef.current += 0.05;
    const t = timeRef.current;
    const sinWave = Math.sin(t * 0.65) * 1.6 + Math.sin(t * 0.2 + 1) * 1.0;
    const noise = (Math.random() - 0.5) * 0.15;
    const next = Math.max(0, Math.min(START_RATE, base + sinWave + noise));
    rateRef.current = next;
    setRate(next);

    const timeLeft = 1 - timeProgress;
    paint(true, next, timeLeft);

    if (next <= crashPointRef.current) {
      endGame(next);
      return;
    }
    if (now >= roundEndRef.current) {
      endGame(6.0);
      return;
    }

    rafRef.current = requestAnimationFrame(gameLoop);
  }, [endGame, paint]);

  const startGame = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    phaseRef.current = "running";
    rateRef.current = START_RATE;
    timeRef.current = 0;
    crashPointRef.current = randBetween(1.5, 4.5);
    roundStartRef.current = performance.now();
    roundEndRef.current = roundStartRef.current + GAME_SECONDS * 1000;
    setLockedRate(null);
    setRate(START_RATE);
    setPhase("running");
    rafRef.current = requestAnimationFrame(gameLoop);
  }, [gameLoop]);

  const onPrimaryClick = () => {
    if (phaseRef.current === "running") {
      endGame(rateRef.current);
    } else {
      startGame();
    }
  };

  useEffect(() => {
    paint(false, START_RATE, 1);
    const onResize = () => {
      paint(phaseRef.current === "running", rateRef.current, 1);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paint]);

  const rateColor = rate <= 6 ? "#3fb364" : "#c62828";
  const resultMessage =
    lockedRate !== null && lockedRate <= 3
      ? "Excellent rate! That's the power of working with experienced brokers like Mortgage Brothers."
      : "Good rate! Remember, other lenders might charge 6% or more, but with us, you never pay more than 3%.";

  return (
    <section className="w-full bg-white border-t border-[#e8e0d0]/40">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-[#052316] text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-tight mb-4">
            Test Your Timing: The Closing Cost Challenge!
          </h2>
          <div className="h-1 w-12 rounded-full bg-[#3fb364] mx-auto mb-5" aria-hidden />
          <p className="text-[#4e5b4e] text-[14px] sm:text-[15px] leading-[1.75] max-w-3xl mx-auto">
            Closing costs can fluctuate, but with Mortgage Brothers, you get expert guidance to
            secure the best possible rate – often below market averages! Think you can beat the
            clock and lock in a great rate in our mini-game? Press &ldquo;Start Game&rdquo; to find
            out! Remember, with us, you never pay more than 3%.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch lg:items-start">
          <div className="w-full lg:flex-[2] min-w-0">
            <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[500px] rounded-xl overflow-hidden shadow-md bg-[#2d1b4e]">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full block"
                aria-label="Closing Cost Crash: Sandstorm Edition game canvas"
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 lg:max-w-[340px] shrink-0">
            {phase !== "result" ? (
              <div className="flex flex-col items-center gap-4 p-5 sm:p-6 bg-white rounded-xl shadow-md border border-[#e8e0d0]/60">
                <span className="text-[13px] sm:text-[14px] text-[#666] font-medium">
                  Current Rate:
                </span>
                <div
                  className="w-full text-center text-[36px] sm:text-[42px] font-bold py-3 rounded-lg border border-[#e0e0e0] shadow-inner bg-[#f7f7f7]"
                  style={{ color: rateColor }}
                  aria-live="polite"
                >
                  {rate.toFixed(2)}%
                </div>
                <button
                  type="button"
                  onClick={onPrimaryClick}
                  className="w-full min-h-11 rounded-md bg-[#4b800a] hover:bg-[#3d6a08] text-white text-[14px] sm:text-[15px] font-bold uppercase tracking-wide transition-colors"
                >
                  {phase === "running" ? "Lock-in" : "Start Game"}
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 p-5 sm:p-6 bg-white rounded-xl shadow-md border border-[#e8e0d0]/60 text-center">
                <button
                  type="button"
                  onClick={startGame}
                  className="w-full min-h-11 rounded-md bg-[#4b800a] hover:bg-[#3d6a08] text-white text-[14px] sm:text-[15px] font-bold uppercase tracking-wide transition-colors"
                >
                  Play Again
                </button>
                <p className="text-[#2c3e50] text-[14px] sm:text-[15px]">
                  You locked in at{" "}
                  <strong className="text-[#3fb364]">{lockedRate?.toFixed(1)}%</strong>.
                </p>
                <p className="text-[#4e5b4e] text-[13px] sm:text-[14px] leading-relaxed">
                  {resultMessage}
                </p>
                <p className="text-[#2c3e50] text-[14px] font-medium">
                  Ready to see how much you can save?
                </p>
                <Link
                  href="#get-pre-approved"
                  prefetch={false}
                  data-preapproval="true"
                  className="w-full inline-flex items-center justify-center min-h-11 rounded-md bg-[#4b800a] hover:bg-[#3d6a08] text-white text-[14px] sm:text-[15px] font-bold transition-colors"
                >
                  Lock in Your Savings!
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
