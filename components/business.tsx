import { Building2 } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const benefits = [
  'Contratos de manutenção preventiva mensal',
  'Atendimento no local (on-site)',
  'Gestão do parque de impressoras e fornecimento de toner',
  'Suporte para redes, servidores e backup',
]

export function Business() {
  return (
    <section id="empresas" className="px-4 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-secondary p-8 text-secondary-foreground md:p-14 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-accent-foreground">
            <Building2 className="size-3.5" aria-hidden="true" />
            Para empresas
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Cuidamos da informática do seu escritório.
          </h2>
          <p className="max-w-md leading-relaxed opacity-80">
            Menos tempo com equipamentos parados e mais tempo para o seu negócio. Planos sob medida para escritórios,
            clínicas, escolas e comércio.
          </p>
          <a
            href={whatsappLink('Olá! Gostaria de saber sobre os planos de manutenção para empresas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Falar sobre planos
          </a>
        </div>
        <ul className="flex flex-col divide-y divide-secondary-foreground/15 border-y border-secondary-foreground/15">
          {benefits.map((benefit) => (
            <li key={benefit} className="py-4 leading-relaxed">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
