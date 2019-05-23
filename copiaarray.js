function randint(a, b) {
    return (Math.random() * (b + 1 - a) + a) | 0;
}

function sample(lst, n) {
    let res = [];
        python= [];


    while (res.length < n) {
        let l = randint(0, lst.length - 1);
        if (!python.includes(l)) {
            res.push(lst[l]);
            python.push(l);
        }
    }



    return res;
}