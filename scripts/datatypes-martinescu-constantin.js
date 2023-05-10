//1. Operatori aritmetici

// 1.1 Scrieți un program JavaScript care adună două numere și afișează rezultatul în consolă.

var a = 2;
var b = 5;
var calc = a + b;
//console.log(calc);


// 1.2 Scrieți un program JavaScript care calculează media a trei numere și afișează rezultatul în consolă.

var c = 7;
var suma = a + b + c;
var media = suma / 3;
//console.log(media);

//2. Operatori de atribuire

// 2.1Scrieți un program JavaScript care adaugă 5 la o variabilă numită "x" și afișează rezultatul în consolă.

var x = 2;
x = x + 5;
//console.log(x);

// 2.2 Scrieți un program JavaScript care atribuie valoarea 10 variabilei "y" și apoi adaugă 2 la aceasta utilizând operatorul "+=".

var y = 10;
y += 2;

//console.log(y);

// 3. Operatori de comparare

// 3.1 Scrieți un program JavaScript care compară două numere și afișează "A este mai mare decât B" dacă primul număr este mai mare decât al doilea, sau "B este mai mare sau egal cu A" dacă al doilea număr este mai mare sau egal cu primul.

a = 10;
b = 9;


if (a > b) {
    console.log("A este mai mare decât B");
} else {
    console.log("B este mai mare sau egal cu A");
}

// 3.2 Scrieți un program JavaScript care verifică dacă o variabilă numită "varsta" este mai mare sau egală cu 18 și afișează un mesaj corespunzător în consolă, în funcție de rezultat.

let varsta = 18;


if (varsta >= 18) {
    console.log("Da, poti sa consumi bauturi alcoolice:)");
} else {
    console.log("Mai asteapta!");
}

// 4. Operatori logici

// 4.1 Scrieți un program JavaScript care verifică dacă două condiții sunt adevărate utilizând operatorul "&&" (și logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat.


if (varsta <= 17 && a < 20) {
    console.log("Se verifica ambele");
} else {
    console.log('Cel putin una nu e adevarata');
}

// 4.2  Scrieți un program JavaScript care verifică dacă o condiție este adevărată utilizând operatorul "!" (nu logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat.

let conditie = false;

if (!conditie == true) {
    console.log("Este adevarat!")
} else {
    console.log("Este fals!");
}


