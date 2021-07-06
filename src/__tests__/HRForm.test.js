import { render, screen } from '@testing-library/react'
import HRForm from '../components/HRForm'
import axios from 'axios'
import '@testing-library/jest-dom/extend-expect'

jest.mock('axios')
const onSubmit = jest.fn()

const setup = () => {
  const { getByText } = render(
    <HRForm />
  )
  return { getByText }
}

test('renders input form', () => {
  render(<HRForm />)
  const formelement = screen.findAllByRole('form')
  expect(formelement).toBeDefined()
})

test('Renders error when backend call returns error', () => {
  const errorMessage = 'ERROR ERROR'
  const errorObject = { message: errorMessage }

  axios.mockReturnValue([{ error: errorObject }, onSubmit])
  const { getByText } = setup()

  expect(getByText(errorMessage)).toBeInTheDocument()
})

test('Renders data when backend call is ok', () => {
  const helmRelease = require('./data/HelmRelease_example.json')

  axios.mockReturnValue([{ data: helmRelease, error: undefined }, onSubmit])
  const { getByText } = setup()

  expect(getByText(JSON.stringify(helmRelease))).toBeInTheDocument()
})
