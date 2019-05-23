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
function sample(lst, n){
    let res = [];
    lst = shuffle(lst)
    for (let i=0; i < n ; i++){
       res.push(lst[i])
    }
    return res;
} 
alert(sample([1,2,3,4,5,6,7,8,9,10], 3))
