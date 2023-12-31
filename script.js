
function Contador(elemento) {
    this.valor = 0;
    this.elemento = elemento;
  
    this.incrementar = function() {
      this.valor++;
      this.atualizarElemento();
    };
  
    this.decrementar = function() {
      this.valor--;
      this.atualizarElemento();
    };
  
    this.atualizarElemento = function() {
      this.elemento.innerHTML = this.valor;
    };
  
    
    this.atualizarElemento();
  }
  

  let meuContadorElemento = document.getElementById('meuContador');
  let meuContador = new Contador(meuContadorElemento);
  
  // Botões para incrementar e decrementar o contador
  let botaoIncrementar = document.getElementById('botaoIncrementar');
  let botaoDecrementar = document.getElementById('botaoDecrementar');
  

  botaoIncrementar.addEventListener('click', function() {
    meuContador.incrementar();
  });
  
  botaoDecrementar.addEventListener('click', function() {
    meuContador.decrementar();
  });
  