import React from 'react'

export const Counter = ({
    onIncrement,
    onDecrement,
    value = 0,
} = {}) => {
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={onIncrement}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={onDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}