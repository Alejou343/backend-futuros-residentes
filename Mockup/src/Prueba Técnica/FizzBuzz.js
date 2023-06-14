//  Tercera cuestión

// Escribe una función que tome un número entero como entrada y devuelva "Fizz" si el número es
// divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos. Si no es divisible
// por ninguno de ellos, la función debe devolver el número como una cadena

function verifyNumber(x) {
    if(x === 0) {
        return '0'
    } else if (x % 15 === 0) {   // --> También es válido (x % 5 === 0  && x % 3 === 0)
        return 'FizzBuzz';
    } else if (x % 3 === 0) {
        return 'Fizz'
    } else if (x % 5 === 0) {
        return 'Buzz'
    } else {
        return String(x)
    }
}

