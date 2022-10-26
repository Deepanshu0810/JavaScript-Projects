const content = document.querySelectorAll('.content')

content.forEach(content =>{
    content.addEventListener('click',()=>{
        content.classList.toggle('active')
    })

})
