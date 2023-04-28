import express from 'express'
import Todo from '../../Models/Todo.js'
const router = express.Router()

// '/api/v1/todos'
router.get('', (req, res) => {
  console.log(Todo.all())
  const todoTitles = Todo.all().map((todo) => ({
    title: todo.title,
    id: todo.id,
  }))
  res.json({ todos: todoTitles })
})

// '/api/v1/todos/1'
router.get('/:id', (req, res) => {
  const { id } = req.params
  try {
    const todo = Todo.find(id)
    if (!todo) return res.status(404).send('Todo not found')
    res.json({ todo: todo })
  } catch (error) {
    return res.status(400).send('Bad Request - ID must be a number')
  }
})

// /api/v1/todos
router.post('', (req, res) => {
  const { title, description } = req.body
  if (!title || !description) return res.status(400).send('Bad Request')
  const todo = new Todo(title, description)
  todo.save()
  res.status(201).json({ todos: Todo.all() })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  try {
    Todo.update(id, req.body.title, req.body.description)
  } catch (error) {
    return res.status(400).send(error.message)
  }
  res.status(200).json({ todos: Todo.all() })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  try {
    Todo.delete(id)
  } catch (error) {
    return res.status(400).send(error.message)
  }
  res.status(200).json({ todos: Todo.all() })
})

export default router
