const mycard = document.querySelector('.mycard');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

prev.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide')

    mycard.append(slides[0])
})

// next.addEventListener('click', () => {
//     const slides = document.querySelectorAll('.slide')

//     mycard.prepend(slides[slides.length - 1])
// })

