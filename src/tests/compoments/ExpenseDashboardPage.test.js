import React from 'react'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})