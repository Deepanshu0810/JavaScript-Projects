const dropdownEL = document.querySelectorAll(".dropdown")

dropdownEL.forEach(menu => {
    const selectEl = menu.querySelector(".select")
    const selectedEl = menu.querySelector(".selected")
    const iconEl = menu.querySelector(".icon")
    const menuEl = menu.querySelector(".menu")
    const options = menu.querySelectorAll(".menu li")

    selectEl.addEventListener('click', () =>{
        selectEl.classList.toggle('select-clicked')
        iconEl.classList.toggle('icon-clicked')
        menuEl.classList.toggle('menu-open')
    })
    options.forEach(opt => {
        opt.addEventListener('click',() =>{
            selectedEl.textContent = opt.textContent
            selectEl.classList.remove('select-clicked')
            iconEl.classList.remove('icon-clicked')
            menuEl.classList.remove('menu-open')
            options.forEach(opt => {
                opt.classList.remove('active')
            })
            opt.classList.add('active')
        })
    })
})