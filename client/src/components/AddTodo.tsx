import React, { useState } from 'react'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor='task'>What's your plan for today ?</label>
          <input onChange={handleForm} type='text' autoComplete='off' id='task'/>
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Task</button>
    </form>
  )
}

export default AddTodo
