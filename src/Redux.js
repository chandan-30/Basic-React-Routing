import React from 'react'
import store from './Store/store'
import { useState } from 'react';
function Redux() {
    const dispatch = store.dispatch;
    const [count, setCount] = useState(store.getState().count);
    const increment = () => {
        dispatch({
            type: "increment",
            payload: 1,
        })
        setCount(store.getState().count);
    }
    const decrement = () => {
        dispatch({
            type: "decrement",
            payload: 1,
        })
        setCount(store.getState().count);
    }
  return (
    <div>
        <h1> Count: {count}</h1>
        <button onClick={increment}>Increment</button> <br />
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Redux