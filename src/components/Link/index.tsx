import { LinkContainer } from './styles'
import { Link as LinkIcon } from 'phosphor-react'

interface LinkProps {
  title: string
  href: string
}

export function Links({ title, href }: LinkProps) {
  return (
    <LinkContainer href={href} target="_blank" rel="noreferrer">
      <span>{title}</span>

      <LinkIcon size={12} color="#3294F8" />
    </LinkContainer>
  )
}
