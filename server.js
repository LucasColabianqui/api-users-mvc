import express from "express"
import cors from "cors"

import {
getAllUsers,
getUserByID,
createUser,
updateUser,
deleteUser
} from "./src/controllers/userController.js"

const app = express()

const HOST = "localhost"
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/api/users",getAllUsers)
app.get("/api/users/:id",getUserByID)
app.post("/api/users",createUser)
app.put("/api/users/:id",updateUser)
app.delete("/api/users/:id",deleteUser)

app.listen(PORT,HOST,()=>{
    console.log(`Server running http://${HOST}:${PORT}`)
})
