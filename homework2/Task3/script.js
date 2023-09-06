const dogs = [
    {
        breed: "golden retriever",
        age: 7,
    },
    {
        breed: "labrador retriever",
        age: 4,
    },
    {
        breed: "french bulldog",
        age: 12,
    },
    {
        breed: "beagle",
        age: 6,
    },
    {
        breed: "german shepherd dog",
        age: 2,
    },
    {
        breed: "poodle",
        age: 3,
    },
    {
        breed: "bulldog",
        age: 4,
    },
];

for (const dog of dogs) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${dog.breed}'s age is ${dog.age}`;
    document.body.appendChild(paragraph);
}
