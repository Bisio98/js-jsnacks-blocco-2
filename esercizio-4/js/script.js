// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array. Continua a chiedere i numeri
// all’utente e a inserirli nell’array fino a quando
// a somma degli elementi è minore di 50.

let a = [];

// CICLO DO WHILE
let sum = 0;

do{
    let el;
    el = parseInt(prompt('Inserisci un numero:'));
    sum += el;
    a.push(el);
    console.log(a ,'somma:', sum)
}while(sum <= 50);

// CICLO FOR
// let sum = 0;
// let el;
// for(let i = 0; sum <= 50; i++){
//         el = parseInt(prompt('Inserisci un numero:'));
//         sum += el;
//         a.push(el)
// }   

// console.log(a, 'somma:', sum)

// CICLO WHILE
// let sum = 0;
// let el;

// el = parseInt(prompt('Inserisci un numero:'));
// sum += el;
// a.push(el);
// while(sum <= 50){
//     el = parseInt(prompt('Inserisci un numero:'));
//     sum += el;
//     a.push(el);
// }

// console.log(a, 'somma:', sum)