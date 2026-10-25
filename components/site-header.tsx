import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#empresas', label: 'Empresas' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2" aria-label="Reck Informática, início">
          <span className="flex size-8 items-center justify-center rounded-md bg-secondary font-mono text-sm font-medium text-secondary-foreground">
            R
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Reck <span className="font-normal text-muted-foreground">Informática</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Orçamento</span>
          <span className="sm:hidden">Contato</span>
        </a>
      </div>
    </header>
  )
}
