
var list = [1,2,3,4,5,6,7,8,9,10];
var New_list = [];

function Copylist(lista){
	

	for(i=0;i<lista.length; i++){
		New_list[i] = lista[i];
	}
}

Copylist(list);

console.log(list);