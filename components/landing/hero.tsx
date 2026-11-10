import Image from 'next/image'
import { ArrowRight, MapPin, MessageCircle, Music2 } from 'lucide-react'
import { ProjectSummaryDialog } from './project-summary-dialog'

export function Hero() {
  const whatsappNumber = process.env.PIONEER_WHATSAPP_NUMBER
  const whatsappMessage = 'Olá! Vim pela página do Atípico Hub e quero participar do Lote Pioneiro.'
  const whatsappUrl = whatsappNumber && /^[1-9]\d{7,14}$/.test(whatsappNumber)
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : undefined

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-accent">
            <MapPin className="size-4" aria-hidden="true" />
            Goiânia • Neurodivergências
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            Apresente seu atendimento a famílias atípicas em{' '}
            <span className="text-accent">Goiânia.</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Faça parte do Lote Pioneiro do Atípico Hub. Seu perfil aparece na busca por
            especialidade, e as famílias interessadas podem falar com você diretamente pelo WhatsApp.
          </p>
          <ProjectSummaryDialog />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
              >
                Quero participar do Lote Pioneiro
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            )}
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
          <div className="relative mx-3 -mt-10 max-w-xs rounded-2xl border bg-card p-4 shadow-xl sm:mx-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Perfil simulado
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Music2 className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-primary">Musicoterapeuta</p>
                <p className="text-sm text-muted-foreground">Goiânia • R$ 120 por hora</p>
              </div>
            </div>
            <span className="mt-3 inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-semibold text-primary">
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar no WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
