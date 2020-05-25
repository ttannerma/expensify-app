import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'
import React from 'react'

test('should render header correctly', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})