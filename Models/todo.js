// our todo model:

const todos = []

class Todo {
  constructor(title, description, id = todos.length + 1) {
    this.id = id
    this.title = title
    this.description = description
  }

  static find(id) {
    if (Number.isNaN(Number(id))) return null
    const todo = todos.find((todo) => todo.id === Number(id))
    if (todo != undefined) {
      return todo
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
    if (Number.isNaN(Number(id))) return null
    const todo = todos.find((todo) => todo.id === Number(id))
    if (todo != undefined) {
      const index = todos.indexOf(todo)
      todos.splice(index, 1)
      return todo
    }
  }

  //update will be static but you can use save to update also
  static update(id, title, description) {
    if (Number.isNaN(Number(id))) return null
    const todo = todos.find((todo) => todo.id === Number(id))
    if (todo != undefined) {
      if (title) todo.title = title
      if (description) todo.description = description
      return todo
    }
  }
}
