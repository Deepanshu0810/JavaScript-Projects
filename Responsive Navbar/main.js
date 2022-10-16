const navSlide = () =>{
    const burger = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav-list')
    const navLinks = document.querySelectorAll('.links')


    burger.addEventListener('click', ()=>{
        // console.log("working")
        nav.classList.toggle('nav-active')
        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation =''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`
            }
    
        })

        burger.classList.toggle('toggle')
    })

}

navSlide()