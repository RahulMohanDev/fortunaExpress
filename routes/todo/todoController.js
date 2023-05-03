import express from 'express'
import Todo from '../../Models/Todo.js'
const router = express.Router()

// '/api/v1/todos'
router.get('', (req, res) => {
  Todo.find().then((listOfTodo) => {
    const todos = listOfTodo.map((todo) => ({
      title: todo.title,
      id: todo.id,
    }))
    res.json({ todos: todos })
  })
})

// '/api/v1/todos/1'
router.get('/:id', (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).send('Bad Request')
  const todo = Todo.find({ _id: id })
    .then((todo) => {
      if (!todo) return res.status(404).send('Todo not found')
      res.json({ todo: todo })
    })
    .catch((err) => {
      return res.status(400).send(err.message || 'Bad Request')
    })
})

// /api/v1/todos
router.post('', (req, res) => {
  const { title, description } = req.body
  if (!title || !description) return res.status(400).send('Bad Request')
  const todo = new Todo({ title, description })
  todo.save()
  Todo.find().then((listOfTodo) => {
    res.json({ todos: listOfTodo })
  })
})

// we will learn more tomorrow, there two was to  update
router.put('/:id', (req, res) => {
  const { id } = req.params
  Todo.findByIdAndUpdate(id, req.body, { new: true }).then((todo) => {
    if (!todo) return res.status(404).send('Todo not found')
    res.json({ todo: todo })
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).send('Bad Request')
  Todo.findByIdAndDelete(id).then((todo) => {
    if (!todo) return res.status(404).send('Todo not found')
    Todo.find().then((listOfTodo) => {
      res.json({ todo: listOfTodo })
    })
  })
})

export default router
