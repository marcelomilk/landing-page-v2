"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done";

const FIELDS = [
  { name: "name", label: "Nome", type: "text", autoComplete: "name" },
  {
    name: "company",
    label: "Empresa",
    type: "text",
    autoComplete: "organization",
  },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email" },
] as const;

export default function Diagnostic() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("sending");

    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        setError(body.error ?? "Não foi possível enviar. Tente novamente.");
        setStatus("idle");
        return;
      }

      setStatus("done");
    } catch {
      setError("Falha de conexão. Tente novamente.");
      setStatus("idle");
    }
  }

  return (
    <section
      id="diagnostico"
      className="band"
      aria-labelledby="diagnostico-title"
      style={{ background: "var(--ink)" }}
    >
      <div className="shell">
        <div className="split-cta">
          <div>
            <p
              className="t-eyebrow"
              style={{ color: "var(--green-400)", margin: 0 }}
            >
              Próximo passo
            </p>
            <h2
              id="diagnostico-title"
              className="t-h2"
              style={{
                margin: "26px 0 0",
                fontSize: "clamp(2rem, 4.6vw, 3.25rem)",
                color: "var(--white)",
                maxWidth: "15ch",
              }}
            >
              Vamos olhar para a sua operação.
            </h2>
            <p
              style={{
                margin: "22px 0 0",
                maxWidth: "42ch",
                fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
                color: "var(--on-ink-muted)",
              }}
            >
              Deixe seu contato. Retornamos para entender onde a sua operação
              está perdendo visibilidade.
            </p>
          </div>

          <div>
            {status === "done" ? (
              <div
                role="status"
                style={{
                  border: "1px solid var(--on-ink-line)",
                  borderRadius: "var(--r-lg)",
                  padding: "clamp(26px, 4vw, 36px)",
                }}
              >
                <span className="chip chip-ok">Recebido</span>
                <p
                  className="t-h3"
                  style={{
                    margin: "18px 0 0",
                    color: "var(--white)",
                    fontSize: "1.375rem",
                  }}
                >
                  Recebemos a sua solicitação.
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    color: "var(--on-ink-muted)",
                    fontSize: "1rem",
                  }}
                >
                  Entraremos em contato pelo e-mail informado.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "grid", gap: 16 }}>
                  {FIELDS.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="t-label"
                        style={{
                          display: "block",
                          marginBottom: 8,
                          color: "var(--on-ink-faint)",
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required
                        className="field"
                      />
                    </div>
                  ))}
                </div>

                {error && (
                  <p
                    role="alert"
                    style={{
                      margin: "16px 0 0",
                      fontSize: "0.9375rem",
                      color: "var(--danger-bg)",
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn"
                  disabled={status === "sending"}
                  style={{ marginTop: 24, width: "100%" }}
                >
                  {status === "sending"
                    ? "Enviando…"
                    : "Solicitar diagnóstico"}
                  {status !== "sending" && (
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
