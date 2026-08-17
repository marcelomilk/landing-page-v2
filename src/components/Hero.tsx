import Brand from "./Brand";

const SOURCES = ["ERP", "PDV", "Adquirentes", "Bancos", "PIX"];

export default function Hero() {
  return (
    <div style={{ background: "var(--ink)" }}>
      {/* ---------- Header: brand + the single action ---------- */}
      <header className="shell">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            paddingBlock: 22,
          }}
        >
          <a href="#topo" aria-label="MS Inteligência — início">
            <Brand tone="light" size={24} />
          </a>
          <a
            href="#diagnostico"
            className="t-label"
            style={{
              color: "var(--white)",
              textDecoration: "none",
              borderBottom: "1px solid var(--signal)",
              paddingBottom: 3,
              minHeight: 44,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Solicitar diagnóstico
          </a>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="topo" className="shell" aria-labelledby="hero-title">
        <div
          style={{
            paddingTop: "clamp(72px, 12vw, 150px)",
            paddingBottom: "clamp(72px, 11vw, 140px)",
          }}
        >
          <p
            className="t-eyebrow"
            style={{ color: "var(--green-400)", margin: 0 }}
          >
            Inteligência operacional
          </p>

          <h1
            id="hero-title"
            className="t-display"
            style={{
              margin: "26px 0 0",
              maxWidth: "15ch",
              fontSize: "clamp(2.75rem, 8.2vw, 5.75rem)",
              color: "var(--white)",
            }}
          >
            Uma visão única da sua operação.
          </h1>

          <p
            style={{
              margin: "26px 0 0",
              maxWidth: "46ch",
              fontSize: "clamp(1.0625rem, 1.9vw, 1.3125rem)",
              lineHeight: 1.55,
              color: "var(--on-ink-muted)",
            }}
          >
            A MS Inteligência reúne os dados de venda, pagamento e gestão em um
            só lugar — e mostra onde os números não fecham.
          </p>

          <div style={{ marginTop: 40 }}>
            <a href="#diagnostico" className="btn">
              Solicitar diagnóstico
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Quiet context strip: where the data comes from ---------- */}
      <div className="shell">
        <ul
          className="rule-ink t-label"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px 28px",
            listStyle: "none",
            margin: 0,
            padding: "20px 0 26px",
            color: "var(--on-ink-faint)",
          }}
        >
          {SOURCES.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
