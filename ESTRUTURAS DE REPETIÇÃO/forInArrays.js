//Duas formas de percorrer um array utilizando os laços 'for' e 'for/in'

let frutas = ['Laranja', 'Uva', 'Pera', 'Banana'];
//Imprimindo no console o conteúdo do array 'frutas' utilizando o laço 'for'
for(let i = 0; i < frutas.length; i++){
     console.log('Nome da Fruta contida no Array: ' + frutas[i]);
}

console.log('\n');

//Imprimindo no console o conteúdo do array 'frutas' utilizando o laço 'for/in'
for(let fruta in frutas){
     console.log('Nome da Fruta contida no Array: ' + frutas[fruta]); //[fruta] é o indice do array.
}
