import {createStore, createEvent} from 'effector'

const increment = createEvent('increment')
const decrement = createEvent('decrement')
const resetCounter = createEvent('reset counter')


const initialState = {
    counter: 0
};

const counter = createStore(0)
    .on(increment, state => state + 1) // subscribe to the event and return new store value
    .on(decrement, state => state - 1)
    .reset(resetCounter)

counter.watch(console.log);
