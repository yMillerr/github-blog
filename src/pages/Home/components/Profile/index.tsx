import { useEffect, useState } from 'react'

import { PerfilContainer, PerfilContent } from './styles'

import { Links } from '../../../../components/Link'
import { Icon } from '../../../../components/Icon'

import githubIcon from '../../../../assets/icons/github-icon.png'
import buildingIcon from '../../../../assets/icons/building-icon.png'
import userIcon from '../../../../assets/icons/user-icon.png'

import { api } from '../../../../lib/api'

import { z } from 'zod'

export interface ProfileType {
  login: string
  followers: number
  avatarUrl: string
  bio: string
  name: string
  company: string
}

const profileSchema = z.object({
  login: z.string(),
  followers: z.number(),
  avatar_url: z.string(),
  bio: z.string(),
  name: z.string(),
  company: z.string(),
})

export function Profile() {
  const [profileInfos, setProfileInfos] = useState({} as ProfileType)

  async function fecthProfileInfos() {
    const response = await api.get('/users/yMillerr')

    const {
      avatar_url: avatarUrl,
      bio,
      followers,
      login,
      name,
      company,
    } = profileSchema.parse(response.data)

    setProfileInfos({
      avatarUrl,
      bio,
      followers,
      login,
      name,
      company,
    })
  }

  useEffect(() => {
    fecthProfileInfos()
  }, [])

  return (
    <PerfilContainer>
      <img src={profileInfos.avatarUrl} alt="" />

      <PerfilContent>
        <header>
          <h1>{profileInfos.name}</h1>

          <Links href="https://github.com" title="github" />
        </header>
        <p>{profileInfos.bio}</p>

        <footer>
          <Icon title="yMiller" icon={githubIcon} />

          <Icon title={profileInfos.company} icon={buildingIcon} />

          <Icon
            title={
              profileInfos.followers > 1
                ? `${profileInfos.followers} Seguidores`
                : `${profileInfos.followers} Seguidor`
            }
            icon={userIcon}
          />
        </footer>
      </PerfilContent>
    </PerfilContainer>
  )
}
