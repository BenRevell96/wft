import React from 'react'
import { useRouter } from 'next/router'

import FilmPage from '../../src/FilmPage'
import { GlobalHtml } from '../../src/components'

const Film = () => {
  const router = useRouter()
  const filmId = router.query.id

  return (
    <>
      <GlobalHtml />
      <FilmPage id={filmId} />
    </>
  )
}

export default Film
