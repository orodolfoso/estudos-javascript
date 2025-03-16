

// 1 - FUNÇÃO PROMPT

// const age = prompt('Digite a sua idade: ')

// console.log(`Você tem ${age} anos`)

// ________________________________________________________

// 2 - FUNÇÃO ALERT

// alert ('Olá usuário, clique no botão "OK" para proseguir com o site!')

// ________________________________________________________

// 3 - FUNÇÕES DO OBJETO MATH

// console.log(Math.max(10 , 20 , 50))

// console.log(Math.min(10 , 20 , 50))

// console.log(Math.floor(5.14))

// console.log(Math.ceil(5.14))

// _________________________________________________________

// 4 - OBJETO CONSOLE

// console.log('teste')

// console.error('error!')

// console.warn('Aviso!')

// 5 - ESTRUTURA DE CONTROLES - if

// const user = 'Rodolfo'

// if(user === 'Rodolfo' ) {
//     console.log("Acessado!")
// }

// 6 - ESTRUTURA DE CONTROLES - else


// const logedIn = true

// if(logedIn ) {
//     console.log('Está autenticado')
// }else {
//  console.log('Não está autenticado')
// }

// const q = 10
// const w = 20

// if(q > 5 && w > 10) {
//     console.log('Numeros mais altos')
// }else {
//     console.log("Os números não são mais altos!")
// }

// 7 - ESTRUTURA DE CONTROLES - else if

if(1 > 2) {
    console.log('Teste')
}else if(2 > 3) {  
    console.log('Teste2')
}else if(5 > 4) {
    console.log('Agora sim!')
}

const Username = 'Rodolfo'
const Userage = 39

if(Username === "José" ) {
    console.log('Acesso negado')

}else if (Username === 'Rodolfo' && Userage === 39) {
    console.log(`Seja bem vindo de volta! ${Username}`)
}else {
    console.log('Nenhuma condição foi aceita')
}