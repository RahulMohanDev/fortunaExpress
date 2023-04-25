import express from 'express'

const router = express.Router();

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

router.get('', (req, res) => {
  const todoTitles = todos.map((todo) => ({ title: todo.title, id: todo.id }))
  res.json({ todos: todoTitles })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  if (Number.isNaN(Number(id))) return res.status(400).send('Bad Request - ID must be a number')
  const todo = todos.find((todo) => todo.id === Number(id))
  if (!todo) return res.status(404).send('Todo not found')
  res.json({ todo: todo })
})

router.post('', (req, res) => {
  const { title, description } = req.body
  if (!title || !description) return res.status(400).send('Bad Request')
  let todo = { id: todos.length + 1, title, description }
  todos.push(todo)
  res.status(201).json({ todos: todos })
})


router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.status(400).send('Bad Request - ID must be a number');
  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) return res.status(404).send('Todo not found');
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
  res.status(200).json({ todos: todos });
})

export default router;