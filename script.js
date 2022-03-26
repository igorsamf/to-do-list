


const listaTarefas = document.getElementById('lista-tarefas');
let input = document.querySelector('#texto-tarefa');
let btn = document.getElementById("criar-tarefa");
let listCreated = document.getElementsByTagName('li');
console.log(listCreated)

function recebeClick() {
    let list = document.createElement('li');
    list.innerText = input.value;
    listaTarefas.appendChild(list);
    input.value = '';
}

btn.addEventListener("click", recebeClick);

//Referências: 
//https://pt.stackoverflow.com/questions/225809/como-adicionar-uma-classe-em-javascript-puro

function criarCinza(event) {
    event.target.classList.toggle('cinza');
}
listaTarefas.addEventListener('click', criarCinza);



