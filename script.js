function changeType(type) {
    
    const html = document.documentElement

    const icon = document.querySelector('.icons button')
    
    let img = document.querySelector('aside img')

    let span = document.querySelector('#poke-name')


    if(type == "fire") {
        html.classList.add('fire')
        html.classList.remove('water')

        img = img.setAttribute('src', './assets/char.png')
    
        span.innerHTML = 'Char'
    } else if(type == "water") {
        html.classList.add('water')
        html.classList.remove('fire')

        img = img.setAttribute('src', './assets/squirtle.png')

        span.innerHTML = 'Squirtle'
    } else {
        html.classList.remove('fire')
        html.classList.remove('water')

        img = img.setAttribute('src', './assets/bulba.png')

        span.innerHTML = 'Bulba'
    }
}