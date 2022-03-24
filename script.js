


const listaTarefas = document.getElementById('lista-tarefas');
let input = document.querySelector('#texto-tarefa');
let btn = document.getElementById("criar-tarefa");
let listCreated = document.getElementsByTagName('li');


function recebeClick() {
    let list = document.createElement('li');
    list.innerText = input.value;
    listaTarefas.appendChild(list);
    input.value = '';
}

btn.addEventListener("click", recebeClick);

function turnGray(event) {
    for (let i = 0; i < listCreated.length; i =+ 1) {
        listCreated[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'gray';
}
listaTarefas.addEventListener('click', turnGray);
