import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import CreateModal from '../../src/components/CreateModal'

describe('CreateModal', () => {
  it('loads CreateModal', async () => {
    render(<CreateModal isOpen={true}/>) 
    await screen.findByRole('heading',{level: 2}) 
    //await screen.findByText('Create Subject')
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('Create Subject')
  })

  it('does not load CreateModal if it not open', async() => {
    render(<CreateModal isOpen={false}/>)
    await screen.queryByText('Create Subject')

    expect(screen.queryByText('Create Subject')).toBeNull()
  })

  // it('CreateModal has placeholder', async() => {
  //   render(<CreateModal isOpen={true}/>)
  //   await screen.findByRole('button',{name:'Code'})

  //   expect(screen.getByRole('button',{name:'Code'})).to
  // })

})