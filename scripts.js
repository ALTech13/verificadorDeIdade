function verificar(){
    const agora = new Date()
    const anoAtual = agora.getFullYear()
    const anoNasc = document.querySelector('#nasc').value 
    const res = document.querySelector('#res')
    if(anoNasc > anoAtual || anoNasc < 0 || anoNasc.length == 0){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        const gen = document.getElementsByName('gen')
        const idade = anoAtual - Number(anoNasc)
        let genero
        const foto = document.createElement('img')
        if(gen[0].checked){
            genero = 'Masculino'
            if(idade < 3){
                foto.setAttribute('src', './images/masculino/bebe.jpg')
            }else if(idade < 7){
                foto.setAttribute('src', './images/masculino/menino.jpg')
            }else if(idade < 11){
                foto.setAttribute('src', './images/masculino/pread.jpg')
            }else if(idade < 16){
                foto.setAttribute('src', './images/masculino/adolescente.jpg')
            }else if(idade < 22){
                foto.setAttribute('src', './images/masculino/jovem.jpg')
            }else if(idade < 35){
                foto.setAttribute('src', './images/masculino/adulto.jpg')
            }else if(idade < 50){
                foto.setAttribute('src', './images/masculino/adulto2.jpg')
            }else if(idade < 65){
                foto.setAttribute('src', './images/masculino/adulto3.jpg')
            }else{
                foto.setAttribute('src', './images/masculino/idoso.jpg')
            }   
        }
        else{
            genero = 'Feminino'
            if(idade < 3){
                foto.setAttribute('src', './images/feminino/bebe.jpg')
            }else if(idade < 7){
                foto.setAttribute('src', './images/feminino/menina.jpg')
            }else if(idade < 11){
                foto.setAttribute('src', './images/feminino/pread.jpg')
            }else if(idade < 16){
                foto.setAttribute('src', './images/feminino/adolescente.jpg')
            }else if(idade < 22){
                foto.setAttribute('src', './images/feminino/jovem.jpg')
            }else if(idade < 35){
                foto.setAttribute('src', './images/feminino/adulta.jpg')
            }else if(idade < 50){
                foto.setAttribute('src', './images/feminino/adulta2.jpg')
            }else if(idade < 65){
                foto.setAttribute('src', './images/feminino/adulta3.jpg')
            }else{
                foto.setAttribute('src', './images/feminino/idosa.jpg')
            }
        }
        res.innerHTML = `Identificado: Gênero: ${genero} | Idade: ${idade} anos.`
        res.appendChild(foto)
    }
}