import styled from 'styled-components'

export const PerfilContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  max-width: 864px;
  width: 100%;

  padding: 1rem;
  margin-bottom: 4.5rem;

  background-color: ${(props) => props.theme['base-profile']};

  border-radius: 10px;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media (min-width: 560px) {
    flex-direction: row;

    padding: 2rem;
  }
`

export const PerfilContent = styled.div`
  > header {
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-bottom: 10px;

    > h1 {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  > p {
    font-weight: 400;
    line-height: 1.625rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    margin-bottom: 1.5rem;

    text-align: left;
  }

  > footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    flex-wrap: wrap;
  }

  @media (min-width: 560px) {
    > header {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`
