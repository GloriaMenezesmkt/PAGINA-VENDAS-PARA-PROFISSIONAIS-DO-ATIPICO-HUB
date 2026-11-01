export function SiteFooter() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center md:px-6">
        <p className="max-w-2xl text-pretty text-sm text-primary-foreground/80">
          Atípico Hub © 2026. Em total conformidade com a LGPD. Desenvolvido durante a Trilha de
          Ideação Eleve 2026 - Hub Goiás.
        </p>
        <a
          href="#condicoes"
          className="text-xs text-primary-foreground/60 underline-offset-4 hover:text-highlight hover:underline"
        >
          Condições Gerais de Participação
        </a>
      </div>
    </footer>
  )
}
