
/* 
Exercițiul 1: Calcularea sumei vârstelor
Primești un obiect studenti care conține informații despre studenți, inclusiv numele și vârsta lor.
Calculează suma vârstelor tuturor studenților și returnează rezultatul.*/

var studenti = {
  student1: { nume: "John", varsta: 20 },
  student2: { nume: "Alice", varsta: 22 },
  student3: { nume: "Mark", varsta: 19 }
};

function calculeazaSumaVarstelor(studenti) {
  let suma = 0;
  Object.values(studenti).forEach(function (student) {
    suma += student.varsta;

  });
  return console.log(suma);

}
//calculeazaSumaVarstelor(studenti);
//------------------------------------------------------------------------

/*
Exercițiul 2: Concatenarea numelor de familie
Primești un obiect familii care conține numele tatălui și al mamei pentru fiecare familie.
Concatenează numele de familie pentru fiecare familie și returnează rezultatul sub formă de șir de caractere.*/

var familii = {
  familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
  familie2: { numeTata: "Radu", numeMama: "Georgescu" }
};

function concatenare(familii) {
  let rezultat = "";

  Object.values(familii).forEach(familie => rezultat += familie.numeTata + " " + familie.numeMama + ", ");
  return console.log(rezultat);
}
//concatenare(familii);
//------------------------------------------------------------------------

/*
Exercițiul 3: Găsirea celui mai mare punctaj
Primești un obiect elevi care conține informații despre elevi, inclusiv numele și punctajul lor.
Găsește cel mai mare punctaj dintre toți elevii și returnează rezultatul.*/

var elevi = {
  elev1: { nume: "Maria", punctaj: 80 },
  elev2: { nume: "Alex", punctaj: 95 },
  elev3: { nume: "Andrei", punctaj: 85 }
};

function gasireElev(elevi) {
  var celmaiMarePunctaj = 0;

  Object.values(elevi).forEach(function (elev) {
    if (elev.punctaj > celmaiMarePunctaj) {
      celmaiMarePunctaj = elev.punctaj
    }
  });

  return console.log(celmaiMarePunctaj);

}
//gasireElev(elevi);
//------------------------------------------------------------------------

/*
Exercițiul 4: Verificarea existenței unui email într-un obiect
Primești un obiect utilizatori care conține informații despre utilizatori, inclusiv numele și adresa de email.
Verifică dacă o anumită adresă de email există în obiectul utilizatori și returnează true sau false.*/

var utilizatori = {
  utilizator1: { nume: "John", email: "john@example.com" },
  utilizator2: { nume: "Alice", email: "alice@example.com" }
};

function verificareExistentaEmail(utilizatori, adresaEmail) {
  var existaEmail = false;

  Object.values(utilizatori).forEach(function (utilizator) {
    if (utilizator.email === adresaEmail) {
      existaEmail = true;
    }
  });

  return console.log(existaEmail);
}

//verificareExistentaEmail(utilizatori, "joh4n@example.com");
//------------------------------------------------------------------------

/*
Exercițiul 5: Calcularea numărului total de persoane dintr-un obiect
Primești un obiect angajati care conține informații despre angajați, inclusiv numele și vârsta lor.
Calculează numărul total de persoane din obiectul angajati și returnează rezultatul.*/

var angajati = {
  departament1: { nume: "John", varsta: 30 },
  departament2: { nume: "Alice", varsta: 35 },
  departament3: { nume: "Mark", varsta: 28 }
};


function total(angajati) {

  totalAngajati = Object.values(angajati).length;


  return console.log("Numarul de angajati este de" + " " + totalAngajati + ".")
}
//total(angajati);
//------------------------------------------------------------------------

/*
Exercițiul 6: Verificarea existenței unui departament într-un obiect
Primești un obiect companie care conține informații despre departamentele dintr-o companie, inclusiv numele și vechimea lor.
Verifică dacă un anumit departament există în obiectul companie și returnează true sau false.*/

var companie = {
  departamentIT: { nume: "John", vechime: 5 },
  departamentVanzari: { nume: "Alice", vechime: 3 }
};


function verificare(companie, numeDepartament) {

  return console.log(companie.hasOwnProperty(numeDepartament));

}
//verificare(companie, "departamentIT");
//------------------------------------------------------------------------

/*
Exercițiul 7: Verificarea existenței unei calificări într-un obiect
Primești un obiect candidati care conține informații despre candidați, inclusiv numele și o listă de calificări.
Verifică dacă o anumită calificare există în obiectul candidati și returnează true sau false.*/

var candidati = {
  candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
  candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] }
};


function verificamCandidatii(candidati, calificareCautata) {

  var existaCalificare = false;

  Object.values(candidati).forEach(function (candidat) {
    if (candidat.calificari.includes(calificareCautata)) {
      existaCalificare = true;
    }
  });
  return console.log(existaCalificare);
}

//verificamCandidatii(candidati, "Sass");