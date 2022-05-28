const comentario = "Esse COVID é muito perigoso!";
const achouCovid = comentario.toUpperCase().includes("COVID")
const achouPandemia = comentario.toUpperCase().includes("PANDEMIA")

if (achouCovid || achouPandemia) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado.")
}
//pandemia ou covid