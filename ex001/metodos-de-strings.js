// 1 - Métodos de string: trim

// const trimTest = "   testando \n "

// console.log(trimTest)

// console.log(trimTest.trim)

// console.log(trimTest.length)

// console.log(trimTest.trim().length)

// 2 - Métodos de string: padStart

// const testepadStart = '1'

// const newNymber = testepadStart.padStart(4, '0')

// console.log(testepadStart)

// console.log(newNymber)

// const testPadEnd = newNymber.padEnd(10, '0')

// console.log(testPadEnd)

// 3 - Métodos de string: Split

// const frase = 'O rato roeu a roupa do rei de Roma'

// const arrayDaFrase = frase.split(" ")

// console.log(arrayDaFrase)


// 4 - Métodos de string: Join

// const fraseDeNovo = arrayDaFrase.join(" ")

// console.log(fraseDeNovo)

// const itensParaComprar  = ['Mouse', 'Teclado', 'Monitor']

// const fraseDeCompra  = `Precisamos comprar ${itensParaComprar.join(", ")}.`

// console.log(fraseDeCompra)


// 5 - Métodos de string: repeat

// const word = ' Testando repeat'

// console.log(word.repeat(5))


// 6 - Rest Operatpor/Rest Parameters

// const somaInfinita = (...args) => {
//     let total = 0 

//     for(let i = 0; i < args.length; i++) {
//         total += args[i]
//     }

//     return total
// }


// console.log(somaInfinita(1,2,3 ))
// console.log(somaInfinita(1,20, 34, 1457, 25847, 45, 58,7844))


//6 - Estrutura de repetição for...of

// const somaInfinita2 = (...args) => {

//     let total = 0

//     for(num of args) {
//         total += num
//     }

//     return total
// }

// console.log(somaInfinita2(1, 2, 3))
// console.log(somaInfinita2(5, 10, 15, 45, 698, 417, 26))


// 7 - Destructuring em objetos

// const userDetails = {
//     firtsName: 'Rodolfo',
//     lastName: 'Oliveira',
//     job: 'Programador'
// }

// const {firtsName, lastName, job} = userDetails

// console.log(firtsName, lastName,job)

// Renomear variáveis

// const {firtsName: primeiroNome} = userDetails

// console.log(firtsName)


// 8 - Destructuring em arrays

// const myList = ['Avião', 'Submarino', 'Carro']

// const [veiculoA, veiculoB, veiculoC] = myList

// console.log(veiculoA, veiculoB, veiculoC)


// 9 - JASON

// const myJason = '{"name": "Rodolfo", "age": 39, "skills": ["PHP", "javascript", "Python"]}'

// console.log(myJason)

// console.log(typeof myJason)


// 10 - JSON para objeto e objeto para JSON

// const myObject = JSON.parse(myJason)

// console.log(myObject)

// console.log(myObject.name)

// console.log(typeof myObject)

// JSON inválido

// const badJson = '{"name": Rodolfo, "age": 39}'

// const myBadObject = JSON.parse(badJson)


// myObject.isOpenToWork = true

// console.log(myObject)

// const myNewJson = JSON.stringify(myObject)

// console.log(myNewJson)

// console.log(typeof myNewJson)

