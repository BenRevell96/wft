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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '16px',
    width: '100px',
    height: '40px',
    marginBottom: '10px',
    backgroundColor: '#fecf9d',
    borderBottomLeftRadius: '10px',
    borderTopLeftRadius: '10px'
  }
}
