const movies = [
    { name: "First Blood", year: 1982 },
    { name: "The Terminator", year: 1984 },
    { name: "Mad Max", year: 1979 },
    { name: "The Dark Knight", year: 2008 },
    { name: "Forrest Gump", year: 1994 },
    { name: "Inception", year: 2010 },
    { name: "The Matrix", year: 1999 },
];

const ul = document.createElement("ul");

movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = `${movie.name} (${movie.year})`;
    ul.appendChild(li);
});

document.body.appendChild(ul);
