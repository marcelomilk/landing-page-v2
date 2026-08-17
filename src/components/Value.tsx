const STEPS = [
  {
    n: "01",
    title: "Conectar",
    text: "Vendas, repasses e extratos deixam de viver em sistemas separados e passam a ser lidos em uma base única.",
  },
  {
    n: "02",
    title: "Conferir",
    text: "Cada venda é cruzada com o repasse da adquirente e com o depósito do banco. O que não coincide fica visível.",
  },
  {
    n: "03",
    title: "Agir",
    text: "As divergências viram uma lista de pendências, com estado e acompanhamento — não um relatório para interpretar.",
  },
];

export default function Value() {
  return (
    <section
      className="band"
      aria-labelledby="valor-title"
      style={{ background: "var(--white)" }}
    >
      <div className="shell">
        <p className="t-eyebrow" style={{ color: "var(--steel)", margin: 0 }}>
          O que muda
        </p>

        <h2
          id="valor-title"
          className="t-h2"
          style={{
            margin: "28px 0 0",
            fontSize: "clamp(2rem, 4.6vw, 3.25rem)",
            maxWidth: "16ch",
          }}
        >
          Do dado disperso à decisão.
        </h2>

        <ol
          className="steps"
          style={{
            listStyle: "none",
            margin: "clamp(48px, 7vw, 84px) 0 0",
            padding: 0,
          }}
        >
          {STEPS.map((step) => (
            <li key={step.n} className="rule" style={{ paddingTop: 22 }}>
              <span className="t-label" style={{ color: "var(--signal)" }}>
                {step.n}
              </span>
              <h3
                className="t-h3"
                style={{ margin: "14px 0 10px", fontSize: "1.5rem" }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--neutral-700)",
                  fontSize: "1.0625rem",
                }}
              >
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
