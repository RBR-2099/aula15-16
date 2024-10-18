function comparaNumeros (num1, num2) {
    if (num1 === num2) {
        return 'São iguais'
    } else {
        return 'São diferentes'
    }
}

let n1 = prompt ('Digite um número:')
let n2 = prompt ('Digite outro número')
let resultado = comparaNumeros (n1,n2)
console.log (resultado)
