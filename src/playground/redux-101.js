import { createStore } from 'redux'

// Action generators - function that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ setCountTo = 1 } = {}) => ({
    type: 'SET',
    setCountTo
})

const resetCount = () => ({
    type: 'RESET'
}) 


// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = () => (state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.setCountTo
            }
        case 'RESET': 
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsub = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 9000}))
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(setCount({ setCountTo: 40 }))
store.dispatch(resetCount())