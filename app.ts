import  express  from "express";
import todoRoute from './Routes/todos'
import bodyParser from "body-parser";
const app = express()

app.use(bodyParser.json())
app.use(todoRoute)
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running")
})