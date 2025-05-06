const cardContainer = document.querySelector('#card-container');
const cardTemplate = document.querySelector('#card-template').content;
const cardButton = document.querySelector('#add-btn');

const InitialCards = [
    {title: 'Первая карточка', text: 'текст первой карточки', image: 'images/image1.jpeg'},
    {title: 'Вторая карточка', text: 'текст второй карточки', image: 'images/image1.jpeg'},
    {title: 'Третья карточка', text: 'текст третьей карточки', image: 'images/image1.jpeg'},
    {title: 'Четвертая карточка', text: 'текст четвертой карточки', image: 'images/image1.jpeg'},
];

let cardIndex = 0;

function addCard(textValue, titleValue, imgValue) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card-title').textContent = titleValue;
    card.querySelector('.card-text').textContent = textValue;
    card.querySelector('.card-image').src = imgValue;
    card.querySelector('.remove-btn').addEventListener('click', function() {
        card.remove();
    });
    cardContainer.append(card);
}

cardButton.addEventListener('click', function() {
    if(cardIndex < InitialCards.length) {
        const {text, title, image} = InitialCards[cardIndex];
        addCard(text, title, image);
        cardIndex++;
    } else {
        alert('Все карточки добавлены');
    }
});



