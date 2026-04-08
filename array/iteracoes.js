const numeros = [45, 4 , 9, 16, 25]
/*for( i = 0; i < 5; i++){
    console.log(numeros[i])
}*/
numeros.forEach(valor => console.log(valor))

const numeros2 = numeros.map(valor => valor * 2 )
numeros2.forEach(valor => console.log(valor));

 const numeros3 = numeros.filter(valor => valor > 18)
 numeros3.forEach(valor => console.log(valor))

console.log(
    numeros.reduce((total, valor) => total + valor )
)

console.log(numeros.length);
numeros.length = 10;
console.log(numeros);
console.log(numeros[4]);
console.length = 4;
console.log(numeros);
console.length = 5; 
console.log(numeros);

//o método push() acrescenta um valor no fim do array
numeros.push(25);
console.log(numeros);
// o método pop() remove um valor no fim do array
numeros.pop();
console.log(numeros);

numeros.pop();
numeros.push(25);
console.log(numeros);
