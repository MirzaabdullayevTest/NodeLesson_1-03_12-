const user = {
    name: 'Elena',
    age: 25
}

const user2 = {
    name: 'Ivan',
    age: 23
}

// module.exports = user
module.exports = {
    user: user,
    sayHello: () => { console.log('Hello') }
}