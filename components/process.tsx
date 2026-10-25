const steps = [
  {
    title: 'Você entra em contato',
    text: 'Conte o problema pelo WhatsApp ou traga o equipamento até a loja.',
  },
  {
    title: 'Fazemos o diagnóstico',
    text: 'Avaliamos o equipamento e explicamos o que está acontecendo, sem termos complicados.',
  },
  {
    title: 'Você aprova o orçamento',
    text: 'Nada é feito sem a sua autorização. Valor e prazo combinados antes.',
  },
  {
    title: 'Entregamos funcionando',
    text: 'Equipamento testado, com garantia do serviço realizado.',
  },
]

export function Process() {
  return (
    <section id="como-funciona" className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:px-6 md:py-28">
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Como funciona</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Transparência do começo ao fim.
        </h2>
      </div>

      <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-3 border-t-2 border-secondary pt-5">
            <span className="font-mono text-sm text-muted-foreground">
              Etapa {index + 1}
            </span>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
