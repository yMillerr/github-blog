import { Route, Routes } from 'react-router-dom'

import { Layout } from '../layout/Layout'

import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:number" element={<Post />} />
      </Route>
    </Routes>
  )
}
