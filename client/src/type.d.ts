interface ITodo {
    _id: string
    task: string
    completed: boolean
    createdAt?: string
    updatedAt?: string
}

type TodoProps = {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
  }
  