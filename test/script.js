
const wordsArray = [
   {en: 'apple', ru: 'яблоко' },
    { en: 'cat', ru: 'кот' },
    { en: 'house', ru: 'дом' },
]

function createCard(wordObj) {
    const card = document.createElement('div');
    card.classList.add('card');

    const russianText = document.createElement('span');
    russianText.textContent = wordObj.ru;
    card.appendChild(russianText);

    const englishText = document.createElement('span');
    englishText.textContent = wordObj.en;
    englishText.classList.add('english');
    card.appendChild(englishText);

    card.addEventListener('click', () => {
        russianText.classList.toggle('english');
        englishText.classList.toggle('english');
    });

    return card;
}

const app = document.getElementById('app');
wordsArray.forEach((wordObj) => {
    const card = createCard(wordObj);
    app.appendChild(card);
});

