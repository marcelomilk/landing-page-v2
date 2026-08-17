const GAPS = [
  {
    label: "Repasse",
    text: "A venda foi registrada, mas ninguém conferiu se o valor repassado corresponde.",
  },
  {
    label: "Taxa",
    text: "A taxa aplicada pela adquirente pode não ser a taxa que foi combinada.",
  },
  {
    label: "Depósito",
    text: "O recebimento previsto e o valor que entrou na conta nem sempre coincidem.",
  },
];

export default function Problem() {
  return (
    <section className="band shell" aria-labelledby="problema-title">
      <p className="t-eyebrow" style={{ color: "var(--steel)", margin: 0 }}>
        O problema
      </p>

      <div className="split">
        <h2
          id="problema-title"
          className="t-h2"
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 4.6vw, 3.25rem)",
            maxWidth: "14ch",
          }}
        >
          Cada sistema mostra uma parte. Nenhum mostra o todo.
        </h2>

        <p
          style={{
            margin: 0,
            maxWidth: "48ch",
            fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
            color: "var(--neutral-700)",
          }}
        >
          O ERP registra a venda. A adquirente informa o repasse. O banco
          confirma o depósito. Verificar se as três coisas coincidem é um
          trabalho manual — e por isso raramente é feito até o fim.
        </p>
      </div>

      <ul
        style={{
          listStyle: "none",
          margin: "clamp(40px, 6vw, 72px) 0 0",
          padding: 0,
        }}
      >
        {GAPS.map((gap) => (
          <li
            key={gap.label}
            className="rule gap-row"
            style={{ paddingBlock: 24 }}
          >
            <span
              className="t-label"
              style={{ color: "var(--steel)", display: "block" }}
            >
              {gap.label}
            </span>
            <p
              style={{
                margin: 0,
                maxWidth: "52ch",
                fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
              }}
            >
              {gap.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
