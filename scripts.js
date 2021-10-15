function converter(){
    var binario = document.getElementById("bin").value;
    var decimal = 0;

    for(let i = binario.length-1; i >= 0; i--){
        decimal += parseInt(binario.charAt(i)) * Math.pow(2, binario.length-1-i);
    }
    document.getElementById("dec").innerHTML = decimal;
}