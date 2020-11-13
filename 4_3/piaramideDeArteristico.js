let n = 50;

for (let i = 1; i <= n; i += 2 ){
    let linhaAteristico = ""; 
    for (let i2 = 0; i2 < (n-i)/2; i2 += 1 ){
        linhaAteristico = linhaAteristico + " ";            
    }
    for (let i3 = 0; i3 < i; i3 += 1 ){
        linhaAteristico = linhaAteristico + "*";            
    }
    console.log(linhaAteristico);
}
