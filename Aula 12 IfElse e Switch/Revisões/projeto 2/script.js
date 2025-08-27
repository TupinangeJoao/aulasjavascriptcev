function teste(){
    var data = new Date()
    var fano = data.getFullYear()
    var ano = document.getElementById("ano")
    var resultado = document.getElementById('res')
    if (ano.value.length == 0 || Number(ano.value) > fano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = fano - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'bebeh.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'adultoh.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoh.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
             if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'adultom.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosom.png')
            }
        }
    }
    resultado.innerHTML = `Detectamos ${genero} e tem ${idade} anos!`
    resultado.appendChild(img)
}