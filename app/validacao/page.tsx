import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SignupSection } from '@/components/landing/signup-section'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'

export const metadata: Metadata = {
  title: 'Pesquisa de Validação | Atípico Hub',
  description:
    'Responda à pesquisa de validação do Atípico Hub e garanta sua vaga como Profissional Pioneiro.',
}

export default function ValidacaoPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-8">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar para a página inicial
          </Link>
        </div>
        <SignupSection />
      </main>
      <SiteFooter />
    </>
  )
}
