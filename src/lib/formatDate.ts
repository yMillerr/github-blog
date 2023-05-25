import { formatDistance, subDays } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(date: string): string {
  const haveDate = !date ? new Date() : new Date(date)

  const dateFomatted = formatDistance(
    subDays(new Date(haveDate), 0),
    new Date(),
    {
      addSuffix: true,
      locale: ptBR,
    },
  )

  return dateFomatted
}
