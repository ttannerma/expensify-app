// const person = {
//     name: "teemu",
//     age: 23,
//     location: {
//         city: "Tampere",
//         temp: 6
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location
// if(city && typeof temperature === 'number') {
//     console.log(`It's ${temperature} in ${city}`)
// }



const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [, city, state = 'New York'] = address
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75']
const [product, ,medium] = item

console.log(`A medium ${product} costs ${medium}.`)