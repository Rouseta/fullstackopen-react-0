const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}
object1.address = 'Helsinki'
object1['secret number'] = 12341

const square = p => p * p
const t = [1, 5, 9,]
const squareArea = t.map((value) => square(value))
