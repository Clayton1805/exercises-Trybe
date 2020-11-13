let n = 7;

for (let i = 1; i <= n; i += 1 ){
    let linhaAteristico = "";    
    for (let i2 = 0; i2 < i; i2 += 1 ){
        linhaAteristico = linhaAteristico + "*";            
    }
    console.log(linhaAteristico);
}