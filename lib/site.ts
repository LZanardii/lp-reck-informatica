export const site = {
  name: 'Reck Informática',
  phoneDisplay: '(11) 99999-9999',
  whatsappNumber: '5511999999999',
  email: 'contato@reckinformatica.com.br',
  address: 'Rua Exemplo, 123 — Centro',
  hours: 'Seg a Sex, 8h às 18h · Sáb, 8h às 12h',
}

export function whatsappLink(message = 'Olá! Gostaria de um orçamento com a Reck Informática.') {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}
