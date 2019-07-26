import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'

import { Drawer } from './components'

const FilmPage = ({ id = 0 }) => {
  const [film, setFilm] = useState({})

  useEffect(() => {
    const fetchFilm = async id => {
      const response = await fetch(`/api/fetchFilm?id=${id}`)
      const body = await response.json()

      setFilm(body)

      if (response.status !== 200) {
        throw Error(body.message)
      }
      return body
    }
    fetchFilm(id)
  }, [id])

  const poster = film.poster_path
    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
    : ''
  const {
    title,
    genres,
    vote_average,
    vote_count,
    release_date,
    overview,
  } = film
  console.log({ film })
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <h1>{title}</h1>
        <h2>({release_date})</h2>
        <div style={styles.imageContainer}>
          <img style={styles.poster} src={poster} alt="poster for film" />
        </div>
      </div>
      <div style={styles.infoContainer}>
        <h3>{title}</h3>
        <div style={styles.reviewContainer}>
          {vote_average && (
            <StarRatings
              rating={vote_average / 2}
              starDimension="15px"
              starSpacing="1px"
              starRatedColor="#4d4671"
              name="rating"
            />
          )}
          <p>{`${vote_count} reviews`}</p>
        </div>
      </div>
      <Drawer overview={overview} />
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
  },
  innerContainer: {
    textAlign: 'center',
  },
  imageContainer: {
    textAlign: 'center',
  },

  poster: {
    maxHeight: '320px',
  },
  infoContainer: {},
  reviewContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '180px',
    justifyContent: 'space-between',
  },
}

export default FilmPage
