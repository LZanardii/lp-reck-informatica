import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          {'© '}
          {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs">Manutenção de computadores e impressoras</p>
      </div>
    </footer>
  )
}
