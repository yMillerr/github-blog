import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;

  margin: 0.75rem 0 3rem 0;

  display: flex;
  align-items: center;
  gap: 2rem;

  > input {
    width: 100%;

    background-color: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    padding: 0.75rem 1rem 0.75rem 1rem;

    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.625rem;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 0.75rem 1rem 0.75rem 1rem;

    border-radius: 8px;
    border: none;

    background-color: ${(props) => props.theme.blue};

    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;

    &:not(:disabled):hover {
      filter: brightness(0.8);
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`
