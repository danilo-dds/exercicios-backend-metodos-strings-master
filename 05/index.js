const numeroCartao = '1111222233334444';

let numeroCartaoFormatado = `${numeroCartao.slice(0, 4).padEnd(12, "*",)}${numeroCartao.slice(12)}`

console.log(numeroCartaoFormatado);