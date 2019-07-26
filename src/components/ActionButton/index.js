import React from 'react'

export const ActionButton = ({ text }) => {
  return (
    <div style={styles.container}>
      <p>{text}</p>
    </div>
  )
}

const styles = {
  container: {
    position: 'absolute',
    right: '0px',
    top: '55px',
    width: '100px',
    backgroundColor: '#fecf9d',
    borderBottomLeftRadius: '10px',
    borderTopLeftRadius: '10px',
  },
}
