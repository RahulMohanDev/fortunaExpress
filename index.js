import express from 'express'

// start the server
const app = express()

// all my work will be done here
app.use(express.json())

const todos = []


// {
//     id: 1,
//     title: 'Learn Node.js',tod
//     description: 'Learn Node.js and Express.js',
// }


app.get('/api/v1/todos', (req, res) => {
  res.json({ todos: todos })
})

app.post('/api/v1/todos', (req, res) => {
  const { title, description } = req.body
  if (!title || !description) return res.status(400).send('Bad Request')
  let todo = { id: todos.length + 1, title, description }
  todos.push(todo)
  res.status(201).json({ todos: todos })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
