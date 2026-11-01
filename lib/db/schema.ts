import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const pioneerSignups = pgTable('pioneer_signups', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  whatsapp: text('whatsapp').notNull(),
  specialty: text('specialty').notNull(),
  acquisitionChannel: text('acquisition_channel').notNull(),
  mainChallenge: text('main_challenge').notNull(),
  vacancyManagement: text('vacancy_management').notNull(),
  consent: boolean('consent').notNull().default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
