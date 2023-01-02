import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function moveElementsToEndOfArray(arr:any) {
    arr.forEach(function(item:any,i: any){
        if(item?.completed === false){
          arr.splice(i, 1);
          arr.unshift(item);
        }
      });
    return arr;
  }
  const filteredData = moveElementsToEndOfArray(todos)

  const fetchTodos = (): void => {
    getTodos()
    .then(({ data: todos }: ITodo[] | any) => setTodos(todos))
    .catch((err: Error) => console.log(err))
  }

 const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
   e.preventDefault()
   addTodo(formData)
   .then(({ status }) => {
    if (status !== 200) {
      throw new Error('Error! Todo not saved')
    }
    getTodos()
        .then(({ data: todos }: ITodo[] | any) => setTodos(todos))
        .catch((err: Error) => console.log(err))
  })
  .catch((err) => console.log(err))
}

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
    .then(({ status }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not updated')
        }
        getTodos()
        .then(({ data: todos }: ITodo[] | any) => setTodos(todos))
        .catch((err: Error) => console.log(err))
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
    .then(({ status }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not deleted')
        } 
        getTodos()
        .then(({ data: todos }: ITodo[] | any) => setTodos(todos))
        .catch((err: Error) => console.log(err))
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>To Do</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {filteredData.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  )
}

export default App
