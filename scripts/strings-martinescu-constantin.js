//1.(Data Types, Operators, Strings)
//Scrie un program care primește de la utilizator două cuvinte și le concatenează într-un singur șir de caractere.
// Apoi, determină lungimea șirului rezultat și afișează în consolă.


//cuv1 = prompt("Primul cuvant:");
//cuv2 = prompt("Al doilea cuvant:");

//var rezultat = cuv1.concat(cuv2);

//var lungime = rezultat.length;

//console.log(lungime);

//2.(Functions, Arrays, Strings)
//Scrie o funcție care primește un șir de caractere și returnează un array conținând fiecare caracter al șirului ca element separat.
// Apoi, apelează funcția cu un șir introdus de utilizator și afișează array-ul rezultat în consolă.


function sirCaractere(string) {

    var caractere = [];

    for (i = 0; i < string.length; i++) {
        caractere.push(string.charAt(i));
    }

    return caractere;
}

//console.log(sirCaractere("hello"));

//3.(Loops, Strings)
//Scrie un program care primește un șir de caractere de la utilizator și afișează fiecare caracter
// al șirului în ordine inversă, folosind un loop.

//var stringPrimit = prompt("Introdu cuvantul:");

//for (i = stringPrimit.length - 1; i >= 0; i--) {
// console.log(stringPrimit.charAt(i));
//}

//4.(Objects, Arrays, Strings)
//Creează un obiect care reprezintă o persoană, având proprietăți precum nume, vârstă și hobburi
// (reprezentate printr-un array de șiruri de caractere). Apoi, afișează un mesaj în consolă care să conțină informații despre persoană, folosind proprietățile obiectului.

const persoana = {
    nume: "Ionut",
    varsta: "23",
    hobby: ['sport', 'gatit', 'ciclism', 'inot']
}


//console.log(`Buna ma numesc ${persoana.nume} am varsta de ${persoana.varsta} de ani si sunt pasionat de ${persoana.hobby.join(", ")}.`);


//5.(For Loop, Strings)
//Scrie un program care primește un șir de cuvinte separate prin spații de la utilizator.
// Folosind un loop, afișează fiecare cuvânt în consolă, împreună cu numărul de caractere pe care îl conține.


var sir = prompt("Sir de cuvinte:");

var cuvinte = sir.split(" ");

for (var i = 0; i < cuvinte.length; i++) {
    var cuvant = cuvinte[i];
    var lungime = cuvant.length;
    console.log(cuvant + " - Număr de caractere: " + lungime);
}