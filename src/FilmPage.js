import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'

import { Drawer, Heading, useFetch } from './components'
import { GenreList } from './components/GenreList'

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
    overview
  } = film

  console.log({ film })
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <Heading Type={'h1'} style={styles.title} text={title} />
        <Heading
          Type={'h2'}
          style={styles.releaseDate}
          text={`(${release_date})`}
        />
        <div style={styles.imageContainer}>
          <img style={styles.poster} src={poster} alt='poster for film' />
        </div>
      </div>
      <div style={styles.infoContainer}>
        <GenreList genres={genres || []} />
        <div style={styles.reviewContainer}>
          {vote_average && (
            <StarRatings
              rating={vote_average / 2}
              starDimension='15px'
              starSpacing='1px'
              starRatedColor='#fecf9d'
              name='rating'
            />
          )}
          <p style={styles.reviews}>{`${vote_count} reviews`}</p>
        </div>
      </div>
      <Drawer overview={overview} />
    </div>
  )
}

const styles = {
  container: {},
  innerContainer: {
    margin: '15px',
    textAlign: 'center'
  },
  imageContainer: {
    margin: '10px',
    textAlign: 'center',
    padding: '10px'
  },
  poster: {
    maxHeight: '320px'
  },
  title: {
    color: '#f3f3f3',
    fontSize: '20px',
    margin: '0px'
  },
  releaseDate: {
    color: '#c4c2ba',
    fontSize: '14px',
    margin: '0px'
  },
  subtitle: {
    margin: '0px',
    fontSize: '16px'
  },
  infoContainer: {
    margin: '15px'
  },
  reviewContainer: {
    margin: '10px 5px',
    display: 'flex',
    width: '200px',
    justifyContent: 'space-between'
  },
  reviews: {
    color: '#f3f3f3',
    margin: '0px'
  }
}

export default FilmPage
