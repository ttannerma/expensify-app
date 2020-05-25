import { createStore, combineReducers } from 'redux'

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

// Store.dispatch returns new store

const storeOne = store.dispatch(addExpense({description: 'rent', amount: 400, createdAt: 2000}))
const storeTwo = store.dispatch(addExpense({description: 'coffee', amount: 500, createdAt: 1000}))
// const storeThree = store.dispatch(removeExpense({id: storeOne.expense.id }))
// store.dispatch(editExpense(storeTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate(1250))
// store.dispatch(setTextFilter('is'))
