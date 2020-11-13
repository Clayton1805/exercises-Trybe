let palavra = "ovo";
function palindromo(string){
    let simPalindromo = true;
    for (let letra = 0; letra < Math.ceil(string.length / 2); letra += 1){
        if (string[letra] !== string[string.length - (letra + 1)] ){
            simPalindromo = false;            
        }
    }  
    return simPalindromo;    
}
console.log(palindromo("ovo"))