function inicia() {
    const mensagem = 'Estou iniciando...'
    console.log(mensagem);
}


function processa(){
    const mensagem = 'Estou processando...'
    return mensagem
}

function run(){
    inicia()
    const resultado = processa()
    console.log(resultado);
}

run()


