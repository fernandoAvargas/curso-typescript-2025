// Cannot redeclare block-scoped variable 'pedido'.ts(2451)

// Deu erro porque em algum outro lugar já foi declarado no código a variável pedido

// const pedido = (pedido: string) => { 

// Nesse caso foi declarado em index.ts na pasta instalação

// Para resolver isso temos algumas abordagens

// Uma delas é tirar o arquivo tsconfig.json da pasta raíz e colocar em cada pasta onde cada pasta terá 

// o seu tsconfig de agora em diante.


let pedido: string = "Pizza";

pedido = "Seu  pedido";

let numero: number = 123;

numero = 321;

let DeuCerto: boolean = false;

DeuCerto = true;

const fun = (value : string): string => {

    return value;
};

console.log(fun("Pedido Finalizado"));


