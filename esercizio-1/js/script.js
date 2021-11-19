// Inserisci un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.

let n = parseInt(prompt('Inserisci un numero:'));
if(n % 2 !== 0){
    n ++;
}

alert(n);