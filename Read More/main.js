const card = document.querySelectorAll('.card')

card.forEach(card=>{
    const read = card.querySelector('.read-more-btn')
    const text = card.querySelector('.text')
    read.addEventListener('click', ()=>{
        text.classList.toggle('more')
        if (read.textContent === 'Read More') {
            read.textContent = 'Close'
        }else{
            read.textContent = 'Read More'
        }

    })
})
