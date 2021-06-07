console.log(`\nTrabalhando com loops`);

const listaDeDestinos = new Array(           //vetor
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
let destinoExiste = false;
const destino = `Rio de Janeiro`
let count = 0;

console.log(`\nDestinos Possíveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

if (podeComprar){
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
}
else{
    console.log("Vai pa onde kiri?")
}

if(destinoExiste && temPassagemComprada){
    console.log("Boa viagem, mona!");
}
else{
    console.log("Ai mona, vc foi tombada! Policial desfarçado!");
}

for(let i = 0; i<3 ; i++){
    if (listaDeDestinos[i] == destino){
        destinoExiste = true;
        temPassagemComprada = true;
    }
}