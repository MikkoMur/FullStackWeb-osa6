import { useSelector, useDispatch } from 'react-redux'
import { voteId } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

  const unFilteredAnecdotes = useSelector(state => state.anecdotes)
  const filterStr = useSelector(state => state.filter)
  console.log(filterStr)
  const dispatch = useDispatch()

  const anecdotes = unFilteredAnecdotes.filter(anecdote => anecdote.content.includes(filterStr))

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteId(id))
  }
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList