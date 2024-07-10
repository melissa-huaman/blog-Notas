//Estamos creando una función
function addNote(){
//Capturar el dato que se pone en el input
const noteInput = document.getElementById('noteInput')
//comunicarnos con ul en HTML
const noteList = document.getElementById('noteList')


//Generamos una condicionales
//condición --> si la caja de texto es vacia
//entonces procedo a llenar la lista

    if(noteInput.value.trim() !== ""){
    const newNote = document.createElement('li');
    newNote.textContent = noteInput.value;
    noteList.appendChild(newNote);
    noteInput.value = "";
    }else{
    alert('Por favor, escriba una nota antes de agregar :)');
    }
}