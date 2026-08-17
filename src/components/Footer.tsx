import Brand from "./Brand";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)" }}>
      <div className="shell">
        <div
          className="rule-ink foot"
          style={{ paddingBlock: "clamp(28px, 4vw, 40px)" }}
        >
          <Brand tone="light" size={22} />
          <p
            className="t-label"
            style={{ margin: 0, color: "var(--on-ink-faint)" }}
          >
            © {new Date().getFullYear()} MS Inteligência
          </p>
        </div>
      </div>
    </footer>
  );
}
