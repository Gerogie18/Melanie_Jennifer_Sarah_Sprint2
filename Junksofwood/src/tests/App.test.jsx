 import { describe, it, expect } from 'vitest'

// describe('A truthy statement', () => {
//   it('should be equal to 2', () => {
//     expect(1+1).toEqual(2)
//   })
// })

import { render, screen } from '@testing-library/react'
import LatestArrivals from '../components/homecomponents/LatestArrivals'

describe('LatestArrivals', () => {
  it('renders the App component', () => {
    render(<LatestArrivals />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})