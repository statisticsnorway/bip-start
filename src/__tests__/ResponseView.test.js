import { render, screen } from '@testing-library/react'
import ResponseView from '../components/ResponseView'

test('renders given data', () => {
  const testdata = '{key: value}'
  render(<ResponseView data={testdata} />)
  expect(screen.getByText(JSON.stringify(testdata))).toBeInTheDocument()
})
