/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione). Sommiamo i due numeri e stabiliamo se la somma 
dei due numeri è pari o dispari 
(usando una funzione) Dichiariamo chi ha vinto.
*/

//pari o dispari

var userChoice = prompt('Scegliere pari o dispari', 'pari');

//validazione sulla scelta dell'utente
while (userChoice.trim().toLowerCase() !== 'pari' && userChoice.trim().toLowerCase() !== 'dispari') {
    userChoice = prompt('Scegliere Pari o dispari', 'pari');
}

//chiedere all'utente di scegliere un numero da 1 a 5
var userNumber = prompt('Scegliere un numero da 1 a 5', '3');

//validazione sulla scelta del numero
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    userNumber = prompt('Scegliere un numero da 1 a 5', '3');
}

//generiamo un numero random da 1 a 5 per il CPU
var cpuNumber = getRandomNumber(1, 5);
console.log('Il numero generato è: ' + cpuNumber);


//sommiamo i due numeri
var sum = parseInt(userNumber) + cpuNumber;
console.log('La somma dei due numeri è: ' + sum);

//verifichiamo che la somma dei numeri genera un numero pari o dispari e vediamo chi vince
if ((isEven(sum) && userChoice.toLowerCase() === 'pari') || (!isEven(sum) && userChoice.toLowerCase() === 'dispari')) {
    console.log('Ha vinto il giocatore');
} else {
    console.log('Ha vinto il computer');
}


// funzione che genera il numero rando
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//funzione che verifica il numero se è pari oppure no
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}






















