import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import leftEffect from '../../assets/effects/left-effect.png'
import rightEffect from '../../assets/effects/right-effect.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftEffect} alt="" className="left-side" />

      <img src={logoImg} alt="" />

      <img src={rightEffect} alt="" className="right-side" />
    </HeaderContainer>
  )
}
