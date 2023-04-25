import express from 'express'
import todoRouter from './routes/todo/todo.js'

// start the server
const app = express()

// all my work will be done here
app.use(express.json())

// writing a custom middleware
app.use((req,res,next)=>{
  console.log("Hi I am a middle wear")
  const authToken = req.headers.authorization;
  console.log(req.headers);
  // we will use a token from the db !
  // token 
  if(authToken==='test@123') {
    return next();
  }
  return res.status(401).send('not authorized');
})

// console.log(process.env.PET_NAME);
app.use('/api/v1/todos',todoRouter);

app.listen(process.env.PORT_NO || 6000, () => {
  console.log(`Server is running on port ${process.env.PORT_NO || 6000}`)
})
