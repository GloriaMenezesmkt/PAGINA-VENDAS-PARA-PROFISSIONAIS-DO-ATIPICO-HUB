'use server'

import { z } from 'zod'
import { db } from '@/lib/db'
import { pioneerSignups } from '@/lib/db/schema'
import {
  ACQUISITION_CHANNELS,
  CHALLENGES,
  SPECIALTIES,
  type SignupState,
} from '@/lib/signup-options'

const signupSchema = z.object({
  fullName: z.string().trim().min(3, 'Informe seu nome completo.').max(120),
  whatsapp: z
    .string()
    .trim()
    .refine((value) => {
      const digits = value.replace(/\D/g, '')
      return digits.length >= 10 && digits.length <= 13
    }, 'Informe um WhatsApp válido com DDD.'),
  specialty: z.enum(SPECIALTIES, { error: 'Selecione sua especialidade.' }),
  acquisitionChannel: z.enum(ACQUISITION_CHANNELS, { error: 'Selecione uma opção.' }),
  mainChallenge: z.enum(CHALLENGES, { error: 'Selecione uma opção.' }),
  vacancyManagement: z
    .string()
    .trim()
    .min(5, 'Conte um pouco sobre como você gerencia seus horários.')
    .max(2000),
  consent: z.literal('on', { error: 'Confirme sua participação para continuar.' }),
})

export async function submitPioneerSignup(
  _prev: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const parsed = signupSchema.safeParse({
    fullName: formData.get('fullName') ?? '',
    whatsapp: formData.get('whatsapp') ?? '',
    specialty: formData.get('specialty') ?? '',
    acquisitionChannel: formData.get('acquisitionChannel') ?? '',
    mainChallenge: formData.get('mainChallenge') ?? '',
    vacancyManagement: formData.get('vacancyManagement') ?? '',
    consent: formData.get('consent') ?? '',
  })

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0])
      if (!fieldErrors[key]) fieldErrors[key] = issue.message
    }
    return { status: 'error', message: 'Revise os campos destacados.', fieldErrors }
  }

  const { consent: _consent, ...data } = parsed.data

  try {
    await db.insert(pioneerSignups).values({ ...data, consent: true })
  } catch (error) {
    console.error('Failed to save pioneer signup', error)
    return {
      status: 'error',
      message: 'Não foi possível enviar sua inscrição agora. Tente novamente em instantes.',
    }
  }

  return {
    status: 'success',
    message: 'Inscrição recebida! Em breve entraremos em contato pelo WhatsApp para ativar seu pacote pioneiro.',
  }
}
