import React from 'react'
const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western'
]
export const Select = ({ onChange }) => {
  return (
    <select
      style={styles.select}
      onChange={({ currentTarget }) => onChange(currentTarget)}
    >
      <option key={'default'} value='All' defaultValue>
        Any
      </option>
      {genres.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  )
}

const styles = {
  select: {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    outline: 'none',
    borderRadius: '0',
    fontWeight: '700',
    fontSize: '14px',
    paddingRight: '12px'
  }
}
