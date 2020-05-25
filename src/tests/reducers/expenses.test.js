import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: expenses[1].id
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[0], expenses[2]])
})
test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '-1'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'new expense',
            note: '',
            amount: 100,
            createdAt: moment(0).add(5, 'days').valueOf()
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates: {
            description: 'bank card'
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state[2].description).toBe('bank card')
})
test('should not edit an expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'bank card'
        }
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})
