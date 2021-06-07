import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders welcome text', () => {
  render(<App />)
  const titleText = screen.getByText(/Welcome to BIP-Start/i)
  expect(titleText).toBeInTheDocument()
})
