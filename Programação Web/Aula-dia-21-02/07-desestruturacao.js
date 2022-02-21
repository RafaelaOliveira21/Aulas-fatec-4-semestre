// Vetor

let frutas = ['laranja', 'banana', 'maçã']

// Desestruturando o vetor em variáveis avulsas

let [x, y, z] = frutas

console.log ('x:', x)
console.log ('y:', y)
console.log ('z:', z)
console.log (' ')

// Desestruturação parcial

let [a, b] = frutas

console.log ('a:', a)
console.log ('b:', b)
console.log (' ')

let [i, j] = frutas

console.log ('i:', i)
console.log ('j:', j)
console.log (' ')

let [, m, n] = frutas

console.log ('m:', m)
console.log ('n:', n)
console.log (' ')

// Desestruturação de objetos
// 1ª Regra: as variáveis devem ter o mesmo nome das propriedades
// 2ª Regra: a ordem não importa

let pessoa = {
    nome: 'Rafaela Aparecida Alexandre Oliveira',
    sexo: 'F',
    dataNascimento: '1999-09-02',
    email: 'rafaela.oliveira0202@hotmail.com'
}

// As variáveis podem aparecer em qualquer ordem

let { email, sexo /*, dataNascimento, nome*/ } = pessoa

// console.log ('nome:', nome)
console.log ('sexo:', sexo)
// console.log ('dataNascimento:', dataNascimento)
console.log ('email:', email)

// Para fazer desestruturação parcial, basta fornecer apenas os 
// nomes das variáveis desejadas