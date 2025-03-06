const botaoSorteio = document.getElementById('button')


function sorteio() {

    min = Math.floor(inputMin = document.getElementById('input-min').value)
    max = Math.ceil(inputMax = document.getElementById('input-max').value)
    const meuParagrafo = document.querySelector('p')

    if (min >= max) {
        meuParagrafo.innerHTML = 'O numero incial não pode se maior que o segundo'
    } else {

        const resultado = Math.floor(Math.random() * (max - min + 1) + min);
        meuParagrafo.innerHTML = `E o numero sorteado foii:  ${resultado} 🎉🎉`

    }

}
