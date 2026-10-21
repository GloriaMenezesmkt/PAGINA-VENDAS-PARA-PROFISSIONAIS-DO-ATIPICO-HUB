import Image from 'next/image'
import { ArrowRight, CalendarCheck, MapPin } from 'lucide-react'
import { ProjectSummaryDialog } from './project-summary-dialog'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-accent">
            <MapPin className="size-4" aria-hidden="true" />
            Goiânia • Neurodivergências
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            Chega de horários ociosos na sua clínica em{' '}
            <span className="text-accent">Goiânia.</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Conecte sua agenda à demanda de milhares de famílias atípicas através da primeira
            infraestrutura inteligente de conveniência em neurodivergências.
          </p>
          <ProjectSummaryDialog />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/validacao"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
            >
              Quero ser um Profissional Pioneiro
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <p className="text-sm text-muted-foreground">
              Apenas <strong className="text-primary">50 vagas</strong> no Lote Pioneiro
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 size-40 rounded-full bg-highlight/30 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-8 size-48 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-3xl border bg-muted shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-clinic.png"
              alt="Médica especialista sorrindo enquanto utiliza um tablet em um consultório moderno de alto padrão"
              width={1200}
              height={896}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border bg-card px-4 py-3 shadow-xl">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CalendarCheck className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary">Horário preenchido</span>
              <span className="text-xs text-muted-foreground">Terça, 14h • Fonoaudiologia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
