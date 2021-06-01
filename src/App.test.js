import { render, screen } from '@testing-library/react'
import App from './App'

test('renders welcome text', () => {
  render(<App />)
  const titleText = screen.getByText(/Welcome to BIP-Start/i)
  expect(titleText).toBeInTheDocument()
})

test('renders essential parts of input form', () => {
  render(<App />)
  const formelement = screen.findAllByRole('form')
  expect(formelement).toBeDefined()
})
