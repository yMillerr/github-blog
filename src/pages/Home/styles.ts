import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 1rem;

  > main {
    max-width: 864px;
    width: 100%;

    display: grid;

    margin: -4.8rem auto;

    > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.125rem;
        line-height: 1.175rem;
      }

      > span {
        color: ${(props) => props.theme['base-span']};
        font-size: 0.875rem;
        line-height: 1.375rem;
      }
    }
  }
`
export const CardsContent = styled.div`
  width: 100%;
  height: 40rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-bottom: 3rem;
  padding: 3px;

  overflow-y: auto;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`
