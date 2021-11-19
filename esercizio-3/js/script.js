// Crea un array di numeri interi e fai la somma di tutti gli elementi
// che sono in posizione dispari

let num = [1,2,4,5,7,8,8,3,54,4,1,56,432,765,986,346765];

let sum = 0;

for(i = 1; i < num.length; i = i + 2){
    sum = sum + num[i];
    console.log(num[i])
}

alert(sum);