import { Sparkles } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2" aria-label="Atípico Hub — início">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground"
          >
            A<span className="text-accent">H</span>
          </span>
          <span className="text-lg font-bold tracking-tight text-primary">
            Atípico <span className="text-accent">Hub</span>
          </span>
        </a>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-highlight/50 bg-highlight/15 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="size-3.5 text-highlight" aria-hidden="true" />
          <span>Apoiado pelo Hub Goiás • Eleve 2026</span>
        </span>
      </div>
    </header>
  )
}
