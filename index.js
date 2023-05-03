import express from 'express'
import todoRouter from './routes/todo/todoController.js'
import cors from 'cors'
import Todo from './Models/Todo.js'
import mongoose  from 'mongoose'



// import Potato from 'potato'

// start the server
const app = express()

// public files
app.use(express.static('public'))

// all my work will be done here
app.use(express.json())

// middleware
app.use(express.urlencoded({ extended: true }))


mongoose.connect('mongodb://127.0.0.1:27017/fortunaTodo');
// db
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected to the db!")
});

// init

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
