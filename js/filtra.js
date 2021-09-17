var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var planos = document.querySelectorAll(".plano")
    if(this.value.length > 0){
        for( var i = 0; i< planos.length; i++){
            var plano = planos[i];
            var tdPreço = plano.querySelector(".info-preço");
            var preço = tdPreço.textContent;
            preçoConvertido = parseFloat(preço);
            filtroConvertido = parseFloat(this.value);
            console.log(preçoConvertido);
            if( preçoConvertido > filtroConvertido){
                plano.classList.add("invisivel");
            }else{
                plano.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < planos.length; i++) {
            var plano = planos[i];
            plano.classList.remove("invisivel");
        }
    }

   
});