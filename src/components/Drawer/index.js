import React from 'react'
import { ActionButton } from '../ActionButton'

export const Drawer = ({ overview }) => {
  return (
    <div style={styles.drawerContainer}>
      <div style={styles.overviewContainer}>
        <p>{overview}</p>
      </div>
      <div style={styles.actionButtonContainer}>
        <ActionButton text={'vote ✅'} />
        <ActionButton text={'veto ❌'} />
      </div>
    </div>
  )
}

const styles = {
  overviewContainer: {
    width: '220px',
    minHeight: '180px',
    marginLeft: '25px',
    overflow: 'scroll',
    color: '#fff'
  },
  drawerContainer: {
    position: 'relative',
    bottom: '0',
    backgroundColor: '#4d4671',
    width: '100%',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    boxShadow: '2px 0px 10px rgba(0,0,0,0.3)'
  },
  actionButtonContainer: {
    position: 'absolute',
    right: '0px',
    top: '45px'
  }
}
