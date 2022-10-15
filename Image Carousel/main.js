const buttons = document.querySelectorAll('.carousel-button')

buttons.forEach(btn => {
    btn.addEventListener('click', () =>{
        const offset = btn.textContent === '&#62;' ? 1 : -1
        const slides = btn.closest('.carousel').querySelector('.img-slides')

        const activeSlide = slides.querySelector('.active-slide')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) {
            newIndex = slides.children.length - 1            
        }
        if(newIndex >= slides.children.length){
            newIndex = 0
        }
        
        const img = slides.querySelectorAll('.slide')
        img.forEach(img => {
            img.classList.remove('active-slide')
        })

        slides.children[newIndex].classList.add('active-slide')

    })
})  