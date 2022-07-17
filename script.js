//Variaveis

// existem 3 tipos de variavel, são definidas por escopo;
// escopo são onde e por que estao alocadas;

// declarando variaveis
var variavel1 = '1' // string é que esta dentro de aspas, seja simples ou nao, pois é interpretado pelo
                    //navegador como texto;

let variavel2 = 1
let numero3 = 25
const nomeDoWilliam = 'batata' //const, são constantes e nao podem ter seu valor alterado;

// Funções

function logarNomeDoUsuario(nomeDoParamntro){
    // console.log(nomeDoParamntro);
}

logarNomeDoUsuario()

let numero1 = 1
let numero2 = 2
let numero4 = 55

function soma (primeiroNumero, segundoNumero, nomeUsuario){
    // console.log(primeiroNumero + segundoNumero)
    // logarNomeDoUsuario(nomeUsuario)
}

soma(numero1, numero2)

soma(2,2, 'Ayumi')

soma(1, 1, 'Katiele')

soma(1231231, 545454454, 'Duda')

soma(1, numero4, 'felipe')

//arrays, são grupos de valores, ficam dentro de colchetes

let arrayNumeros = [1,2,3,4]
let arrayNomes = ['felipe', 'william', 'clara']

// console.log(arrayNomes.length);

// loops

let nomeAlterado = ''

for (let index = 0; index < arrayNumeros.length; index++) {
    // console.log('rodou');
    
} //este loop é usado se quiser iterar a quantidade de valores do array

arrayNomes.forEach(nome => {
    nomeAlterado = nome + ' batata'
    // console.log(nomeAlterado);
}); //este loop é usado para pegar cada um dos valores


// If ou condicionais

if (arrayNomes[0] != 'felipe') {
    // console.log('entrou no if');
}else {
    // console.log('entrou no else');
}

let numeros = []

function adicionaNumeros(numero) {
    numeros.push(numero)
}

function logarNoConsole(){
    console.log(numeros)
}

function rodaLoop() {
    numeros.forEach(numero => {
        console.log(numero);
    });
}