import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { WorkOrder } from '@/components/work-order'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-12 md:px-6 md:pt-20 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Assistência técnica em informática
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Seu computador e sua impressora funcionando de novo.
        </h1>
        <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          Na Reck Informática fazemos manutenção de computadores, notebooks e impressoras com diagnóstico claro,
          orçamento antes do serviço e prazo combinado.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Pedir orçamento no WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            Ver serviços
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative animate-in fade-in duration-1000">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <Image
            src="/images/bancada.png"
            alt="Bancada técnica da Reck Informática com computador e notebook abertos em manutenção"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-4 md:absolute md:-bottom-10 md:-left-10 md:mt-0 md:w-80">
          <WorkOrder />
        </div>
      </div>
    </section>
  )
}
