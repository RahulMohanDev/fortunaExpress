import mongoose from 'mongoose'

// you defining how your document should look like
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
})

// you are telling which collection to use
const Todo = mongoose.model('Todo', todoSchema)

export default Todo;
