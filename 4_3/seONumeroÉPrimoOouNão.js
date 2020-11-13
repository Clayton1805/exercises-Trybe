let n = 16;

if(n === 2){
    console.log("O numero é primo.");    
}else{
    for (let i = 2; i < n; i += 1){

        if(n%i === 0){
            console.log("O numero não é primo.");
            break;
        }
        if(n-1 === i){
            console.log("O numero é primo.");       
        }
    }
}    