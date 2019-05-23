/**
 * Retorna lista na ordem aleatória.
 */

 copyList([1,2,3]);


function shuffle(lst){
    let res = [],
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




/**
 * Inicializa as cartas em ordem aleatória
 */
$(() => {
    let cartoes = $('.cartao'),
        aleatorio = shuffle([
            '01', '02', '03', '04', '05', '06',
            '01', '02', '03', '04', '05', '06',
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
player1 = { pontos: 0 }

player2 = { pontos: 0 }

jogador = true;     // Boolean para vez do jogador. True = player 1, false = player 2

$(() => {
    $(".cartao")
        .on("click", ev => {
            var listaVirado = $('.virado');
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
                $(clicada).toggleClass('virado');
                $(selecionada).toggleClass('parado');
                $(clicada).toggleClass('parado');
                jogador ? player1.pontos++ : player2.pontos++;
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
            

            if(listaVirado.length === 1)
                alert('Fim do jogo!\nPlayer 1: ' + player1.pontos + '\nPlayer 2: ' + player2.pontos);

            jogador = !jogador;
        });
});

function copyList(lst){
  var novaLista = [];
  novaLista = lst.slice(0,lst.length)
  return novaLista;
}


function sample(lst,n){
    let res = [];

}

function fatorial(n) {
    if(n <= 1)
        return 1;
    else
        return fatorial(n-1) * n;
}
