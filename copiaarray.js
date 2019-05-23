/* Retorna uma copia da lista*/

function copyList(lst) {
   let copy[];
   for(let i=0; i<lst.lenght;i++){
      copy.push(lst[i]);
    }
    return copy;
}
