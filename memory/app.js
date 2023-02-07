const cardArray = [
    {
        name: 'fries', 
        Img: 'images/fries.png'
    },
    {
        name: 'cheeseburger', 
        Img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog', 
        Img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream', 
        Img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake', 
        Img: 'images/milkshake.png',
    },
    {
        name: 'pizza', 
        Img: 'images/pizza.png',
    },
    {
        name: 'fries', 
        Img: 'images/fries.png',
    },
    {
        name: 'cheeseburger', 
        Img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog', 
        Img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream', 
        Img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake', 
        Img: 'images/milkshake.png',
    },
    {
        name: 'pizza', 
        Img: 'images/pizza.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

const cardsChosen = []
const cardsChosenIds = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')

    console.log('check for a match')
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a message!')
        cards[cardsChosenIds[0]].setAttribute('src', images/white.png)
    }
}

function flipCard() {
    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    this.setAttribute('src', cardArray[cardID].Img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }

    console.log(cardsChosenIds)
}