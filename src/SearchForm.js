import React, { useState } from 'react'

import { TextInput, Select } from './components'

const SearchForm = () => {
  const [values, updateValues] = useState({})
  console.log(values)
  return (
    <div style={styles.container}>
      <div>
        <span>Genre:</span>
        <Select onChange={ev => updateValues({ ...values, genre: ev.value })} />
      </div>
      <TextInput
        placeholder='Join code'
        onChange={ev => updateValues({ ...values, joinCode: ev.value })}
      />
    </div>
  )
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export default SearchForm
