let inputContact = document.querySelector(".input-contact")
let buttonSearch = document.querySelector(".button-search")
let nameUser = document.querySelector(".name-user")
let telUser = document.querySelector(".tel-user")

const contact = [
    {name:"Valerio", number: "43 98407-1488" },
    { name: "Maria", number: "43 99125-3841" },
    { name: "João", number: "43 99872-5490" },
    { name: "Ana", number: "43 99741-2203" },
    { name: "Pedro", number: "43 99536-4472" },
    { name: "Lucas", number: "43 99685-9017" },
    { name: "Mariana", number: "43 99402-1186" },
    { name: "Gabriel", number: "43 99953-2675" },
    { name: "Beatriz", number: "43 99188-7530" },
    { name: "Rafael", number: "43 99611-8439" },
    { name: "Julia", number: "43 99274-6821" },
    { name: "Carlos", number: "43 99390-5407" },
    { name: "Fernanda", number: "43 99832-2194" },
    { name: "Gustavo", number: "43 99571-4662" },
    { name: "Camila", number: "43 99960-3145" },
    { name: "Rodrigo", number: "43 99143-9072" },
    { name: "Larissa", number: "43 99608-3751" },
    { name: "Felipe", number: "43 99979-8253" },
    { name: "Patrícia", number: "43 99214-6358" },
    { name: "André", number: "43 99488-2095" },
    { name: "Amanda", number: "43 99876-3402" },
    { name: "Vinícius", number: "43 99351-7816" },
    { name: "Bruna", number: "43 99915-2487" },
    { name: "Diego", number: "43 99564-1389" },
    { name: "Renata", number: "43 99179-4423" },
    { name: "Eduardo", number: "43 99207-3754" },
    { name: "Carolina", number: "43 99987-9012" },
    { name: "Matheus", number: "43 99490-2834" },
    { name: "Bianca", number: "43 99738-6195" },
    { name: "Paulo", number: "43 99651-4470" },
    { name: "Letícia", number: "43 99382-5551" },
    { name: "Sofia", number: "43 99546-7628" },
    { name: "Thiago", number: "43 99263-4392" },
    { name: "Débora", number: "43 99158-9044" },
    { name: "Ricardo", number: "43 99710-2146" },
    { name: "Eduarda", number: "43 99935-7805" },
    { name: "Vitor", number: "43 99841-9720" },
    { name: "Isabela", number: "43 99225-5409" },
    { name: "Marcelo", number: "43 99918-6233" },
    { name: "Natália", number: "43 99192-3081" },
    { name: "Leandro", number: "43 99367-9584" },
    { name: "Carla", number: "43 99502-8710" },
    { name: "Fernando", number: "43 99721-5642" },
    { name: "Tatiane", number: "43 99815-7793" },
    { name: "Roberto", number: "43 99209-6205" },
    { name: "Elaine", number: "43 99181-4436" },
    { name: "César", number: "43 99967-2128" },
    { name: "Priscila", number: "43 99680-3371" },
    { name: "Alexandre", number: "43 99300-4952" },
    { name: "Simone", number: "43 99272-6489" },
    { name: "Daniela", number: "43 99785-2304" }
    { name: "Manoela", number: "43 99785-5555" }
]

// console.log(contact)

function searchUser() {
    let validator = false
    for (let i = 0; i < contact.length; i++) {
        
        if(inputContact.value.toUpperCase() === contact[i].name.toUpperCase()) {
            validator = true
            let userFoundNotice = document.querySelector(".user-found-notice")
            userFoundNotice.innerHTML = "Usuário encontrado com sucesso"
            nameUser.innerHTML = `​👤​ Usuário: ${contact[i].name}`
            telUser.innerHTML = `📞 Telefone: ${contact[i].number}`
            
        }
        
        
    }

    if(validator === false) {
        let userFoundNotice = document.querySelector(".user-found-notice")
        userFoundNotice.innerHTML = "Não encontramos o usuário digitado !!"
        nameUser.innerHTML = ""
        telUser.innerHTML = ""
    }
}


buttonSearch.addEventListener("click", searchUser)