const acordeonbtt = document.querySelectorAll('.acordeon .btt')

acordeonbtt.forEach((btt) => {
    btt.addEventListener('click', (e) => {
        const acordeon = btt.parentElement
        const isOpen = acordeon.classList.contains('open')

        if (isOpen){
            acordeon.classList.remove('open')
        }else {
            acordeon.classList.add('open')
        }
    })
})