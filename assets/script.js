const botaoSorteio = document.getElementById("sorteio");
const campoMinimo = document.getElementById("input-min");
const campoMaximo = document.getElementById("input-max");
const textoResultado = document.querySelector("#resultado");


botaoSorteio.addEventListener("click", sorteio);
  
function sorteio() {

    const valorMinimo = campoMinimo.value;
    const valorMaximo = campoMaximo.value;

    if(valorMinimo === "" || valorMaximo === ""){
        textoResultado.innerText = " 🚨 Por favor, preencha os dois campos ! 🚨";
        return;
    }

    if(valorMinimo > valorMaximo){
        textoResultado.innerText = " ❌ O número mínimo deve ser menor que o número máximo ! ";
        return;
    }

    const min = Math.floor(valorMinimo);
    const max = Math.ceil(valorMaximo);
  
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    textoResultado.innerText = `O número sorteado foi: ${resultado} !`;

    

    
}


    // Adiciona o evento de tecla Enter
    document.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sorteio();
        }
    });


