type Tone = "dark" | "light";

/**
 * MS Inteligência mark: bracket frame enclosing "MS".
 * "M" takes the surface-contrast colour, "S" is always Signal Green.
 * Proportions are fixed — never stretch or recolour beyond these tones.
 *
 * Colours are resolved to literals here because CSS var() is not reliably
 * supported inside SVG presentation attributes.
 */
const TONES = {
  dark: { solid: "#0B0C0E", green: "#1B673E" },
  light: { solid: "#FFFFFF", green: "#2E9E63" },
} as const;

export default function Brand({
  tone = "dark",
  size = 26,
  wordmark = true,
}: {
  tone?: Tone;
  size?: number;
  wordmark?: boolean;
}) {
  const { solid, green } = TONES[tone];

  return (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.44 }}
    >
      <svg
        viewBox="0 0 104 64"
        width={(size * 104) / 64}
        height={size}
        role="img"
        aria-label="MS Inteligência"
        focusable="false"
        style={{ display: "block", flex: "none" }}
      >
        {/* bracket frame */}
        <path d="M24 4 H6 V60 H24" fill="none" stroke={solid} strokeWidth="7" />
        <path
          d="M80 4 H98 V60 H80"
          fill="none"
          stroke={solid}
          strokeWidth="7"
        />
        {/* letterforms */}
        <text
          x="52"
          y="47"
          textAnchor="middle"
          fontWeight="800"
          fontSize="46"
          letterSpacing="-2"
          style={{ fontFamily: "var(--f-archivo), sans-serif" }}
        >
          <tspan fill={solid}>M</tspan>
          <tspan fill={green}>S</tspan>
        </text>
      </svg>

      {wordmark && (
        <span
          className="t-h3"
          style={{
            fontSize: size * 0.88,
            lineHeight: 1,
            color: solid,
            letterSpacing: "-0.035em",
          }}
        >
          inteligência
        </span>
      )}
    </span>
  );
}
