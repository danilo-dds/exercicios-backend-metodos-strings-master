const cpf = "011.022.033-44";
const cnpj = "11.022.033/0001-44";


function removerPontuacao(numero) {
    let numeros = numero.replace('-', '').replace('/', '').split('.');
    let numeroLimpo = ""
    for (let iten of numeros) {
        numeroLimpo += iten;
    }
    console.log(numeroLimpo);
}

removerPontuacao(cpf);
removerPontuacao(cnpj);