const express =require("express")
const app=express()
const cors = require('cors')
const port=process.env.PORT||5000;

//middlewear
app.use(cors())
app.use(express.json())


const users = [
    {id:1, name:"Mostafizur-Rahman", email:"mostafizur@gmail.com"},
    {id:2, name:"Tasnim-Rahman", email:"tasnim@gmail.com"}
]

app.get("/", (req,res)=>{
    res.send("user management server is running")
})

app.get("/users", (req,res)=>{
    res.send(users)
})

app.post ("/users", (req,res)=>{
    console.log(req.body)
    const newUser=req.body;
    newUser.id=users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`user management server is running on port:${port}`)
})



