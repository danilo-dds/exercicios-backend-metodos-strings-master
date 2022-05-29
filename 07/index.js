const email = "jose@cubos.academy.br";

function validarEmail(email) {
    if (email[0] === "." || email[email.length - 1] === "." || email.includes("@") === false || email.includes(".") === false) {
        console.log("E-mail inválido")
    } else {
        console.log("E-mail válido")
    }
}

validarEmail(email);