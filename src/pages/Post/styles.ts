import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 864px;
  width: 100%;

  margin: -4.5rem auto;

  padding: 1.6rem;
  > header {
    background-color: ${(props) => props.theme['base-profile']};

    padding: 2rem;

    > div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 1.25rem;

      a {
        display: flex;
        align-items: center;
        gap: 8px;

        color: ${(props) => props.theme.blue};

        &:hover {
          opacity: 0.5;
        }
      }
    }

    > h2 {
      font-size: 1.5rem;
      line-height: 2rem;

      margin: 8px;
    }
  }

  > main {
    padding: 2.5rem;

    > p {
      color: ${(props) => props.theme['base-text']};
      line-height: 1.625rem;

      > span {
        text-decoration: underline;

        color: ${(props) => props.theme.blue};
      }
    }
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  flex-wrap: wrap;
`
