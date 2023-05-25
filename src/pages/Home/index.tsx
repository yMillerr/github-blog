import { Card } from '../../components/Card'
import { useIssues } from '../../hooks/useIssues'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import { CardsContent, HomeContainer } from './styles'

export function Home() {
  const { issues } = useIssues()

  return (
    <HomeContainer>
      <main>
        <Profile />

        <div>
          <h2>Publicações</h2>

          <span>{issues.length} publicações</span>
        </div>

        <SearchForm />

        <CardsContent>
          {issues &&
            issues.map((issue) => {
              return (
                <Card
                  href={`/post/${issue.number}`}
                  key={issue.id}
                  title={issue.title}
                  createdAt={issue.created_at}
                  body={issue.body}
                />
              )
            })}
        </CardsContent>
      </main>
    </HomeContainer>
  )
}
