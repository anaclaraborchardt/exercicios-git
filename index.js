document.querySelector("button").addEventListener("click", function() {
    
    const itens = document.querySelectorAll("div");
    
    itens.forEach(function(item) {
      
        if (item.classList.contains("azul")) {
        item.classList.remove("azul");
        item.classList.add("vermelho");
      } else if (item.classList.contains("vermelho")) {
        item.classList.remove("vermelho");
        item.classList.add("verde");
      }else if (item.classList.contains("verde")) {
        item.classList.remove("verde");
        item.classList.add("roxo");
      }else if (item.classList.contains("roxo")) {
        item.classList.remove("roxo");
        item.classList.add("azul");
      }
    });
  });
