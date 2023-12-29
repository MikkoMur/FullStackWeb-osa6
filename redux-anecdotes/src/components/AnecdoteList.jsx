import { useSelector, useDispatch } from 'react-redux'
import { voteId } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const unFilteredAnecdotes = useSelector(state => state.anecdotes)
  const filterStr = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const anecdotes = unFilteredAnecdotes.filter(anecdote => anecdote.content.includes(filterStr))

  const vote = (id) => {
    dispatch(voteId(id))
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id).content
    dispatch(setNotification(`Voted for anecdote "${votedAnecdote.length > 60 ? votedAnecdote.substring(0,60) + '...' : votedAnecdote}"`))
    // Voting again before 5 seconds has passed makes these "resets" clash, so this solution would not be good irl
    setTimeout(() => dispatch(resetNotification()), 5000)
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