import { CalendarClock, SearchCheck, ShieldCheck, type LucideIcon } from 'lucide-react'

type Step = {
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
}

const STEPS: Step[] = [
  {
    title: '1. Sinalize suas vagas',
    description:
      'Você indica seus horários disponíveis e especialidades aceitas no sistema de forma rápida.',
    icon: CalendarClock,
    iconClass: 'bg-primary text-primary-foreground',
  },
  {
    title: '2. Famílias encontram',
    description:
      'As mães atípicas filtram pelo plano de saúde ou atendimento particular e encontram sua vaga na hora.',
    icon: SearchCheck,
    iconClass: 'bg-accent text-accent-foreground',
  },
  {
    title: '3. Confirme o atendimento',
    description:
      'A solicitação chega no seu painel, você valida as necessidades básicas da criança e confirma o agendamento de forma segura.',
    icon: ShieldCheck,
    iconClass: 'bg-highlight text-highlight-foreground',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20" aria-labelledby="como-funciona-titulo">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            A solução enxuta
          </p>
          <h2
            id="como-funciona-titulo"
            className="text-balance text-3xl font-extrabold text-primary md:text-4xl"
          >
            Como o Atípico Hub Funciona
          </h2>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map(({ title, description, icon: Icon, iconClass }) => (
            <li
              key={title}
              className="flex flex-col gap-4 rounded-2xl border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`flex size-12 items-center justify-center rounded-xl ${iconClass}`}>
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-primary">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
