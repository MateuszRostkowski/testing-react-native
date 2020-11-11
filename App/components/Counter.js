import React, { useState } from 'react'
import { Button } from './Button'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(state => state + 1)
  }

  const decrement = () => {
    setCount(state => state - 1)
  }

  return <Button text={count} onPress={increment} onLongPress={decrement} />
}
