import { render, screen } from '@testing-library/react'
import HRForm from '../components/HRForm'
import useAxios from 'axios-hooks'
import '@testing-library/jest-dom/extend-expect'

jest.mock('axios-hooks')
const onSubmit = jest.fn()

const setup = () => {
  const { getByText } = render(
    <HRForm />
  )
  return { getByText }
}

test('renders input form', () => {
  useAxios.mockReturnValue([{ data: undefined, loading: false, error: undefined }, onSubmit])
  render(<HRForm />)
  const formelement = screen.findAllByRole('form')
  expect(formelement).toBeDefined()
})

test('Renders error when backend call returns error', () => {
  const errorMessage = 'ERROR ERROR'
  const errorObject = { message: errorMessage }

  useAxios.mockReturnValue([{ data: undefined, loading: false, error: errorObject }, onSubmit])
  const { getByText } = setup()

  expect(getByText(errorMessage)).toBeInTheDocument()
})

test('Renders data when backend call is ok', () => {
  const helmRelease = require('./data/HelmRelease_example.json')

  useAxios.mockReturnValue([{ data: helmRelease, loading: false, error: undefined }, onSubmit])
  const { getByText } = setup()

  expect(getByText(JSON.stringify(helmRelease))).toBeInTheDocument()
})
