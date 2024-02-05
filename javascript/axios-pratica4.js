let input = document.querySelector('#cep')
let but = document.querySelector('#butResult')
let form = document.querySelector('form')
input.setAttribute("maxlength", "9")



let Box = document.querySelector('#caixa-de-resultados')

but.style.visibility = 'visible'
input.focus()


document.addEventListener('keydown', (event) => {
    input.setAttribute("type", "text")  
    if(event.key == 'Enter' ) {  
        console.log('oi')
        execution()
    }
})

but.addEventListener('click', execution)


function execution() {
    let search = input.value.replace("-", "")
    input.setAttribute("type", "number")
if(search.length != 8) {
    return alert('cep invalido')
} else {
let url = (`https://viacep.com.br/ws/${search}/json/`)
axios.get(url)
.then((response) => {
Show(response.data)
console.log(response.data)


response.statusText === "OK" ? console.log('requisicao feita')
 : console.log('requisicao mal sucedida')

})
input.value = '';
ResultsBox(search)
input.focus()

}

}






function Show(cont) {
    for(let id in cont) {
       if(document.querySelector('#'+id)) {
           document.querySelector('#'+id).textContent = cont[id];

           if(document.querySelector('#'+id).value && document.querySelector('#'+id) != cep) {
            document.querySelector('#'+id).setAttribute('disabled', 'disabled')
        }
       } 
    }
}



function ResultsBox(cep) {
    let option = document.createElement('option')

    option.textContent = (`${cep}`)
    Box.appendChild(option)
}



function mostraAlerta(elemento) {
    input.value = (elemento.value)
    execution()
}




