import styled from 'styled-components'

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  > img {
    width: 1.125rem;
    max-width: 100%;
    height: 1.125rem;
  }
`
