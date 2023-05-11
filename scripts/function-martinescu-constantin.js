

//1. Scrie o funcție care primește un număr și returnează true dacă este par, altfel false.

function nrPar(a) {
    if (a % 2 === 0) {
        return true;
    }
    return false;
}

//console.log(nrPar(5));

//2. Scrie o funcție care primește două numere și returnează suma lor inmultita cu 0.1

function sumainmultita(a, b) {
    return (a + b) * 0.1;
}


//console.log(sumainmultita(10, 10));

//3. Scrie o functie care calculeaza procentajul dintr-un numar. Procentajul si numarul se introduc ca parametrii.


function calcProcentaj(numar, procentaj) {

    return (procentaj / 100) * numar;
}

//console.log(calcProcentaj(5, 10));

//4. Scrie o funcție care primește trei numere și returnează cel mai mare dintre ele.

function celmaimare(a, b, c) {

    return Math.max(a, b, c);
}

//console.log(celmaimare(12, 4225, 567));

// 5. Scrie o funcție care primește un număr și returnează suma tuturor numerelor întregi de la 0 până la acel număr.

function sumaNrIntregi(a) {
    let suma = 0;
    for (i = 0; i <= a; i++) {
        suma += i;
    }
    return suma;
}
//console.log(sumaNrIntregi(3));

// 6. Scrie o funcție care primește un număr și returnează true dacă este prim, altfel false.

function NrPrim(a) {
    for (i = 2, b = Math.sqrt(a); i <= b; i++) {
        if (a % i === 0) return false;
    }
    return a > 1;
}

//console.log(NrPrim(12));

// 7. Scrie o funcție care primește ca parametru o valoare numerica, iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 0. Funcția trebuie să returneze un mesaj diferit în fiecare caz.

/* -------------------------------------------------------------------------- */
/*                                  Math.sign                                 */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*              If the number is positive, this method returns 1.             */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                  If the number is negative, it returns -1.                 */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                    If the number is zero, it returns 0.                    */
/* -------------------------------------------------------------------------- */


function verificaNr(a) {
    return Math.sign(a);
}

//console.log(verificaNr(-78));

// 8. Scrie o functie care afiseaza toate numerele pare dintre un min si maxim dat ca parametru

function nrParesir(a, b) {

    let sum = [];

    for (i = a; i <= b; i++) {

        if (i % 2 === 0) {

            sum.push(i);
        }

    }

    return sum;

}

//console.log(nrParesir(8, 1012));

// 9. Scrie o functie care primeste 3 numere si afiseaza sir crescator cu acele numere.


function crescator(a, b, c) {
    let numere = [a, b, c];
    numere.sort(function (a, b) {
        return a - b;
    });
    return numere;

}

//console.log(crescator(1087, 9, 45));

//10. Scrie o functie care primeste 3 numere si afiseaza sir descrescator cu acele numere.

function descrescator(a, b, c) {
    let numere = [a, b, c];
    numere.sort(function (a, b) {
        return b - a;
    });
    return numere;

}

//console.log(descrescator(9, 1, 18));


// 11. Scrie o functie care primeste 1 numar si afiseaza tabla inmultirii pentru acel numar.

function tablainmultirii(input) {
    let res = [];
    for (let i = 0; i <= 10; i++) {
        res.push(`${input} X ${i} = ${input * i}`);
    }
    return console.log(res);
}

//console.log(tablainmultirii(7));

// 12. Scrie o functie care primeste 3 parametrii: nr persoane, locuri disponibile, mese. Aseaza numarul de persoane la mese astfel incat sa nu ramana nici o masa libera, iar la final afiseaza cate locuri libere au ramas (total).
function asezare(persoane, locuri, mese) {

    let locurilaMasa = Math.floor(locuri / mese);
    let locuriFolosite = Math.min(persoane, locurilaMasa * mese);
    let locuriLibere = locuri - locuriFolosite;

    console.log("Locuri libere:" + locuriLibere);

    return locuriLibere;


}


//asezare(6,12, 3);

//13.  Scrie o functie care primeste 1 singur parametru. Acest parametru defineste care dintre functiile de mai sus este apelata. Afiseaza parametru primit, numele functiei apelate precum si raspunsul acelei functii.

function apel(callback) {
    //console.log(callback);
    let param = 82;
    callback(param);

}

//apel(tablainmultirii);

// 14. Scrie o functie care primeste anul nasterii si calculeaza varsta in functie de anul curent.

function calcVarsta(anulNasterii) {

    var anulactual = new Date().getFullYear();
    return console.log("Varsta ta este de " + (anulactual - anulNasterii) + " ani.")
}


//calcVarsta(2000);

// 15. Scrie o functie care calculeaza anii unui animal de companie dat ca parametru.

function catiAniAre(Numeanimal) {

    let ani;

    switch (Numeanimal) {
        case "Rex":
            nascut = 2012;
            ani = new Date().getFullYear() - nascut;
            console.log("Rex are varsta de " + ani + " ani.")
            break;
        case "Tomi":
            nascut = 2010;
            ani = new Date().getFullYear() - nascut;
            console.log("Tomi are varsta de " + ani + " ani.")
            break;
        case "Felix":
            nascut = 2009;
            ani = new Date().getFullYear() - nascut;
            console.log("Felix are varsta de " + ani + " ani.")
            break;

    }

    return ani;

}

//catiAniAre("Felix");