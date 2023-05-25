import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: relative;
  z-index: -1;

  filter: brightness(2);

  > img {
    max-width: 100%;
  }

  img:nth-child(2) {
    width: 9.25rem;
    height: 6.125rem;
  }

  .left-side {
    position: absolute;
    left: 0;
    bottom: 30px;
  }

  .right-side {
    position: absolute;
    right: 0;
    bottom: 30px;
  }

  @media (max-width: 425px) {
    .right-side {
      top: 0;
    }
  }
`
