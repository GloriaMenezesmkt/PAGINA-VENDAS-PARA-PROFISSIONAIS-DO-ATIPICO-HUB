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
  pioneerInterest: z.enum(['sim', 'nao'], { error: 'Escolha SIM ou NÃO para continuar.' }),
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
    pioneerInterest: formData.get('pioneerInterest') ?? '',
  })

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0])
      if (!fieldErrors[key]) fieldErrors[key] = issue.message
    }
    return { status: 'error', message: 'Revise os campos destacados.', fieldErrors }
  }

  const { pioneerInterest, ...data } = parsed.data
  const wantsPioneerSpot = pioneerInterest === 'sim'

  try {
    await db.insert(pioneerSignups).values({ ...data, consent: wantsPioneerSpot })
  } catch (error) {
    console.error('Failed to save pioneer signup', error)
    return {
      status: 'error',
      message: 'Não foi possível enviar sua inscrição agora. Tente novamente em instantes.',
    }
  }

  if (wantsPioneerSpot) {
    return {
      status: 'success',
      title: 'Vaga de Pioneiro reservada!',
      message:
        'Inscrição recebida! Em breve entraremos em contato pelo WhatsApp para ativar sua vaga pioneira.',
    }
  }

  return {
    status: 'success',
    title: 'Obrigado pela sua contribuição!',
    message:
      'Suas respostas foram registradas e vão nos ajudar a construir o Atípico Hub. Avisaremos você no lançamento oficial.',
  }
}
