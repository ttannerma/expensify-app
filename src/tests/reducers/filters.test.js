import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'myfilter'}
    const result = filtersReducer(undefined, action)

    expect(result.text).toBe('myfilter')
})

test('should set startDate filter', () => {
    const thisMoment = moment(0)
    const action = { type: 'SET_START_DATE', startDate: thisMoment }
    const result = filtersReducer(undefined, action)

    expect(result.startDate).toBe(thisMoment)
})

test('should set endDate filter', () => {
    const thisMoment = moment(0)
    const action = { type: 'SET_END_DATE', endDate: thisMoment }
    const result = filtersReducer(undefined, action)

    expect(result.endDate).toBe(thisMoment)
})