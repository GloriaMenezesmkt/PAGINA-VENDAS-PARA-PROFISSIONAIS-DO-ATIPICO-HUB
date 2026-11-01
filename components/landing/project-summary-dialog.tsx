'use client'

import { useRef } from 'react'
import { HeartPulse, Info, ShieldCheck, Trees, X } from 'lucide-react'

const PILLARS = [
  {
    icon: HeartPulse,
    title: 'Saúde Integrada',
    description:
      'Médicos, dentistas e terapeutas conectados em uma única rede, com agenda inteligente e encaminhamentos qualificados para famílias atípicas.',
  },
  {
    icon: ShieldCheck,
    title: 'Suporte de Cuidadoras Validadas',
    description:
      'Cuidadoras e acompanhantes com verificação de antecedentes, formação comprovada e avaliações transparentes das famílias.',
  },
  {
    icon: Trees,
    title: 'Lazer Inclusivo Seguro',
    description:
      'Curadoria de espaços, eventos e experiências preparados para receber pessoas neurodivergentes com acolhimento e segurança.',
  },
] as const

export function ProjectSummaryDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex w-fit items-start gap-2 text-left text-sm text-muted-foreground underline decoration-muted-foreground/40 underline-offset-4 transition hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 rounded-md"
      >
        <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        Quer conhecer melhor a tese e a governança do Atípico Hub? Clique aqui para ler o resumo do
        projeto.
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-summary-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-3xl border bg-card p-0 text-card-foreground shadow-2xl backdrop:bg-primary/60 backdrop:backdrop-blur-sm"
      >
        <div className="flex flex-col gap-6 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Resumo do projeto
              </p>
              <h2
                id="project-summary-title"
                className="text-balance text-2xl font-extrabold text-primary"
              >
                A visão 360° do Atípico Hub
              </h2>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Fechar</span>
            </button>
          </div>

          <p className="text-pretty leading-relaxed text-muted-foreground">
            Uma infraestrutura única que integra todo o ecossistema de cuidado das famílias
            atípicas, sustentada por três pilares:
          </p>

          <ul className="flex flex-col gap-4">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4 rounded-2xl border bg-background p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-primary">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
          >
            Entendi
          </button>
        </div>
      </dialog>
    </>
  )
}
