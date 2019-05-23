/**
 * Retorna lista na ordem aleatória.
 */
function shuffle(lst){
    let res = [];
        indices = [];
    
    while (res.length < lst.length) {
        let idx = randint(0, lst.length - 1);
        if (!indices.includes(idx)) {
            res.push(lst[idx]);
            indices.push(idx);
        }
    }
    
    return res;    
}



function randint(a, b) {
    return (Math.random() * (b + 1 - a) + a) | 0;
}

/**
 * Retorna n exemplos a partir da lista sem reposição.
 */
function sample(lst, n){
    return lst;
}

function copyList(lst) {
    return [...lst];
}

function maximo(lst) {
    Math.max.apply(null,lst);
}



/**
 * Inicializa as cartas em ordem aleatória
 */
$(() => {
    let cartoes = $('.cartao'),
        aleatorio = shuffle([
            '01', '02', '03', '04', '05', '06','07','10',
            '01', '02', '03', '04', '05', '06','07','10',
        ]);

    for (let i=0; i < cartoes.length; i++) {
        let cartao = cartoes[i],
            img = 'imgs/' + aleatorio[i] + '.jpg';
        $(cartao).attr('src', img);
    }
});


/**
 * Controle clique nas cartas
 */
let selecionada = null;
 
$(() => {
    $(".cartao")
        .on("click", ev => {
            let clicada = ev.target;
            
            if (selecionada === null) {
                $(clicada).toggleClass('virado');
                selecionada = clicada;
            } 
            
            else if (clicada === selecionada) {
                alert('Você deve clicar em outra imagem!');
            }
            
            else if ($(selecionada).attr('src') === 
                     $(clicada).attr('src')) {
                $(selecionada).hide(500);
                $(clicada).hide(500);
                selecionada = null;
            }
            
            else if (selecionada !== null) {
                $(clicada).toggleClass('virado');
                setTimeout(() => {
                    $(clicada).toggleClass('virado');
                    $(selecionada).toggleClass('virado');
                    selecionada = null;
                }, 1000);
            }
            
            
        });
});
