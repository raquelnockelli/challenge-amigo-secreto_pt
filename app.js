let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value; //recebendo o valor do input
  
  //verificando se o campo está vazio
  if (nomeAmigo === "") {
    alert("Por favor, insira um nome");
    return;

    //verifica se o amigo já foi adicionado
  }else if(amigos.includes(nomeAmigo)){
    alert("Esse amigo já foi adicionado");
    return;

    //adiciona o amigo ao array
  }else{
    amigos.push(nomeAmigo);
        
    limparInput("amigo");
    atualizarListaDeAmigos();
  }
}

  function limparInput(campo){
    let idCampo = campo;
    document.getElementById(idCampo).value = "";
  }

  function atualizarListaDeAmigos(){
    // Obter o elemento da lista
    let lista = document.getElementById("listaAmigos");
  
      // Limpar a lista existente
      lista.innerHTML = "";
  
      // Percorrer o array e adicionar elementos à lista
      for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento <li>
        let listaAmigos = document.createElement("li");
        // Define o texto do elemento <li> como o nome do amigo atual
        listaAmigos.textContent = amigos[i];
        // Adiciona o elemento <li> à lista
        lista.appendChild(listaAmigos);
      }
    }

    function sortearAmigo(){
      if(amigos.length === 0){
        alert("Adicione amigos para sortear");
        return;
      }else{
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = document.getElementById("resultado");
        amigoSorteado.innerHTML = amigos[indiceSorteado];
      }

    }

    function novaLista(){
      amigos = [];
      atualizarListaDeAmigos();
      document.getElementById("resultado").innerHTML = "";
    }

  
