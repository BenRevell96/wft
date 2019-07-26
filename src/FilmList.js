import React, { useEffect, useState } from 'react'

import { Tile } from './components'

function App() {
  const [films, setFilms] = useState([])
  useEffect(() => {
    fetchFilms()
  }, [])

  const fetchFilms = async () => {
    const response = await fetch('api/fetchFilms')
    const body = await response.json()
    console.log({ body })

    setFilms(body.results)

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }
  const movieList = films.map(data => <Tile data={data} />)

  return <div style={styles.container}>{movieList}</div>
}

const styles = {
  container: {
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '5px',
  },
}

export default App
