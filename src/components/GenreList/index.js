import React from 'react'

export const GenreList = ({ genres }) => {
  return (
    <div style={styles.container}>
      {genres.map(val => (
        <span style={styles.genre}>{val.name}</span>
      ))}
    </div>
  )
}

const styles = {
  container: {
    width: '230px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  genre: {
    padding: '3px 5px',
    borderRadius: '5px',
    backgroundColor: '#ccc',
    fontSize: '10px',
    margin: '5px'
  }
}
