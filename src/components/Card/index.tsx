import { formatDate } from '../../lib/formatDate'
import { CardContainer } from './styles'

interface CardProps {
  body: string
  createdAt: string
  title: string
  href: string
}

export function Card({ body, createdAt, title, href }: CardProps) {
  return (
    <CardContainer to={href}>
      <header>
        <h3>{title}</h3>

        <span>{formatDate(createdAt)}</span>
      </header>

      <main>
        <p>{body.substring(0, 153).concat('...')}</p>
      </main>
    </CardContainer>
  )
}
