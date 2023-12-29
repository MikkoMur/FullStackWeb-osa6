import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log(anecdote)
    dispatch(createAnecdote(anecdote))
  }

  return (
    <div>
      <h2>Create new</h2>
        <form onSubmit={addAnecdote}>
          <input name="anecdote" />
          <button type="submit">add</button>
        </form>
    </div>
  )
}

export default AnecdoteForm