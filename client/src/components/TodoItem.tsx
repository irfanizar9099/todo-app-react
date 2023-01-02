import React from 'react'

type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void
    deleteTodo: (_id: string) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.completed ? `line-through` : ''
  return (
    <div className='card'>
      <div className='card--text'>
        <span className={checkTodo}>{todo.task}</span>
      </div>
      <div className='card--button'>
        <button
          onClick={() => updateTodo(todo)}
          className={todo.completed ? `hide-button` : 'card--button__done'}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className='card--button__delete'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
