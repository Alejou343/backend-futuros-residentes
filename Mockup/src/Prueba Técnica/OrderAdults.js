//  Segunda cuestión

// Escribe una función que tome una lista de objetos "Persona" y devuelva una lista con las
// personas mayores de edad (edad mayor o igual a 18) ordenadas alfabéticamente por su nombre

function orderOnlyAdults(Persona) {
    const filteredAdults = Persona.filter(person => person.edad >= 18);

    return filteredAdults.sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    });
}