// our todo model:

const todos = []

class Todo {
  constructor(title, description, id = todos.length + 1) {
    this.id = id
    this.title = title
    this.description = description
  }

  static find(id) {
    if (Number.isNaN(Number(id))) throw new Error('id must be a number')
    const todo = todos.find((todo) => todo.id === Number(id))
    if (todo != undefined) {
      return todo
    } else {
      return null
    }
  }

  save() {
    todos.push(this)
    return this
  }

  // this can be both static and non-static
  delete() {
    const index = todos.indexOf(this)
    todos.splice(index, 1)
  }

  static delete(id) {
    const todo = Todo.find(id)
    if (todo) todo.delete()
    else throw new Error('todo not found')
  }

  //update will be static but you can use save to update also
  static update(id, title, description) {
    const todo = Todo.find(id)
    if (todo) {
      if (title) todo.title = title
      if (description) todo.description = description
      return todo
    } else throw new Error('todo not found')
  }

  static all() {
    return todos
  }
}

export default Todo
