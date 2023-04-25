import axios from 'axios'
import { useState } from 'react'

export default function TodoComponent({ todo }) {
  const [toggle, setToggle] = useState(false)
  const [todoDetails, setTodoDetails] = useState({})
  return (
    <div key={todo.id} style={{ border: '1px solid black' }}>
      {todo.title}
      <button
        onClick={() => {
          setToggle(!toggle)
          axios
            .get(`http://localhost:5000/api/v1/todos/${todo.id}`)
            .then((res) => {
              setTodoDetails(res.data.todo)
            })
        }}
      >
        show more
      </button>
      {toggle && todoDetails && <p>{todoDetails.description}</p>}
    </div>
  )
}
