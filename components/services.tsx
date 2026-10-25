import Image from 'next/image'
import { Laptop, Printer, type LucideIcon } from 'lucide-react'

type ServiceGroup = {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

const groups: ServiceGroup[] = [
  {
    icon: Laptop,
    title: 'Computadores e notebooks',
    description: 'Desktops, notebooks e all-in-one de todas as marcas.',
    items: [
      'Formatação e instalação de sistema',
      'Limpeza interna e troca de pasta térmica',
      'Upgrade de memória e SSD',
      'Troca de tela, teclado e bateria',
      'Remoção de vírus e otimização',
      'Backup e recuperação de dados',
      'Montagem de computadores',
      'Configuração de redes e Wi-Fi',
    ],
  },
  {
    icon: Printer,
    title: 'Impressoras',
    description: 'Jato de tinta, laser, multifuncionais e tanque de tinta.',
    items: [
      'Manutenção preventiva e corretiva',
      'Limpeza de cabeça de impressão',
      'Recarga de toner e cartuchos',
      'Desobstrução e troca de peças',
      'Reset e desbloqueio de almofadas',
      'Instalação em rede e compartilhamento',
    ],
  },
]

export function Services() {
  return (
    <section id="servicos" className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Serviços</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Do computador que não liga à impressora que mancha o papel.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="flex flex-col gap-6 rounded-xl border border-border bg-background p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <group.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{group.description}</p>
                </div>
              </div>
              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid overflow-hidden rounded-xl border border-border bg-secondary text-secondary-foreground md:grid-cols-2">
          <div className="relative aspect-[16/10] md:aspect-auto">
            <Image
              src="/images/impressora.png"
              alt="Técnico trocando o toner de uma impressora laser"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
            <h3 className="text-balance text-2xl font-semibold">Impressora parada atrasa o dia todo.</h3>
            <p className="leading-relaxed opacity-80">
              Trabalhamos com as principais marcas — HP, Epson, Brother, Canon, Samsung e Ricoh — e mantemos peças e
              toners de reposição para resolver rápido.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
