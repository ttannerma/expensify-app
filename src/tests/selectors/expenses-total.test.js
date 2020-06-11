import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return total amount of expenses', () => {
    const total = selectExpensesTotal(expenses)
    expect(total).toBe(118195)
})

test('should correctly add up single expense', () => {
    const total = selectExpensesTotal([expenses[0]])
    expect(total).toBe(195)
})

test('should return 0 if no expenses are given', () => {
    const total = selectExpensesTotal([])
    expect(total).toBe(0)
})