const form = document.getElementById('form')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const buttonSubmit = document.getElementById('btnSubmit')
const btnIngreso = document.getElementById('btnIngreso')
const btnRegistro = document.getElementById('btnRegistro')
const containerRegistro = document.getElementById('registro')
const containerIngreso = document.getElementById('ingreso')


form.addEventListener('submit', function(event){
    event.preventDefault()
    let userEmail = emailInput.value
    let userPassword = passwordInput.value

    localStorage.setItem('Email', userEmail)
    localStorage.setItem('Password', userPassword)
})

btnIngreso.addEventListener('click', function(){
    containerIngreso.classList.add('d-none')
    containerRegistro.classList.remove('d-none')
})

btnRegistro.addEventListener('click', function(){
    containerIngreso.classList.remove('d-none')
    containerRegistro.classList.add('d-none')
})
