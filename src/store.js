import {createStore} from 'effector'

export const counter = createStore(5) // create store with zero as default value

counter.watch(console.log) // watch store changes
