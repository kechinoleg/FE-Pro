class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    if (!Person.oldestPerson || age > Person.oldestPerson.age) {
      Person.oldestPerson = this;
    }
  }

  static compareAge(person1, person2) {
    return person1.age - person2.age;
  }
}

const person1 = new Person("Ivan", "Leonov", 40);
const person2 = new Person("Dmitriy", "Gromov", 50);
const person3 = new Person("Alex", "Maximov", 25);

console.log(Person.oldestPerson); 

const ageDifference = Person.compareAge(person1, person3);
console.log(`Разница в возрасте: ${ageDifference} лет`); 
