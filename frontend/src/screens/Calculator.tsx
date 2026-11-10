// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";

const SCREEN = "Calculator";
const mix = (colour, percent) => `color-mix(in srgb, ${colour} ${percent}%, transparent)`;

const DIV_ZERO_MESSAGE = "Cannot divide by zero. Press AC to start a new calculation.";
const KEYBOARD_HINT =
  "Keyboard works too: type 0–9 and . for digits, + − * / for operators, Enter or = for the result, Esc to clear.";
const PRIVACY_NOTE = "Free to use, no account needed. Nothing is saved — reloading starts again from zero.";

const DIGIT_LIMIT = 12;

const compute = (a, b, operator) => {
  if (operator === "+") return a + b;
  if (operator === "−") return a - b;
  if (operator === "×") return a * b;
  return a / b;
};

const toNumber = (raw) => {
  const n = parseFloat(raw);
  return Number.isNaN(n) ? 0 : n;
};

const toRaw = (n) => {
  const rounded = parseFloat(n.toPrecision(12));
  return String(rounded);
};

const formatEntry = (raw) => {
  if (raw === "" || raw === "-") return "0";
  if (/e/i.test(raw)) return raw.replace("-", "−");
  const negative = raw.startsWith("-");
  const body = negative ? raw.slice(1) : raw;
  const [whole, fraction] = body.split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const decimals = body.indexOf(".") > -1 ? "." + (fraction || "") : "";
  return (negative ? "−" : "") + grouped + decimals;
};

const CalcKey = ({ wf, label, ariaLabel, kind, span, pressed, disabled, onPress }) => {
  const palette = {
    digit: {
      backgroundColor: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "var(--brand-fg)",
    },
    fn: {
      backgroundColor: mix(brand.neutralColor, 16),
      border: `1px solid ${mix(brand.neutralColor, 32)}`,
      color: "var(--brand-fg)",
    },
    clear: {
      backgroundColor: mix(brand.primaryColor, 16),
      border: `1px solid ${mix(brand.primaryColor, 40)}`,
      color: brand.primaryColor,
    },
    op: {
      backgroundColor: mix(brand.accentColor, 18),
      border: `1px solid ${mix(brand.accentColor, 42)}`,
      color: brand.accentColor,
    },
    equals: {
      background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`,
      border: "1px solid rgba(255,255,255,0.22)",
      color: brand.backgroundColor,
    },
  }[kind];

  const glowColour = kind === "op" || kind === "equals" ? brand.accentColor : brand.primaryColor;

  return (
    <button
      type="button"
      data-wf={wf}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onPress(label)}
      className={
        "npc-key flex h-16 items-center justify-center font-extrabold tabular-nums backdrop-blur-xl sm:h-20 " +
        (span === 2 ? "col-span-2 " : "") +
        (kind === "equals" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl")
      }
      style={{
        ...palette,
        borderRadius: brand.radius,
        boxShadow: pressed
          ? `0 0 0 1px ${mix(glowColour, 60)}, 0 0 34px ${mix(glowColour, 55)}`
          : kind === "equals"
          ? `0 18px 48px -18px ${mix(brand.accentColor, 85)}`
          : "none",
      }}
    >
      <span aria-hidden={ariaLabel ? true : undefined}>{label}</span>
    </button>
  );
};

export default function Screen() {
  const [display, setDisplay] = React.useState("0");
  const [accumulator, setAccumulator] = React.useState(null);
  const [operator, setOperator] = React.useState(null);
  const [entryActive, setEntryActive] = React.useState(false);
  const [replaceOnNextDigit, setReplaceOnNextDigit] = React.useState(true);
  const [trail, setTrail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [pressed, setPressed] = React.useState(null);

  const glass = {
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: brand.radius,
  };

  const clearAll = () => {
    setDisplay("0");
    setAccumulator(null);
    setOperator(null);
    setEntryActive(false);
    setReplaceOnNextDigit(true);
    setTrail("");
    setError(null);
  };

  const pressDigit = (digit) => {
    if (replaceOnNextDigit) {
      setDisplay(digit);
      setReplaceOnNextDigit(false);
      setEntryActive(true);
      if (!operator) setTrail("");
      return;
    }
    const digitCount = display.replace(/[-.]/g, "").length;
    if (digitCount >= DIGIT_LIMIT) return;
    setDisplay(display === "0" ? digit : display + digit);
    setEntryActive(true);
  };

  const pressDot = () => {
    if (replaceOnNextDigit) {
      setDisplay("0.");
      setReplaceOnNextDigit(false);
      setEntryActive(true);
      if (!operator) setTrail("");
      return;
    }
    if (display.indexOf(".") > -1) return;
    setDisplay(display + ".");
    setEntryActive(true);
  };

  const pressSign = () => {
    if (display === "0") return;
    setDisplay(display.startsWith("-") ? display.slice(1) : "-" + display);
    setEntryActive(true);
  };

  const pressPercent = () => {
    const value = toNumber(display);
    const result =
      accumulator !== null && (operator === "+" || operator === "−")
        ? (accumulator * value) / 100
        : value / 100;
    if (accumulator === null) setTrail(formatEntry(display) + " %");
    setDisplay(toRaw(result));
    setReplaceOnNextDigit(true);
    setEntryActive(true);
  };

  const pressOperator = (next) => {
    const value = toNumber(display);

    if (operator !== null && accumulator !== null && entryActive) {
      if (operator === "÷" && value === 0) {
        setTrail(trail + " " + formatEntry(display) + " =");
        setError(DIV_ZERO_MESSAGE);
        return;
      }
      const result = compute(accumulator, value, operator);
      setTrail(trail + " " + formatEntry(display) + " " + next);
      setAccumulator(result);
      setDisplay(toRaw(result));
    } else if (operator !== null && accumulator !== null) {
      setTrail(trail.slice(0, -1) + next);
    } else {
      setAccumulator(value);
      setTrail(formatEntry(display) + " " + next);
    }

    setOperator(next);
    setReplaceOnNextDigit(true);
    setEntryActive(false);
  };

  const pressEquals = () => {
    const value = toNumber(display);

    if (operator === null || accumulator === null) {
      setTrail(formatEntry(display) + " =");
      setReplaceOnNextDigit(true);
      setEntryActive(false);
      return;
    }

    if (operator === "÷" && value === 0) {
      setTrail(trail + " " + formatEntry(display) + " =");
      setError(DIV_ZERO_MESSAGE);
      return;
    }

    const result = compute(accumulator, value, operator);
    setTrail(trail + " " + formatEntry(display) + " =");
    setDisplay(toRaw(result));
    setAccumulator(null);
    setOperator(null);
    setReplaceOnNextDigit(true);
    setEntryActive(false);
  };

  const press = (key) => {
    if (key === "AC") return clearAll();
    if (error) return;
    if (/^[0-9]$/.test(key)) return pressDigit(key);
    if (key === ".") return pressDot();
    if (key === "+/-") return pressSign();
    if (key === "%") return pressPercent();
    if (key === "=") return pressEquals();
    return pressOperator(key);
  };

  React.useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      if (target && /^(INPUT|TEXTAREA)$/.test(target.tagName)) return;
      const k = event.key;
      let mapped = null;
      if (/^[0-9]$/.test(k)) mapped = k;
      else if (k === "." || k === ",") mapped = ".";
      else if (k === "+") mapped = "+";
      else if (k === "-") mapped = "−";
      else if (k === "*" || k.toLowerCase() === "x") mapped = "×";
      else if (k === "/") mapped = "÷";
      else if (k === "%") mapped = "%";
      else if (k === "=" || k === "Enter") mapped = "=";
      else if (k === "Escape" || k.toLowerCase() === "c") mapped = "AC";
      if (!mapped) return;
      if (k === "Enter" && target && target.tagName === "BUTTON") return;
      event.preventDefault();
      setPressed(mapped);
      press(mapped);
    };
    const onKeyUp = () => setPressed(null);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  });

  const shown = error ? "Error" : formatEntry(display);
  const valueSize = shown.length > 12 ? "text-4xl sm:text-5xl" : "text-5xl sm:text-6xl";

  const keyRows = [
    [
      { wf: "b-3-0", label: "AC", ariaLabel: "All clear, reset to zero", kind: "clear" },
      { wf: "b-3-1", label: "+/-", ariaLabel: "Toggle positive or negative sign", kind: "fn" },
      { wf: "b-3-2", label: "%", ariaLabel: "Percent", kind: "fn" },
      { wf: "b-3-3", label: "÷", ariaLabel: "Divide", kind: "op" },
    ],
    [
      { wf: "b-4-0", label: "7", kind: "digit" },
      { wf: "b-4-1", label: "8", kind: "digit" },
      { wf: "b-4-2", label: "9", kind: "digit" },
      { wf: "b-4-3", label: "×", ariaLabel: "Multiply", kind: "op" },
    ],
    [
      { wf: "b-5-0", label: "4", kind: "digit" },
      { wf: "b-5-1", label: "5", kind: "digit" },
      { wf: "b-5-2", label: "6", kind: "digit" },
      { wf: "b-5-3", label: "−", ariaLabel: "Subtract", kind: "op" },
    ],
    [
      { wf: "b-6-0", label: "1", kind: "digit" },
      { wf: "b-6-1", label: "2", kind: "digit" },
      { wf: "b-6-2", label: "3", kind: "digit" },
      { wf: "b-6-3", label: "+", ariaLabel: "Add", kind: "op" },
    ],
    [
      { wf: "b-7-0", label: "0", kind: "digit", span: 2 },
      { wf: "b-7-1", label: ".", ariaLabel: "Decimal point", kind: "digit" },
      { wf: "b-7-2", label: "=", ariaLabel: "Equals, show the result", kind: "equals" },
    ],
  ];

  return (
    <div
      className="mx-auto w-full max-w-xl space-y-6"
      style={{ color: "var(--brand-fg)", fontFamily: brand.fontBody, "--npc-focus": brand.primaryColor }}
    >
      <style>{`
        .npc-key { transition: transform 120ms ease, box-shadow 200ms ease, background-color 200ms ease; }
        .npc-key:hover:not(:disabled) { transform: translateY(-2px); }
        .npc-key:active:not(:disabled) { transform: translateY(0) scale(0.97); }
        .npc-key:focus-visible { outline: 2px solid var(--npc-focus); outline-offset: 3px; }
        .npc-key:disabled { opacity: 0.38; cursor: not-allowed; }
        .npc-alert { animation: npc-rise 240ms ease-out; }
        @keyframes npc-rise { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        .npc-dot { animation: npc-pulse 2.6s ease-in-out infinite; }
        @keyframes npc-pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .npc-key, .npc-alert, .npc-dot { animation: none !important; transition: none !important; }
          .npc-key:hover:not(:disabled) { transform: none; }
        }
      `}</style>

      <div data-wf="b-0-0">
        <h1 className="text-4xl font-extrabold tracking-tight" style={{ fontFamily: brand.fontHeading }}>
          {SCREEN}
        </h1>
        <span
          aria-hidden
          className="mt-3 block h-1 w-20 rounded-full"
          style={{ background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})` }}
        />
      </div>

      <section
        data-wf="b-1-0"
        className="relative overflow-hidden p-6 backdrop-blur-xl sm:p-8"
        style={{ ...glass, boxShadow: "0 30px 70px -35px rgba(0,0,0,0.8)" }}
      >
        <h2 className="sr-only">Running result</h2>
        <div
          aria-hidden
          className="absolute -right-12 -top-16 h-48 w-48 rounded-full blur-[70px]"
          style={{ backgroundColor: mix(error ? brand.accentColor : brand.primaryColor, 60), opacity: 0.7 }}
        />
        <p
          data-wf="i-1-0-0"
          className="relative truncate text-right text-sm tabular-nums"
          style={{ color: "var(--brand-fg-muted)" }}
        >
          {trail || "Nothing entered yet — tap a digit or type one."}
        </p>
        <p
          data-wf="i-1-0-1"
          aria-live="polite"
          className={"relative mt-2 truncate text-right font-extrabold tabular-nums " + valueSize}
          style={{ color: error ? brand.accentColor : "var(--brand-fg)" }}
        >
          {shown}
        </p>
      </section>

      <div data-wf="b-2-0" role="status" aria-live="assertive">
        {error ? (
          <p
            className="npc-alert flex items-start gap-3 px-4 py-3 text-sm font-semibold"
            style={{
              backgroundColor: mix(brand.accentColor, 16),
              border: `1px solid ${mix(brand.accentColor, 45)}`,
              borderRadius: brand.radius,
              color: "var(--brand-fg)",
            }}
          >
            <Icons.AlertCircle aria-hidden className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.accentColor }} />
            <span>{error}</span>
          </p>
        ) : (
          <p className="flex items-center gap-2 px-1 text-xs" style={{ color: "var(--brand-fg-muted)" }}>
            <span
              aria-hidden
              className="npc-dot h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: brand.primaryColor }}
            />
            <span>Ready — the result stays on screen, so you can keep chaining steps onto it.</span>
          </p>
        )}
      </div>

      <h2 className="sr-only">Keypad</h2>
      <div className="grid grid-cols-4 gap-3">
        {keyRows.map((row) =>
          row.map((key) => (
            <CalcKey
              key={key.wf}
              wf={key.wf}
              label={key.label}
              ariaLabel={key.ariaLabel}
              kind={key.kind}
              span={key.span}
              pressed={pressed === key.label}
              disabled={Boolean(error) && key.label !== "AC"}
              onPress={press}
            />
          ))
        )}
      </div>

      <div className="space-y-2 pt-1 text-xs leading-relaxed" style={{ color: "var(--brand-fg-muted)" }}>
        <p data-wf="b-8-0">{KEYBOARD_HINT}</p>
        <p data-wf="b-9-0">{PRIVACY_NOTE}</p>
      </div>
    </div>
  );
}
