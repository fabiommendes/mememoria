function copyList(lst) {
  let copy[];
  for(let i=0;i<lst.lenght;i++){
    copy[i] = lst[i];
  }
    return copy;
}

lst = [1,2,3,4,5];
copyList(lst);
print(lst);
