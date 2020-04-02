import React from 'react'
import {createStore, createEvent} from 'effector'
import {useStore} from 'effector-react'

const increment = createEvent('increment')
const decrement = createEvent('decrement')
const resetCounter = createEvent('reset counter')

const counter = createStore(5)
    .on(increment, state => state + 1)
    .on(decrement, state => state - 1)
    .reset(resetCounter)

counter.watch(console.log)

const Counter = () => {
    const value = useStore(counter) // subscribe to store changes

    return (
        <>
            <div>Count: {value}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={resetCounter}>reset</button>
        </>
    )
};
export default Counter;

