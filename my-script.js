window.onload = function () {
    // get the carousel and buttons
    const carousel = document.querySelector('.carousel');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');
    const pagination = document.querySelector('.pagination');

    // track the current card index
    let currentIndex = 0;
    // totola visible car
    const visibleCards = 4;

    let totalCards = 0;

    // load book details from json file
    fetch('book-description.json')
        .then((response) => response.json())
        .then((books) => {
            totalCards = books.length; // get total books

            // add books as cards
            books.forEach((book) => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <img src="photos/${book.photo}" alt="${book.title}">
                    <h3>${book.title}</h3>
                    <p>${book.description}</p>
                `;
                carousel.appendChild(card); // add to carousel
            });

            // make pagination dots
            for (let i = 0; i < Math.ceil(totalCards / visibleCards); i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active'); // first dot active
                pagination.appendChild(dot);
            }
        })
        .catch((error) => console.error('error loading books:', error));

    // this updates the carousel position
    const updateCarousel = () => {
        const cardWidth = carousel.firstElementChild.offsetWidth + 20; // width + margin
        carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

        // dots update
        const activeIndex = Math.floor(currentIndex / visibleCards);
        pagination.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    };

    // move left
    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalCards - visibleCards : currentIndex - 1;
        updateCarousel();
    });

    // move right
    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex >= totalCards - visibleCards) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') leftButton.click();
        if (event.key === 'ArrowRight') rightButton.click();
    });
};
