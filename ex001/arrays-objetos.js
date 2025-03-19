// 1 - Arrays


// const user = ['Rodolfo', 39, true, 70.2, []]

// console.log(user)
// console.log(typeof(user))



// 2 - Mais sobre Arrays


// const arr = ['a', 'b', 'c', 'd' ,'d']

// console.log(arr[4])

// console.log(arr[52])



// 3 - Propriedades

// const numbers = [1, 2 , 3 ,4 , 5]

// console.log(numbers.length)
// console.log(numbers['length'])

// const myName = 'Rodolfo'

// console.log(myName.length)

// console.log(myName['length'])

// 4 - Métodos

// const  otherNumbers = [1 , 2 , 3]

// const allNumbers = numbers.concat(otherNumbers)

// console.log(allNumbers)

// const text = 'algum texto'

// console.log(text.toUpperCase())
// console.log(typeof text.toUpperCase)
// console.log(text.indexOf('g'))


// 5 - Objetos (Obejct Literals)

// const person = {
//     name: 'Rodolfo',
//     age: 39,
//     profession: 'Programador'
// }

// console.log(person)
// console.log(person.name)
// console.log(person.name.length)
// console.log(typeof person)

// 6 - Criando e deletando propriedades

// const car = {
//     engine: 2.0,
//     brand: 'VW',
//     model: 'Tiguan',
//     km: 20000,

// }

// console.log(car)
// car.doors = 4
// console.log(car)
// delete car.km
// console.log(car)

// 7 - Mais sobre objetos

// const obj = {
//     a: 'teste',
//     b: true
// }

// console.log(obj instanceof Object)

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj)
// console.log(obj2)

// 8 - Conhecendo melhor o objeto

// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))
// console.log(Object.keys(car))
// console.log(Object.entries(car))

// 9 - Mutação (Mutability)

// const a = {
//     name:  'Rodolfo'
// }

// const b = a

// console.log(a)
// console.log(b)
// console.log(a === b)

// a.age = 39

// console.log(a)
// console.log(b)

// delete b.age

// console.log(a)
// console.log(b)

// 10 - Loops em arrays

// const users = ['Rodolfo', 'Lucas', 'Renata', 'Maria', 'José']

// for(let i = 0; i < users.length; i++) {
//     console.log(`Listando usuário: ${users[i]}`)
// }

// 11 - Push e PoP

