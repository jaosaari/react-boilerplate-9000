import App from './app'
import React from 'react'
import {shallow} from 'enzyme'

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.find('div').text()).toBe('Welcome to the React Boilerplate 9000 application, state of the art in React Boilerplate applications!!!')
    expect(wrapper).toMatchSnapshot()
  })
})
