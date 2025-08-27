function carregar() {
    var image = document.getElementById('image')
    var texto = document.getElementById('texto')
    var texto2 = document.getElementById('texto2')
    var agora = new Date()
    var hora = 18
    var minutos = agora.getMinutes()
    texto.innerHTML = `Agora são ${hora} horas e ${minutos} minutos!`
    if (hora >= 0 && hora <= 11 && minutos == 59) {
        texto2.innerHTML = 'Tenha um bom dia!'
        image.src = 'src/fotomanha.png'
        document.body.style.background = '#de7e04'
    } else if (hora >= 12 && hora <= 17) {
        texto2.innerHTML = 'Tenha uma boa tarde!'
        image.src = 'src/fototarde.png'
        document.body.style.background = '#f85800'
    } else if (hora >= 18 && hora <= 23) {
        texto2.innerHTML = 'Tenha uma boa noite!'
        image.src = 'src/fotonoite.png'
        document.body.style.background = '#022f48'
    }
}
