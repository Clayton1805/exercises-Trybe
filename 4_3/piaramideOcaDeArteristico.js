let n = 99;
let impar = true;

if (n%2 === 0){
    impar = false;
}

for (let i = 1; i <= n; i += 2 ){
    let linhaAteristico = ""; 
    for (let i2 = 0; i2 < (n-i)/2; i2 += 1 ){
        linhaAteristico = linhaAteristico + " ";            
    }
    if (n === i && impar === true){
        for (let i3 = 0; i3 < n; i3 += 1 ){
            linhaAteristico = linhaAteristico + "*";            
        }  
    }else if (n-1 === i && impar === false){
        for (let i3 = 0; i3 < i; i3 += 1 ){
            linhaAteristico = linhaAteristico + "*";            
        }           
    }else{
        for (let i3 = 0; i3 < i; i3 += 1 ){
            if (i3 === 0){
                linhaAteristico = linhaAteristico + "*"; 
            }else if (i-1 === i3){
                linhaAteristico = linhaAteristico + "*"; 
            }else{
                linhaAteristico = linhaAteristico + " ";
            }                       
        } 
    }
    
    console.log(linhaAteristico);
}