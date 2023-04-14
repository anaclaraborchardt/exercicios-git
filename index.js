document.querySelector("#mudarCor").addEventListener("click", function() {

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

if(document.querySelector("#flipper").addEventListener){
    ("click", function() {
    document.querySelector("#mudarCor").click();
    })}

  else if(document.querySelector("#simplehex").addEventListener){
("click", function(){
    if (item.classList.contains("azul")) {
        item.classList.remove("azul");
        item.classList.add("coral");
      } else if (item.classList.contains("coral")) {
        item.classList.remove("coral");
        item.classList.add("rosa");
      }else if (item.classList.contains("rosa")) {
        item.classList.remove("rosa");
        item.classList.add("azul");
}})
  }
