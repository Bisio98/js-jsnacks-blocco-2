// Generatore di “nomi cognomi” casuali: prendendo
// una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.

let name = ['alberto','olga','damiano','mattia'];
let surname = ['bisetti','rossi','bianchi'];
let newName = [];

num = prompt('Quanti nomi vuoi ottenere:')

for(let i = 0; i < num; i++ ){
    newName.push = (name[Math.floor(Math.random() * name.length)] + ' ' + surname[Math.floor(Math.random() * surname.length)]);
    console.log(newName)
}