import { useEffect, useState } from 'react'

import { GlobalHtml } from './Globals'
import { Tile } from './Tile'
import { Drawer } from './Drawer'
import { ActionButton } from './ActionButton'
import { Heading } from './Heading'
import { TextInput } from './TextInput'
import { Select } from './Select'

const useFetch = url => {
  const [data, setData] = useState(null)
  useEffect(() => {
    let mounted = true
    const abortController = new AbortController()
    ;(async () => {
      const res = await fetch(url, {
        signal: abortController.signal
      })
      const data = await res.json()
      if (mounted) setData(data)
    })()
    const cleanup = () => {
      mounted = false
      abortController.abort()
    }
    return cleanup
  }, [url])
  return data
}

export {
  GlobalHtml,
  Tile,
  Drawer,
  ActionButton,
  Heading,
  TextInput,
  Select,
  useFetch
}
