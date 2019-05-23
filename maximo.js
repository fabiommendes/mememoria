function maximo(list){
	var maior = -10000;
	for(i = 0; i < list.length; i++){
		if(list[i] > maior)
			maior = list[i];
	}

	return maior;
}