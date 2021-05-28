console.log(`Trabalhando com condicionais`);



const listaDeDestinos = new Array(           //vetor
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 15;
const estaAcompanhada = true;

console.log(`Destinos Possíveis`);
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("comprador maior de idade");
    listaDeDestinos.splice(1, 1); // splice remove um item dinamicamente do vetor. aqui o vetor tbm começa no 0

}
else if (estaAcompanhada) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1);
}
else {
    console.log("Comprador não é maior de idade, não posso vender");
}


console.log(listaDeDestinos);

