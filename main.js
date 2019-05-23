/**
 * Retorna lista na ordem aleatória.
 */
function shuffle(lst) {
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
function sample(lst, n) {
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

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = cartoes[i],
            img = 'imgs/' + aleatorio[i] + '.jpg';
        $(cartao).attr('src', img);
    }
});


/**
 * Controle clique nas cartas
 */
let selecionada = null;
let cont1 = cont2 = 0;
let p1 = true;
let p2 = false;
let click = 0;

$(() => {
    $(".cartao")
        .on("click", ev => {
            click++;
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

                if (p1) {
                    cont1++;
                }

                else if (p2) {
                    cont2++;
                }

            }

            else if (selecionada !== null) {
                $(clicada).toggleClass('virado');
                setTimeout(() => {
                    $(clicada).toggleClass('virado');
                    $(selecionada).toggleClass('virado');
                    selecionada = null;
                }, 1000);
            }

            if (click === 2) {
                console.log('Trocouo a vez')
                if (p1) {
                    p1 = false;
                    p2 = true;
                    console.log('P1');
                }

                else if (p2) {
                    p2 = false;
                    p1 = true;
                    console.log('P2');
                }
                click = 0;
            }

            if ((cont1 + cont2) === 6) {
                alert(`Placar:\nPlayer1 = ${cont1}\nPlayer2 = ${cont2}`);
            }


            console.log(p1, p2, cont1, cont2);
        });
});
