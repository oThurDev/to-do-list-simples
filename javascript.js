//Elementos
const input = document.querySelector('input');
const list = document.querySelector('ul');

//Funções
function handleKeyUp(e) {
    if (e.key === 'Enter') {
        //Adicionei o elemento na li
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        list.appendChild(newLi);

        //Limpei o input
        input.value = "";
    }
}

//Eventos
input.addEventListener("keyup", handleKeyUp);