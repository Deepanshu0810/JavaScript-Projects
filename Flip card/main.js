const card = document.querySelectorAll(".card")

card.forEach(cd=>{
    const front = cd.querySelector('.front')
    const back = cd.querySelector('.back')
    cd.addEventListener('click',()=>{
        front.classList.toggle('is-flipped')
        back.classList.toggle('is-flipped')
    })
})