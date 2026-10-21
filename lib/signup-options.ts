export const SPECIALTIES = [
  'Psicologia',
  'Fonoaudiologia',
  'Terapia Ocupacional',
  'Psicopedagogia',
  'Acompanhante Terapêutico/AT',
  'Outro',
] as const

export const ACQUISITION_CHANNELS = [
  'Indicação médica/colegas',
  'Redes Sociais/Instagram',
  'Busca Orgânica no Google',
  'Plataformas genéricas/Doctoralia',
  'Outro',
] as const

export const CHALLENGES = [
  'Lidar com horários ociosos/janelas e faltas',
  'Excesso de burocracia/falta de tempo para gestão',
  'Dificuldade para alcançar famílias qualificadas',
] as const

export type SignupState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Record<string, string>
}
