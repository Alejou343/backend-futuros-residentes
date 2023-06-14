//  Primera cuestión.

// Escribe una función que tome una cadena como entrada y devuelva true si la cadena es un
// palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda), o false en caso
// contrario


function verifyPalindrome(str) {
    const rightStr = str.toLowerCase().replaceAll(' ', '');
    const auxArr = rightStr.split('');
    const reversedStr = auxArr.reverse().join('');

    if (rightStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}