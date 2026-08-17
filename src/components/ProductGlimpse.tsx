const FLOW = ["ERP / PDV", "MS Inteligência", "Adquirente", "Banco"];

const STATES = [
  {
    chip: "chip-ok",
    label: "Correta",
    text: "Venda, repasse e depósito coincidem.",
  },
  {
    chip: "chip-warn",
    label: "Divergente",
    text: "Os três registros existem, mas os valores não coincidem.",
  },
  {
    chip: "chip-danger",
    label: "Não encontrada",
    text: "A venda foi registrada e não há repasse correspondente.",
  },
];

export default function ProductGlimpse() {
  return (
    <section className="band shell" aria-labelledby="produto-title">
      <p className="t-eyebrow" style={{ color: "var(--steel)", margin: 0 }}>
        Como aparece
      </p>

      <h2
        id="produto-title"
        className="t-h2"
        style={{
          margin: "28px 0 0",
          fontSize: "clamp(2rem, 4.6vw, 3.25rem)",
          maxWidth: "16ch",
        }}
      >
        Cada venda recebe um estado.
      </h2>

      <div
        style={{
          marginTop: "clamp(40px, 6vw, 64px)",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-lg)",
          background: "var(--white)",
          overflow: "hidden",
        }}
      >
        {/* Flow being reconciled */}
        <div
          className="flow"
          style={{
            padding: "22px clamp(18px, 3vw, 32px)",
            borderBottom: "1px solid var(--line)",
            background: "var(--paper)",
          }}
        >
          {FLOW.map((node, i) => (
            <span key={node} className="flow-item">
              <span
                className="t-label"
                style={{
                  color: i === 1 ? "var(--green-700)" : "var(--steel)",
                }}
              >
                {node}
              </span>
              {i < FLOW.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{ color: "var(--neutral-300)" }}
                >
                  ——
                </span>
              )}
            </span>
          ))}
        </div>

        {/* The three states */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {STATES.map((state, i) => (
            <li
              key={state.label}
              className="state-row"
              style={{
                padding: "clamp(18px, 2.6vw, 24px) clamp(18px, 3vw, 32px)",
                borderTop: i === 0 ? "none" : "1px solid var(--line)",
              }}
            >
              <span className={`chip ${state.chip}`}>{state.label}</span>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.0625rem",
                  color: "var(--neutral-700)",
                }}
              >
                {state.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <p
        style={{
          margin: "18px 0 0",
          color: "var(--steel)",
          fontSize: "0.875rem",
        }}
      >
        Representação dos estados do processo de conciliação.
      </p>
    </section>
  );
}
