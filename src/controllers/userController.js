import { users } from "../data/data.js"
import User from "../models/User.js"

export function getAllUsers(req,res){
    res.json(users)
}

export function getUserByID(req,res){

    const id = parseInt(req.params.id)

    const user = users.find(u => u.id === id)

    if(!user){
        return res.status(404).json({message:"User not found"})
    }

    res.json(user)
}

export function createUser(req,res){

    const {name,email} = req.body

    const newUser = new User(
        users.length + 1,
        name,
        email
    )

    users.push(newUser)

    res.status(201).json(newUser)
}

export function updateUser(req,res){

    const id = parseInt(req.params.id)

    const {name,email} = req.body

    const user = users.find(u => u.id === id)

    if(!user){
        return res.status(404).json({message:"User not found"})
    }

    user.name = name
    user.email = email

    res.json(user)
}

export function deleteUser(req,res){

    const id = parseInt(req.params.id)

    const index = users.findIndex(u => u.id === id)

    if(index === -1){
        return res.status(404).json({message:"User not found"})
    }

    users.splice(index,1)

    res.json({message:"User deleted"})
}