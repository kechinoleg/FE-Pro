const people = [
    { name: 'Roza', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 16 },
    { name: 'Anastasiya', age: 3 },
    { name: 'Frank', age: 19 },
    { name: 'Grace', age: 14 },
    { name: 'Hank', age: 26 },
    { name: 'Oleg', age: 18 },
    { name: 'Jack', age: 21 }
];

// Вычисляем количество совершеннолетних и несовершеннолетних людей
const counts = people.reduce((result, person) => {
    if (person.age >= 18) {
        result.adults++;
    } else {
        result.minors++;
    }
    return result;
}, { adults: 0, minors: 0 });

console.log('Совершеннолетних:', counts.adults);
console.log('Несовершеннолетниx:', counts.minors);
