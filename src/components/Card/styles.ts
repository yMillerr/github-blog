import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  background-color: ${(props) => props.theme['base-post']};

  max-width: 26rem;
  width: 100%;
  height: 16.25rem;

  padding: 2rem;

  border: none;
  border-radius: 10px;

  text-align: left;

  overflow-y: hidden;

  > header {
    display: flex;
    align-items: center;
    gap: 1rem;

    > h3 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      line-height: 2rem;

      max-width: 17.687rem;
    }

    > span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      line-height: 1.375rem;
    }
  }

  > main {
    margin-top: 1.25rem;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.625rem;
    }
  }

  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
  }
`
