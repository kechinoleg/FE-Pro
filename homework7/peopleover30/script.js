const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 40 },
    { name: 'Eva', age: 22 },
    { name: 'Frank', age: 50 },
    { name: 'Grace', age: 28 },
    { name: 'Hank', age: 45 },
    { name: 'Ivy', age: 18 },
    { name: 'Jack', age: 21 }
];

const peopleOver30 = people.filter(person => person.age > 30);

console.log(peopleOver30);