import React from 'react'

export const TextInput = ({ placeholder, onChange }) => {
  return (
    <input
      style={styles.input}
      type='text'
      placeholder={placeholder}
      onChange={({ currentTarget }) => onChange(currentTarget)}
    />
  )
}

const styles = {
  input: {
    height: '15px',
    width: '200px',
    margin: '10px 0px'
  }
}
