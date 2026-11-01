import { BadgeCheck, Check, Crown } from 'lucide-react'

const BENEFITS = [
  'Sem mensalidades ocultas',
  'Selo de Profissional Verificado incluído',
  'Cancelamento livre pós-período',
]

export function OfferSection() {
  return (
    <section className="bg-secondary py-20" aria-labelledby="oferta-titulo">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border-2 border-highlight bg-card shadow-2xl shadow-primary/10">
          <div className="flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground">
            <Crown className="size-4 text-highlight" aria-hidden="true" />
            Condição de parceiro fundador
          </div>
          <div className="flex flex-col gap-8 p-8 md:p-12">
            <div className="flex flex-col gap-4 text-center">
              <h2
                id="oferta-titulo"
                className="text-balance text-2xl font-extrabold text-primary md:text-4xl"
              >
                Lote Pioneiro B2B — Exclusivo para os Primeiros 50 Profissionais
              </h2>
              <p className="mx-auto max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                No lançamento oficial de mercado, a assinatura padrão do Atípico Hub será de R$
                97,00/mês. No entanto, por estarmos na trilha oficial de validação do edital Eleve
                2026, abrimos uma condição única para os parceiros fundadores de Goiânia.
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-2xl bg-secondary p-6 text-center">
              <p className="text-base text-muted-foreground">
                De <s className="font-semibold">R$ 97,00/mês</s> por apenas
              </p>
              <p className="flex items-baseline gap-1 text-primary">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-6xl font-extrabold tracking-tight">39,90</span>
                <span className="text-lg font-semibold text-muted-foreground">/mês</span>
              </p>
              <p className="text-sm font-semibold text-accent">no Plano Trimestral</p>
            </div>

            <p className="rounded-xl border border-highlight/60 bg-highlight/15 px-5 py-4 text-center font-semibold text-primary">
              Taxa Única de Ativação (Acesso completo por 90 dias):{' '}
              <span className="whitespace-nowrap font-extrabold">R$ 119,70 via Pix.</span>
            </p>

            <ul className="flex flex-col justify-center gap-3 md:flex-row md:gap-6">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm font-medium">
                  <span className="flex size-5 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href="/validacao"
              className="mx-auto inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 font-bold text-primary-foreground transition hover:brightness-125 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
            >
              <BadgeCheck className="size-5 text-highlight" aria-hidden="true" />
              Reservar minha vaga pioneira
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
