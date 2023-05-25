import { useForm } from 'react-hook-form'

import { SearchFormContainer } from './styles'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useIssues } from '../../../../hooks/useIssues'
import { MagnifyingGlass } from 'phosphor-react'

const searchFormSchema = z.object({
  searchInput: z.string(),
})

type SearchFormProps = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { searchIssues } = useIssues()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    watch,
  } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  const watchInput = watch('searchInput')

  async function handleSearch(data: SearchFormProps) {
    const { searchInput } = data

    await searchIssues(searchInput)

    reset()
  }

  const disableButtonCondition = !watchInput || watchInput.length === 0

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('searchInput')}
      />

      <button type="submit" disabled={isSubmitting || disableButtonCondition}>
        <MagnifyingGlass size={12} color="#E7EDF4" />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
