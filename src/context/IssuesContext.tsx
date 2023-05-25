import { createContext, useState, ReactNode, useEffect } from 'react'

import { api } from '../lib/api'

import { z } from 'zod'

import { ProfileType } from '../pages/Home/components/Profile'

interface IssuesContextProviderProps {
  children: ReactNode
}

export interface IssuesProps {
  body: string
  created_at: string
  login: string
  comments: number
  title: string
  id: number
  user: ProfileType
  number: number
}

export interface IssuesContextType {
  issues: IssuesProps[]
  searchIssues: (query: string) => Promise<void>
  fetchIssues: () => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

export const issuesSchema = z.object({
  body: z.string(),
  created_at: z.string(),
  comments: z.number(),
  title: z.string(),
  id: z.number(),
  number: z.number(),
})

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  async function fetchIssues() {
    const response = await api.get('/repos/yMillerr/github-blog/issues')

    const verifyIfReponseHaveCorrectData = response.data.map(
      (issue: IssuesProps) => {
        issuesSchema.parse(issue)
        return issue
      },
    )

    setIssues(verifyIfReponseHaveCorrectData)
  }

  async function searchIssues(query: string) {
    const response = await api.get(`/search/issues`, {
      params: {
        q: `${query} repo:ymillerr/github-blog`,
      },
    })

    const verifyIfReponseHaveCorrectData = response.data.items.map(
      (issue: IssuesProps) => {
        issuesSchema.parse(issue)
        return issue
      },
    )

    setIssues([...verifyIfReponseHaveCorrectData])
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, searchIssues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
