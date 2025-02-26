const user = {
    name: 'Миша',
    age: 34,
    isAdmin: false
}
console.log(user.name)


const users = {
    Рима: {
        age: 22,
        isAdmin: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(users.Рима)
users.Рима.sayHello('Мира')

const usersAdmin = [
    {
        name: 'Лёша',
        isAdmin: false
    },
    {
        name: 'Маша',
        isAdmin: true
    },
    {
        name: 'Ваня',
        isAdmin: false
    },
    {
        name: 'Оля',
        isAdmin: false
    },
    {
        name: 'Дима',
        isAdmin: true
    },
];

let noAdminUsers = 0;

for (const user of usersAdmin) {
    if (!user.isAdmin) {
        noAdminUsers++;
    }
}

console.log(`Количество простых пользователей: ${noAdminUsers}`);