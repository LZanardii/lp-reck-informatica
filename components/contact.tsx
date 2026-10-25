import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

const details = [
  { icon: Phone, label: 'Telefone', value: site.phoneDisplay, href: `tel:+${site.whatsappNumber}` },
  { icon: Mail, label: 'E-mail', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Endereço', value: site.address },
  { icon: Clock, label: 'Horário', value: site.hours },
]

export function Contact() {
  return (
    <section id="contato" className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-2">
      <div className="flex flex-col gap-5">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Contato</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Conte o que está acontecendo. A gente resolve.
        </h2>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          Mande uma mensagem com o modelo do equipamento e o problema. Respondemos rapidamente com uma primeira
          avaliação.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Chamar no WhatsApp
        </a>
      </div>

      <dl className="grid gap-4 sm:grid-cols-2">
        {details.map((item) => (
          <div key={item.label} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
            <item.icon className="size-5 text-primary" aria-hidden="true" />
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{item.label}</dt>
            <dd className="leading-relaxed">
              {item.href ? (
                <a href={item.href} className="break-words hover:text-primary">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
