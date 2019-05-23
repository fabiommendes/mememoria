
function fat(n) {
    var fatorial = 1;

    if (n === 0 || n === 1) {
        return 1;
    }

    else {
        for (let i = n; i > 0; i--) {
            fatorial *= i;
        }
    }

    return fatorial;
}
