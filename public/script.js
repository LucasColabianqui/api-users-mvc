const form = document.getElementById("userForm")
const userList = document.getElementById("userList")

const API = "http://localhost:3000/api/users"

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    const response = await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email})
    })

    if(response.ok){
        alert("Usuário cadastrado!")
        loadUsers()
    }else{
        alert("Erro ao cadastrar")
    }
})

async function loadUsers(){

    const response = await fetch(API)
    const users = await response.json()

    userList.innerHTML = ""

    users.forEach(user=>{

        const li = document.createElement("li")
        li.textContent = user.name + " - " + user.email
        userList.appendChild(li)

    })
}

loadUsers()
