let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com   ";

identificador = identificador.padStart(6, "0")
let nomeMaiusculo = ""

for (const itens of nome.split(" ")) {
    nomeMaiusculo += `${itens.slice(0, 1).toUpperCase()}${itens.slice(1).toLowerCase()} `
}
nome = nomeMaiusculo.trim()
email = email.trim()
console.log(identificador);
console.log(nome);
console.log(email);