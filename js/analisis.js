//Función HELPERS
function esPar(numero) {
    return (numero % 2 === 0) 
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

function mediaSalarios(lista) {
    const sumaLista = lista.reduce(
        function(valorAcomulado=0, nuevoElemento) {
            return (valorAcomulado + nuevoElemento)
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

const medianaGeneralAr = medianaSalarios(salariosArSorted)

//Mediana Top 10%
const spliceStart = ((salariosArSorted.length * (100 - 10))/100)
const spliceCount = salariosArSorted.length - spliceStart
const salaryTop10 = salariosArSorted.splice(
    spliceStart,
    spliceCount,
)
const medianaTop10Ar = medianaSalarios(salaryTop10)

console.log({
    medianaGeneralAr,
    medianaTop10Ar,
    salaryTop10,
})