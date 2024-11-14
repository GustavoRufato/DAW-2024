const value1 = true;
const value2 = false;


console.log(value1 == value2)
// thrusty / Falsy -> variáveis vazias ou com o valor 0, se submeter a um teste lógico se tornarão um tipo boolean

if(value1){
    console.log('verdadeiro');
    
}
else{
    console.log('falso');
    
}

const resultado = value1 ? 'verdadeiro' : 'falso'