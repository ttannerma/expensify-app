import React from 'react'
import NotFoundPage from '../../components/NotFoundPage'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'

test('should create NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})