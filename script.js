let valores = []
let operacao = ""
let resultadoOperacao = ""

function guardaValor(val ) {
    let valorTotal
    valores.push(val)
}

function guardaValorOp(op) {
    operacao = op
    console.log(operacao);

}

function calcula() {
    if (operacao == "+") {
        resultadoOperacao = valores[0] + valores[1]
        valores = []
        console.log(resultadoOperacao);
    }else if ( operacao == "*") {
        resultadoOperacao = valores[0] * valores[1]
        valores = [] 
        console.log(resultadoOperacao);
    }else if ( operacao == "/") {
        resultadoOperacao = valores[0] / valores[1]
        valores = []
        console.log(resultadoOperacao);
    }
}