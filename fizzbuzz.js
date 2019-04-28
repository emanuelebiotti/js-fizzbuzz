// Fizz Buzz test: Scrivi un programma che
// stampi i numeri da 1 a 100 ma per i multipli di
// 3 stampi “Fizz” al posto del numero e per i
// multipli di 5 stampi Buzz. Per i numeri che
// sono sia multipli di 3 che di 5 stampi
// FizzBuzz.

//imposto ciclo for per estrapolare numeri da 1 a 100

for (i=1; i<101; i++) {

// dico al codice di stampare prima fizzbuzz (multipli di 3*5, cioé sia di 3 che di 5).
// perché se facessi stampare prima i multipli di 3 e poi quelli di 5
// il codice poi troverebbe "occupati" i multipli di 3 con la dicitura "Fizz" e quelli di 5 con la dicitura "Buzz",
// ... quindi non saprebbe a chi assegnare la dicitura "FizzBuzz"!

  if (i % 15 == 0) {
    console.log('FizzBuzz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
