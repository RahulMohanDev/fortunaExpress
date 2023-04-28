import express from 'express'
import todoRouter from './routes/todo/todoController.js'
import cors from 'cors'
import Todo from './Models/Todo.js'
// import Potato from 'potato';

// start the server
const app = express()

// public files
app.use(express.static('public'))

// all my work will be done here
app.use(express.json())

// middleware
app.use(express.urlencoded({ extended: true }))

// init

const todo1 = new Todo('learn js', 'learn js today')
todo1.save()
const todo2 = new Todo('lear react', 'learn react today')
todo2.save()
const todo3 = new Todo('learn express', 'learn express today')
todo3.save()
// app.use(cors())

// writing a custom middleware
// app.use((req,res,next)=>{
//   console.log("Hi I am a middle wear")
//   const authToken = req.headers.authorization;
//   console.log(req.headers);
//   // we will use a token from the db !
//   // token
//   if(authToken==='test@123') {
//     return next();
//   }
//   return res.status(401).send('not authorized');
// })

// console.log(process.env.PET_NAME);
app.use('/api/v1/todos', todoRouter)

app.listen(process.env.PORT_NO || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT_NO || 5000}`)
})
