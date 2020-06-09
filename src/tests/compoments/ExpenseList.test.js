import { ExpenseList } from '../../components/ExpenseList'
import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render ExpenseList with empty expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})