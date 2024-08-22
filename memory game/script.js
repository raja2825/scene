document.addEventListener('DOMContentLoaded', () => {
    const symbols = [
        { name: 'Ashoka Chakra', img: 'images/symbol1.png' },
        { name: 'Lotus', img: 'images/symbol2.png' },
        { name: 'Tiger', img: 'images/symbol3.png' },
        { name: 'Peacock', img: 'images/symbol4.png' },
        { name: 'Banyan Tree', img: 'images/symbol5.png' },
        { name: 'Mango', img: 'images/symbol6.png' }
    ];

    const gameContainer = document.getElementById('gameContainer');
    const cards = shuffle([...symbols, ...symbols]);

    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = symbol.name;

        const img = document.createElement('img');
        img.src = symbol.img;
        card.appendChild(img);

        card.addEventListener('click', () => flipCard(card));
        gameContainer.appendChild(card);
    });

    let flippedCards = [];
    let matchedCards = 0;

    function flipCard(card) {
        if (flippedCards.length < 2 && !card.classList.contains('flip')) {
            card.classList.add('flip');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.name === card2.dataset.name) {
            matchedCards += 2;
            flippedCards = [];
            if (matchedCards === cards.length) {
                setTimeout(() => alert('You found all the national symbols!'), 500);
            }
        } else {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            flippedCards = [];
        }
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
