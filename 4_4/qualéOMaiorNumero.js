function maiorNumero(array){    
    for (let n1 in array){
        let quantoMaior = 0;
        for (let n2 in array){
            if( array[n2] <= array[n1]){
                quantoMaior += 1;                
            }
        }
        if(quantoMaior === array.length){
            return n1; 
            break;
        }
    }
}
let lista = [2, 3, 6, 7, 10, 1, 1000, 100];
console.log(maiorNumero(lista));
