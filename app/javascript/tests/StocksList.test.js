import React from 'react'
import { shallow } from 'enzyme'

import StocksList from '../components/StocksList'

describe('<StocksList />', () => {
  it('should shallow', () => {
    const Wrapper = shallow(<StocksList />)
    expect(Wrapper)
  })
})