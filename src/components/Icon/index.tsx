import { IconContainer } from './styles'

interface IconProps {
  icon: string
  title: string
}

export function Icon({ icon, title }: IconProps) {
  return (
    <IconContainer>
      {icon && <img src={icon} alt="" />}
      <span>{title}</span>
    </IconContainer>
  )
}
