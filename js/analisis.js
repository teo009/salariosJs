//Proceso de cálculos

//Array que tenga solo los salarios
const salariosAr = argentina.map(
    function(persona) {
        return persona.salary
    }
)

//Salarios ordenados
const salariosArSorted = salariosAr.sort(
    function(salaryA, salaryB) {
       return (salaryA - salaryB )
    }
)

function esPar(numero) {
    return (numero % 2 === 0) 
}

function mediaSalarios(lista) {
    const sumaLista = lista.reduce(
        function(valorAcomulado=0, nuevoElemento) {
            return (valorAcomulado + nuevoElemento)
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)
    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]
        const mediana = mediaSalarios([personaMitad1, personaMitad2])
        return mediana
    } else {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

console.log(
    medianaSalarios(salariosArSorted)
)