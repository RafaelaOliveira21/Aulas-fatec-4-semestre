// Arrow Function

/* function quadrado (n) {
    return n * n
} */ 

const quadrado = n => n * n


/* function dobro (x) {  //declaração de função
    return x * 2
} */ 

// **************************************************** 

const dobro = x => x * 2  //expressão de função

let a = dobro (4)

/* function soma (x,y) {
    return x + y
} */

const soma = (x,y) => x + y // com mais de um argumento, retornam os parênteses

// ****************************************************

/* function calcular (a,b,c ) {
    return a*b+c
} */

const calcular = (a,b,c) => a*b+c

// *****************************************************

/* function erro () {
    console.log ('Deu Pau!')
} */

const erro = () => console.log ('Deu Pau!') // Sem argumento, retornam os parênteses

// ***************************************************** 

/* function fatorial (n) {
    if (n <= 1) return 1
    else return n * fatorial (n - 1)
} */

const fatorial = n => {
    if (n <= 1) return 1
    else return n * fatorial (n - 1)
}

// ***************************************************** 

/* function somaAte (n) {
    let soma = 0
    for (let i = 1; i <= n; i++) {
        soma += i
    }
    return soma
} */

const somaAte = n => {
    let soma = 0
    for (let i = 1; i <= n; i++) {
        soma += i
    }
    return soma
}

// ******************************************************

let media = 7.2 
let situacao

if (media >= 6) { // Condição
    situacao = 'Aprovado' // Ação se verdadeiro
}

else {
    situacao = 'Reprovado' // Ação se falso
}

// ******************************************************
//       OPERADOR TERNÁRIO
// ******************************************************

let situacao = media >= 6 ? 'Aprovado' : 'Reprovado'