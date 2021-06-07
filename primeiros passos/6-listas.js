console.log(`Trabalhando com listas`);                           
// const salvador = `Salvador`;                   //BURRICE
// const saoPaulo = `São Paulo`;                  //BURRICE
// const rioDeJaneiro = `Rio de Janeiro`;         //BURRICE       


const listaDeDestinos = new Array(           //vetor
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`) //push adiciona um item dinamicamente na lista
console.log(`Destinos Possíveis`);                  
console.log(listaDeDestinos);    


listaDeDestinos.splice(1,1); // splice remove um item dinamicamente do vetor. aqui o vetor tbm começa no 0
console.log(listaDeDestinos);  

console.log(listaDeDestinos[0], listaDeDestinos[1]);


