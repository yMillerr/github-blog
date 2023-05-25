import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { ArrowLeft } from 'phosphor-react'

import { Links } from '../../components/Link'
import { Icon } from '../../components/Icon'

import { IconsContainer, PostContainer } from './styles'

import githubIcon from '../../assets/icons/github-icon.png'
import calendarIcon from '../../assets/icons/calendar-icon.png'
import commentIcon from '../../assets/icons/commet-icon.png'

import { api } from '../../lib/api'

import { z } from 'zod'

import { formatDate } from '../../lib/formatDate'

interface PostIssue {
  body: string
  created_at: string
  comments: number
  title: string
  login: string
}

const postIssueSchema = z.object({
  body: z.string(),
  title: z.string(),
  comments: z.number(),
  created_at: z.string(),
  user: z.object({ login: z.string() }),
})

export function Post() {
  const [issue, setIssue] = useState({} as PostIssue)

  const { number } = useParams()

  async function fetchIssue() {
    const response = await api.get(
      `/repos/ymillerr/github-blog/issues/${number}`,
    )

    const {
      body,
      comments,
      created_at,
      title,
      user: { login },
    } = postIssueSchema.parse(response.data)

    setIssue({ body, comments, created_at, title, login })
  }

  useEffect(() => {
    fetchIssue()
  }, [])
  return (
    <PostContainer>
      <header>
        <div>
          <Link to="/">
            <ArrowLeft size={12} color="#3294F8" />
            Voltar
          </Link>

          <Links href="https://github.com" title="github" />
        </div>

        <h2>{issue.title}</h2>

        <IconsContainer>
          <Icon title={issue.login} icon={githubIcon} />

          <Icon title={formatDate(issue.created_at)} icon={calendarIcon} />

          <Icon title={`${issue.comments} comentários`} icon={commentIcon} />
        </IconsContainer>
      </header>

      <main>
        <p>{issue.body}</p>
      </main>
    </PostContainer>
  )
}
