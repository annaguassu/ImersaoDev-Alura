/*var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
*/
  /*function adicionarFilme(){
    var campoFilmeFavorito = document.getElementById("filme").value;
    var elementoFilmeFavorito = "<img src=" +  campoFilmeFavorito + ">"
    var listaFilmes = document.getElementById("listaFilmes")
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmeFavorito
    document.getElementById("filme").value = "";
  }*/

  function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value; //quer apenas o valor
    if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".JPG") ) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) { //divide o código, dividindo "responsabili//"
    console.log(filme);
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var listaFilmes = document.getElementById("listaFilmes"); // esse id serve apenas para mostrar aonde vc quer que as imagens fiquem, no caso, dentro do div "listaFilmes"
    listaFilmes.innerHTML =
      listaFilmes.innerHTML + elementoFilmeFavorito;
  }
