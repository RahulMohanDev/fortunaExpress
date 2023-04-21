import express from 'express'

// start the server
const app = express()

// all my work will be done here
app.use(express.json())

const todos = [
  {
    id: 1,
    title: 'Learn Node.js',
    description: 'Learn Node.js and Express.js',
  }, 
  {
    id: 2,
    title: 'Learn React.js',
    description: 'Learn React.js and Redux',
  },
  {
    id: 3,
    title: 'Learn Vue.js',
    description: 'Learn Vue.js and Vuex',
  },
]

app.get('/api/v1/todos', (req, res) => {
  const todoTitles = todos.map((todo) => ({ title: todo.title, id: todo.id }))
  res.json({ todos: todoTitles })
})

app.get('/api/v1/todos/:id', (req, res) => {
  const { id } = req.params
  if (Number.isNaN(Number(id))) return res.status(400).send('Bad Request - ID must be a number')
  const todo = todos.find((todo) => todo.id === Number(id))
  if (!todo) return res.status(404).send('Todo not found')
  res.json({ todo: todo })
})

app.post('/api/v1/todos', (req, res) => {
  const { title, description } = req.body
  if (!title || !description) return res.status(400).send('Bad Request')
  let todo = { id: todos.length + 1, title, description }
  todos.push(todo)
  res.status(201).json({ todos: todos })
})


app.put('/api/v1/todos/:id', (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.status(400).send('Bad Request - ID must be a number');
  const todo = todos.find((todo) => todo.id === Number(id));  
  if (!todo) return res.status(404).send('Todo not found');
  const { title, description } = req.body;
  if (!title && !description) return res.status(400).send('Bad Request');
  if(title) todo.title = title;
  if(description) todo.description = description;
  res.status(200).json({ todos: todos });
})

app.delete('/api/v1/todos/:id', (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.status(400).send('Bad Request - ID must be a number');
  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) return res.status(404).send('Todo not found');
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
  res.status(200).json({ todos: todos });
})



app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
