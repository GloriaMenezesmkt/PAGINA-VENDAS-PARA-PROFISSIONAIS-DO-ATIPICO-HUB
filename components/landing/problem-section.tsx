import { CalendarX2, MessageCircle } from 'lucide-react'

export function ProblemSection() {
  return (
    <section className="bg-primary text-primary-foreground" aria-labelledby="problema-titulo">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:px-6 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-highlight">
            A dor real
          </p>
          <h2
            id="problema-titulo"
            className="text-balance text-3xl font-extrabold leading-tight md:text-4xl"
          >
            O que você faz quando um paciente desmarca de última hora?
          </h2>
        </div>
        <div className="flex flex-col gap-8 lg:col-span-3">
          <p className="text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Nós sabemos que gerenciar as &apos;janelas&apos; na agenda clínica é um dos maiores
            desafios do profissional autônomo. Enquanto seus horários ficam ociosos, centenas de
            mães atípicas em Goiânia passam horas em grupos informais de WhatsApp tentando
            encontrar um especialista especializado com vaga disponível. O Atípico Hub nasceu para
            eliminar esse abismo, direcionando a demanda certa para os seus horários vagos.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl bg-primary-foreground/10 p-5">
              <CalendarX2 className="mt-0.5 size-6 shrink-0 text-highlight" aria-hidden="true" />
              <div>
                <p className="font-bold">Sua agenda</p>
                <p className="text-sm text-primary-foreground/75">
                  Janelas e faltas que viram receita perdida.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-primary-foreground/10 p-5">
              <MessageCircle className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-bold">As famílias</p>
                <p className="text-sm text-primary-foreground/75">
                  Horas em grupos informais buscando uma vaga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
