import { SignupForm } from './signup-form'

export function SignupSection() {
  return (
    <section id="inscricao" className="scroll-mt-20 py-20" aria-labelledby="inscricao-titulo">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Questionário de validação
          </p>
          <h2
            id="inscricao-titulo"
            className="text-balance text-3xl font-extrabold text-primary md:text-4xl"
          >
            Mapeamento Clínico e Inscrição de Pioneiros
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Preencha os dados abaixo para responder nossa pesquisa do edital e reservar sua vaga
            promocional.
          </p>
        </div>
        <SignupForm />
      </div>
    </section>
  )
}
