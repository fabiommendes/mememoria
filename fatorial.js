
var f = [];
function fatorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = fatorial(n-1) * n;
} ​