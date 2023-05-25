import styled from 'styled-components'

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  > span {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.25rem;
    color: ${(props) => props.theme.blue};

    text-transform: uppercase;
  }

  &:hover {
    opacity: 0.7;
  }
`
