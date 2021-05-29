console.log(`\nTrabalhando com loops`);

const listaDeDestinos = new Array(           //vetor
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
let destinoExiste = false;
const destino = `Rio de Janeiro`
let count = 0;

console.log(`\nDestinos Possíveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

while (count < 3) { 
    if (listaDeDestinos[count] == destino){
        destinoExiste = true;
        temPassagemComprada = true;
        break
    }
    else{
        destinoExiste = false;
        temPassagemComprada = false;
    }
    count += 1;
}

