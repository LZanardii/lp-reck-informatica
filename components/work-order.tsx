import { Check } from 'lucide-react'

const steps = [
  { label: 'Equipamento recebido', done: true },
  { label: 'Diagnóstico concluído', done: true },
  { label: 'Orçamento aprovado', done: true },
  { label: 'Em manutenção', done: false },
]

export function WorkOrder() {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
      <div className="flex items-center justify-between border-b border-dashed border-border pb-3 font-mono text-xs text-muted-foreground">
        <span>Ordem de serviço</span>
        <span>OS #2847</span>
      </div>
      <div className="flex flex-col gap-1 py-3">
        <p className="font-medium">Notebook Dell Inspiron</p>
        <p className="text-sm text-muted-foreground">Lento, superaquecendo</p>
      </div>
      <ol className="flex flex-col gap-2 text-sm">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-3">
            {step.done ? (
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-3" aria-hidden="true" />
              </span>
            ) : (
              <span className="relative flex size-5 items-center justify-center">
                <span className="absolute size-5 animate-ping rounded-full bg-accent opacity-60" />
                <span className="size-3 rounded-full bg-accent" />
              </span>
            )}
            <span className={step.done ? 'text-muted-foreground' : 'font-medium'}>{step.label}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
