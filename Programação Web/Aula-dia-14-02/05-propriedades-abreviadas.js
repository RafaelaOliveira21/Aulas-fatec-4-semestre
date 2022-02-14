// Criando um objeto

// Criando as propriedades primeiramente como variáveis avulsas

let username = 'Rafaela' 
let fullName = 'Rafaela Aparecida Alexandre Oliveira'
let group = 'Alunos'
let password = '123456@'

// Criando o objeto a partir das variáveis
// Observe que os nomes das propriedades são IGUAIS aos nomes
// das variáveis correspondentes.

/*  let user = {
    username: username,
    fullName: fullName,
    group: group,
    password: password
} */

// Quando o objeto a ser criado tiver propriedades de nome idêntico 
// às variáveis da onde virão os respectivos valores, pode-se usar
// as chamadas PROPRIEDADES ABREVIADAS.

let user = {
    username,
    fullName,
    group,
    password,
    lastLogin: '2022-02-01 13:54:12' // Propriedade NÃO abreviada 
}

// Exibindo o objeto

console.log (user)

// Propriedades são muito utilizadas para depuração, quando precisamos
// saber, além do valor da variável, também seu nome.

console.log (username, group)

// Transformando as variáveis avulsas em um objeto para que o nome
// das variáveis também apareçam na depuração.

console.log({username, group})

/*  let user = {
    username: 'Rafaela',
    fullName: 'Rafaela Aparecida Alexandre Oliveira',
    group: 'Alunos',
    password: '123456@'
} */

// Exibindo o objeto

console.log(user)