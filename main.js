function somar() {
    var v1 = parseInt(document.getElementById("v1").value); //parseInt transforma em número inteiro o valor 
    var v2 = parseInt(document.getElementById("v2").value);
    
    if (isNaN(v1) || isNaN(v2)) { //se algum dos campos estiver vazio:
        alert("Campo não informado: preencha um valor");

    } else if(v1 < 0 || v2 < 0){ //se alguns dos números é negativo
        alert("Não pode conter número negativo")
        
    } else {
        var result = v1 + v2
        document.getElementById("r").value = result
    }

}

