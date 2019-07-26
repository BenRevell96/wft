import React from 'react'
import { ActionButton } from '../ActionButton'

export const Drawer = ({ overview }) => {
  return (
    <div style={styles.drawerContainer}>
      <div style={styles.overviewContainer}>
        <p>{overview}</p>
      </div>
      <ActionButton text={'vote'} />
    </div>
  )
}

const styles = {
  overviewContainer: {
    width: '200px',
    height: '200px',
    marginLeft: '30px',
    overflow: 'scroll',
    color: '#fff',
  },
  drawerContainer: {
    position: 'fixed',
    bottom: '0',
    height: '200px',
    backgroundColor: '#4d4671',
    width: '100%',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    marginLeft: '-8px',
    boxShadow: '2px 0px 10px rgba(0,0,0,0.3)',
  },
}
