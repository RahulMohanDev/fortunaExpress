import { useEffect } from 'react'
import { useState } from 'react'
import Todo from './components/todo.component'
import axios from 'axios'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/todos').then((res) => {
      setTodos(res.data.todos)
    })
  }, [])

  return (
    <>
      <h1>Todo App for Potato lovers</h1>
      <div className="card">
        <ol>
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />
          })}
        </ol>
      </div>
    </>
  )
}

export default App
