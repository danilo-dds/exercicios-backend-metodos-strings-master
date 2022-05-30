const nome = 'Guido Cerqueira';
function geradorNickname(nome) {
    const nomes = nome.trim().toLowerCase().split(' ');
    let nomeSemEspacos = "";
    for (const nome of nomes) {
        nomeSemEspacos += nome;
    }
    console.log(`@${nomeSemEspacos.slice(0, 12)}`);

}
geradorNickname(nome);