import { useContext } from 'react'
import { IssuesContext, IssuesContextType } from '../context/IssuesContext'

export function useIssues(): IssuesContextType {
  const context = useContext(IssuesContext)

  return context
}
