const texto = "Aprenda programar do zero na Cubos Academy";
let urlFormatada = ""
for (let espaço of texto) {
    urlFormatada += espaço.toUpperCase().replace(" ", "-")
}

console.log(urlFormatada);