const inicio = () => {
    console.log('inicio...');
    
}

const processa = (FUNCAO1, FUNCAO2) => {
    FUNCAO1()
    FUNCAO2()
}

const fim = () => {
    console.log('fim.');
    
}

processa(inicio, fim)

processa(()=>{console.log('funcao 1');}, ()=>{console.log('funcao 2');})
