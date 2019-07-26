import React from 'react'
import Link from 'next/link'

export const Tile = ({ data }) => {
  const { id, poster_path } = data
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`
  return (
    <div style={styles.container}>
      <Link href={`/film/${id}`} as={`/film/${id}`}>
        <img style={styles.poster} src={poster} alt="poster for film" />
      </Link>
    </div>
  )
}

const styles = {
  container: {
    margin: '5px',
    minWidth: '160px',
    textAlign: 'center',
  },
  poster: {
    width: '160px',
    height: '240px',
  },
}
