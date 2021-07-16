/*Palindroma 
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
1 - Prendere la parola dall'utente
2 - Girare la parola
3 - Confrontare la parola girata con quella originale e verifico se è uguale
*/


//chiede la parola
var userWord = prompt('Inserire una parola', 'Scatola');

//verificare la parola inserita dall'utente
while (!userWord || userWord.trim() === '') {
    userWord = prompt('Inserire una parola', 'Scatola');
}


//formattazione
userWord = userWord.trim().toLowerCase();

//dichiarazione della funzione
isPalindrome(userWord);

/*
//tipo di funzione con molti passaggi
function isPalindrome(word) {
    console.log(word);
    //girare la parola 
    var reversedWord = ''; // Array che conterrà ogni singolo carattera della parola dell'utente 

    //creo un ciclo for per separare ogni carattere della parola
    for (var i = word.length - 1; i >= 0; i--) {
        //prendiamo ogni carattere singolarmente
        var currentLetter = word[i];
        reversedWord += currentLetter;
    }

    console.log(reversedWord);

    //Confrontare la parola girata con quella originale e verifico se è uguale
    if (reversedWord === word) {
        console.log('La parola inserita è palindroma');
        return true;
    } else {
        console.log('La parola inserita non è palindroma');
        return false;
    }


}
*/

//altro modo di eseguire
/* 3 metodi di Array
.split('')  trasforma una stringa in una Array separandone i caratteri in base a un separatore
.reverse('')  Puo essere usate solo per le Array e capovolgere gli elementi di una Array
.join('')  trasforma una Array in una Stringa, unendone gli elementi in base al loro ordine
*/




//funzione con meno passaggi usando split/reverse/join
function isPalindrome(word) {

    //girare la parola al contrario
    var reversedWord = word.split('').reverse('').join(''); // ci crea una Array nella quale ci suddivide i caratteri della parola

    console.log(reversedWord);

    if (reversedWord === userWord) {
        console.log('La parola ' + userWord + ' è palindroma');
    } else {
        console.log('La parola ' + userWord + ' non è palindroma');
    }

    return reversedWord;

}






















