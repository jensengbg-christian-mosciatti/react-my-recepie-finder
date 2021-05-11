import { render, screen } from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders Header', () => {
  render(<App />)
  const linkElement = screen.getByText(/my recepie finder/i)
  expect(linkElement).toBeInTheDocument()
})
