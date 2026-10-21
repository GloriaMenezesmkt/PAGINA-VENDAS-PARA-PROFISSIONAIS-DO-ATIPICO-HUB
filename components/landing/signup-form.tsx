'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, ShieldCheck } from 'lucide-react'
import { submitPioneerSignup } from '@/app/actions/signup'
import {
  ACQUISITION_CHANNELS,
  CHALLENGES,
  SPECIALTIES,
  type SignupState,
} from '@/lib/signup-options'

const initialState: SignupState = { status: 'idle' }

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15 aria-[invalid=true]:border-destructive'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="text-sm font-medium text-destructive">
      {message}
    </p>
  )
}

function RadioGroup({
  name,
  legend,
  options,
  error,
}: {
  name: string
  legend: string
  options: readonly string[]
  error?: string
}) {
  const errorId = `${name}-error`
  return (
    <fieldset
      className="flex flex-col gap-3"
      aria-describedby={error ? errorId : undefined}
      aria-invalid={error ? true : undefined}
    >
      <legend className="mb-3 font-semibold text-primary">{legend}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-input bg-background px-4 py-3 text-sm transition hover:border-accent/60 has-[:checked]:border-accent has-[:checked]:bg-accent/5 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent/15"
          >
            <input
              type="radio"
              name={name}
              value={option}
              required
              className="size-4 accent-[var(--accent)]"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <FieldError id={errorId} message={error} />
    </fieldset>
  )
}

export function SignupForm() {
  const [state, formAction, isPending] = useActionState(submitPioneerSignup, initialState)
  const errors = state.fieldErrors ?? {}

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-3xl border bg-card p-10 text-center shadow-xl"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="size-9 text-accent" aria-hidden="true" />
        </span>
        <h3 className="text-2xl font-extrabold text-primary">Vaga de Pioneiro reservada!</h3>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-8 rounded-3xl border bg-card p-6 shadow-xl md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="font-semibold text-primary">
            Nome completo
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="Ex.: Ana Paula Souza"
            className={inputClass}
            aria-invalid={errors.fullName ? true : undefined}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          <FieldError id="fullName-error" message={errors.fullName} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="whatsapp" className="font-semibold text-primary">
            WhatsApp de Contato
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="(62) 99999-9999"
            className={inputClass}
            aria-invalid={errors.whatsapp ? true : undefined}
            aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
          />
          <FieldError id="whatsapp-error" message={errors.whatsapp} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="specialty" className="font-semibold text-primary">
          Especialidade Clínica
        </label>
        <select
          id="specialty"
          name="specialty"
          required
          defaultValue=""
          className={inputClass}
          aria-invalid={errors.specialty ? true : undefined}
          aria-describedby={errors.specialty ? 'specialty-error' : undefined}
        >
          <option value="" disabled>
            Selecione sua especialidade
          </option>
          {SPECIALTIES.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
        <FieldError id="specialty-error" message={errors.specialty} />
      </div>

      <RadioGroup
        name="acquisitionChannel"
        legend="Hoje, qual é o seu principal canal para atrair e captar novos pacientes em Goiânia?"
        options={ACQUISITION_CHANNELS}
        error={errors.acquisitionChannel}
      />

      <RadioGroup
        name="mainChallenge"
        legend="Qual é o seu maior desafio operacional na rotina clínica atualmente?"
        options={CHALLENGES}
        error={errors.mainChallenge}
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="vacancyManagement" className="font-semibold text-primary">
          Como você costuma resolver ou gerenciar os seus horários vagos e cancelamentos hoje?
        </label>
        <textarea
          id="vacancyManagement"
          name="vacancyManagement"
          rows={4}
          required
          placeholder="Conte brevemente como funciona hoje na sua rotina..."
          className={`${inputClass} resize-y`}
          aria-invalid={errors.vacancyManagement ? true : undefined}
          aria-describedby={errors.vacancyManagement ? 'vacancyManagement-error' : undefined}
        />
        <FieldError id="vacancyManagement-error" message={errors.vacancyManagement} />
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-dashed border-highlight bg-highlight/10 p-4">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 size-5 shrink-0 accent-[var(--accent)]"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span className="text-sm leading-relaxed text-foreground">
            <strong className="text-primary">SIM!</strong> Quero entrar na lista de Profissionais
            Pioneiros e aceito o contato no WhatsApp para ativação do pacote trimestral por R$
            119,70.
          </span>
        </label>
        <FieldError id="consent-error" message={errors.consent} />
      </div>

      {state.status === 'error' && state.message ? (
        <p
          role="alert"
          className="rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-70 md:text-lg"
        >
          {isPending ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            'Garantir Minha Vaga de Pioneiro por R$ 119,70'
          )}
        </button>
        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="size-4" aria-hidden="true" />
          Seus dados são protegidos conforme a LGPD.
        </p>
      </div>
    </form>
  )
}
