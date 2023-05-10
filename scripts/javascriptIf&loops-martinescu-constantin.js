
// 1. Scrie un program care afișează numerele de la 1 la 10 folosind o buclă do-while.

/*

let numar = 0;

do {
    numar++;
} while (numar < 10);

console.log(numar);

*/

// 2. Scrie un program care afișează toate numerele pare între 0 și 20 folosind o buclă for.

/*

var numerePare = [];

for (let numarul = 0; numarul <= 20; numarul += 2) {

    numerePare.push(numarul);
}

console.log(numerePare);

*/

// 3. Scrie un program care citește două numere de la tastatură și afișează toate numerele între aceste două numere folosind o buclă for.

/*

var nr1 = Number(prompt());
var nr2 = Number(prompt());


if (nr1 <= nr2) {
    for (let i = nr1; i <= nr2; i++) {
        console.log(i);
    }
} else {
    for (let i = nr1; i >= nr2; i--) {
        console.log(i);
    }
}

*/

// 4. Scrie un program care citește un șir de caractere de la tastatură și afișează numărul de vocale folosind o buclă for și condiția pentru a determina dacă un caracter este o vocală.

/*
var caracter = prompt();
var numarVocale = 0;


for (let i = 0; i <= caracter.length; i++) {
    let rezultat = caracter[i];

    // o varianta

    if (rezultat === 'a' || rezultat === 'e' || rezultat === 'i' || rezultat === 'o' || rezultat === 'u') {
        numarVocale++;
    }

    // alta varianta

    if ('aeiou'.includes(rezultat)) {
       numarVocale++
    }

}
console.log(numarVocale);

*/

// 5. Scrie un program care citește un număr de la tastatură și afișează tabla înmulțirii pentru acel număr folosind o buclă for.

/*

var input = Number(prompt("Tabla inmultirii cu:"));
var tablaInmultirii = [];


for (let i = 0; i <= 10; i++) {

    tablaInmultirii.push(`${input} X ${i} = ${input * i}`);
}

console.log(tablaInmultirii)

*/
