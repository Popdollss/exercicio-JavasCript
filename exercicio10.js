const prompt = require('prompt-sync')();

const costText = prompt('Digite o custo de fabricação do carro: ');
const cost = Number(costText);

const finalPrice = cost + (cost * 0.28) + (cost * 0.45);

console.log(`O Valor de venda do carro é de R$${finalPrice}`);