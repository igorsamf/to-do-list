


let ol = document.querySelector('#lista-tarefas')
let input = document.querySelector('#texto-tarefa');
let btn = document.getElementById("criar-tarefa");



function recebeClick() {
    let list = document.createElement('li');
    list.innerText = input.value;
    ol.appendChild(list);
    input.value = '';
}

btn.addEventListener("click", recebeClick);