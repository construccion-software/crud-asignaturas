import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
 
describe('Page', () => {
  it('renders', () => {
    const {container} = render(<Home/>)
    expect(container).toMatchSnapshot()
  });

  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  });

  it('aknowledges CreateModal', () => {
    render(<Home />)
    
    const elem = screen.getByText('Create Subject')
  });
})