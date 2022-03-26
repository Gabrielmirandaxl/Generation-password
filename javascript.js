let button = document.querySelector('#button')
let size = document.querySelector('#slider')
let  sizePassword = document.querySelector('#valor')
let resultPassword = document.querySelector('.result-passwd')
let passwd = document.querySelector('.passwd')
let charPassword = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#*_-"
let passwdCopy = ""

sizePassword.innerHTML = size.value

size.addEventListener('input', sizeValor)
button.addEventListener('click', generation)
resultPassword.addEventListener('click', copy)


function sizeValor(){
    sizePassword.innerHTML = this.value

}

function generation(){
    let pass = ""
    let n = charPassword.length
    for(let c = 0; c < size.value; c++){
        pass += charPassword.charAt(Math.floor(Math.random() * n))
    }
    
    resultPassword.classList.remove('remove')
    passwd.classList.remove('remove')
    resultPassword.innerHTML = pass
    passwdCopy = pass
}

function copy(){
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(passwdCopy)
}


var x = charPassword.charAt(Math.floor(Math.random() * charPassword.length))
console.log(x)


