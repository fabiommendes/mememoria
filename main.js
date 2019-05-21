/**
 * Retorna lista na ordem aleatória.
 */
function shuffle(lst){
    
}

function randint(a, b) {
    return Math.random() * (b + 1 - a) + a;
}

/**
 * Retorna n exemplos a partir da lista sem reposição.
 */
function sample(lst, n){
    return lst;
}

let estado = {
    selecionado = null,
}


/**
 * Inicializa as cartas em ordem aleatória
 */
$(() => {
    let cartoes = $('.cartao'),
        imagens = ['01', '02', '03', '04', '05', '06'];

    for (let i=0; i < cartoes.length; i++) {
        cartoes[i].attr(src=`imgs/${imagens[i]}.jpg`);
    }
}


/**
 * Controle clique nas cartas
 */
$(() => {
    $(".cartao")
        .on("click", ev => {
            let selecionado = estado.selecionado,
                clicado = ev.target;

            if (selecionado === null) {
                //
            } 
            else if (selecionado !== clicado) {
                $(clicado).toggleClass('virado');
            }
        });
});
