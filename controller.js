(function (window, document, undefined) {

  window.onload = init;

  function init() {
    var placeHolderDescAtributos =
      "STR \n" +
      "DEX \n" +
      "CON \n" +
      "INT \n" +
      "WIS \n" +
      "CHA \n";
    document.getElementById("Atributos").placeholder = placeHolderDescAtributos;
  }
})(window, document, undefined);

function setarTodosValores() {

  this.setarListaTipoTalentos();
  this.gerarAtributos();
  this.gerarNome1();
  this.gerarRaca();
  this.gerarSexo();
};


function gerarSexo() {
  var nmr = Math.floor(Math.random() * 2);
  if (nmr == 0)
    document.getElementById("Sexo").value = "Male";
  else
    document.getElementById("Sexo").value = "Female";
}

function gerarNome1() {
  var tamanhoNome = Math.floor(Math.random() * (7) + 3);
  var nome = "";
  for (var i = 0; i < tamanhoNome; i++) {
    switch (i) {
      case 0:
        nome = listaConsoantes[Math.floor(Math.random() * listaConsoantes.length)].dsc;
        nome = nome.toUpperCase();
        break;
      default:
        if (isEven(i))
          nome = nome + listaConsoantes[Math.floor(Math.random() * listaConsoantes.length)].dsc;
        else
          nome = nome + listaVogais[Math.floor(Math.random() * listaVogais.length)].dsc;
    }
  }

  var tamanhoNome = Math.floor(Math.random() * (5) + 3);
  var nome2 = "";
  for (var i = 0; i < tamanhoNome; i++) {
    switch (i) {
      case 0:
        nome2 = nome2 + listaConsoantes[Math.floor(Math.random() * listaConsoantes.length)].dsc;
        nome2 = nome2.toUpperCase();
        break;
      default:
        if (isEven(i))
          nome2 = nome2 + listaConsoantes[Math.floor(Math.random() * listaConsoantes.length)].dsc;
        else
          nome2 = nome2 + listaVogais[Math.floor(Math.random() * listaVogais.length)].dsc;
    }

  }
  document.getElementById("Nome").value = nome + " " + nome2;
  //document.getElementById("Nome").value = generate_name('egyptian');
};

function gerarRaca() {
  posicaoRaca = Math.floor(Math.random() * listaRacas.length);
  document.getElementById("Raca").value = listaRacas[posicaoRaca].dsc;
  var hpRolado = rolarDado(listaRacas[posicaoRaca].dv);
  var caracteristicas = "Starting HP 1d" + listaRacas[posicaoRaca].dv + "(" + hpRolado + ")" + " + 4 = " + (hpRolado + 4);
  caracteristicas = caracteristicas + "\n" + this.MontarListaGeral("Melee Weapons", listaRacas[posicaoRaca].ArmasCorpo, ListaArmas);
  caracteristicas = caracteristicas + "\n" + this.MontarListaGeral("Ranged Weapons", listaRacas[posicaoRaca].ArmasDist, ListaArmas);
  caracteristicas = caracteristicas + "\n" + this.MontarListaGeral("Armors", listaRacas[posicaoRaca].Armadura, ListaArmaduras);
  document.getElementById("CarcteristicasGerais").value = caracteristicas;

  var talentos = "";
  talentos = talentos + this.MontarListaTalentos("", listaRacas[posicaoRaca].ListaTalentosRaciais, ListaTalentosRaciais);
  talentos = talentos + this.MontarListaTalentos("", listaRacas[posicaoRaca].ListaTalentosCombate, ListaTalentosCombate);
  talentos = talentos + this.MontarListaTalentos("", listaRacas[posicaoRaca].ListaTalentosGerais, ListaTalentosGerais);
  talentos = talentos + this.MontarListaTalentos("", listaRacas[posicaoRaca].ListaTalentosMagicos, ListaTalentosMagicos);

  for (let index = 0; index < listaRacas[posicaoRaca].qtddTalentosExtra; index++) {
    var TipoTalentoAleatorio = 1;
    if(document.getElementById("raceTalents").checked)
      TipoTalentoAleatorio =  Math.floor(Math.random() * (ListaTiposTalento.length));
    else
     TipoTalentoAleatorio =  Math.floor(Math.random() * ListaTiposTalento.length -1);

    nmrTalentoAleatorio  =  Math.floor(Math.random() * (ListaTiposTalento[TipoTalentoAleatorio].lista.length + 1));
    talentos = talentos + this.MontarListaTalentos("", [nmrTalentoAleatorio], ListaTiposTalento[TipoTalentoAleatorio].lista);
  }
  document.getElementById("Talentos").value = talentos;

  var desvantagens = "";
  desvantagens = desvantagens + this.MontarListaTalentos("", listaRacas[posicaoRaca].ListaDesvantagens, ListaDesvantagens);
  var nmrDesvantagemAleatoria = Math.floor(Math.random() * ListaDesvantagens.length);
  desvantagens = desvantagens + this.MontarListaTalentos("", [nmrDesvantagemAleatoria], ListaDesvantagens);

  var desvantagensextras = Math.floor(Math.random() * 2);
  for (let index = 0; index < desvantagensextras; index++) {
    var nmrDesvanagemAleatorio = Math.floor(Math.random() * ListaComplicacoes.length);
    desvantagens = desvantagens + this.MontarListaTalentos("", [nmrDesvanagemAleatorio], ListaComplicacoes);
  }
  document.getElementById("Desvantagens").value = desvantagens;
  this.gerarIdade(posicaoRaca);
}


function MontarListaGeral(descricao, listaEspecifica, listaGeral) {
  if (listaEspecifica) {
    var texto = "";
    if (descricao)
      texto = texto + descricao + ":";
    listaEspecifica.forEach(function (index, item) {
      texto = texto + " " + listaGeral[index].dsc;
      if (index < (listaEspecifica.length - 1))
        texto = texto + ",";
    });
    return texto;
  }
}

function MontarListaTalentos(descricao, listaEspecifica, listaGeral) {
  if (listaEspecifica) {
    var texto = "";
    if (descricao)
      texto = texto + descricao + ": ";
    listaEspecifica.forEach(function (index, item) {
      texto = texto + listaGeral[index].title + " - " + listaGeral[index].dsc + "\n";
    });
    return texto;
  }


}

function escolherTalentoAleatório() {

}

function gerarIdade(raca) {
  if (raca == 0 || raca == 1 || raca == 2)
    document.getElementById("Idade").value = (Math.floor(Math.random() * 300) + 20);
  else
    document.getElementById("Idade").value = (Math.floor(Math.random() * 30) + 15);
}

function gerarAtributos() {

  var textoAtributo = "";
  for (var i = 1; i < 7; i++) {
    var valorDado1 = (rolarDado(6));
    var valorDado2 = (rolarDado(6));
    var valorDado3 = (rolarDado(6));
    var valorAtributo = valorDado1 + valorDado2 + valorDado3;

    switch (i) {
      case 1:
        textoAtributo = textoAtributo + "STR: " + valorAtributo + " (" + valorDado1 + " + " + valorDado2 + " + " + valorDado3 + ")";
        break;
      case 2:
        textoAtributo = textoAtributo + "\n" + "DEX: " + valorAtributo + " (" + valorDado1 + " + " + valorDado2 + " + " + valorDado3 + ")";
        break;
      case 3:
        textoAtributo = textoAtributo + "\n" + "CON: " + valorAtributo + " (" + valorDado1 + " + " + valorDado2 + " + " + valorDado3 + ")";
        break;
      case 4:
        textoAtributo = textoAtributo + "\n" + "INT: " + valorAtributo + " (" + valorDado1 + " + " + valorDado2 + " + " + valorDado3 + ")";
        break;
      case 5:
        textoAtributo = textoAtributo + "\n" + "WIS: " + valorAtributo + " (" + valorDado1 + " + " + valorDado2 + " + " + valorDado3 + ")";
        break;
      case 6:
        textoAtributo = textoAtributo + "\n" + "CHA: " + valorAtributo + " (" + valorDado1 + " + " + valorDado2 + " + " + valorDado3 + ")";
        break;
    }

  }
  document.getElementById("Atributos").value = textoAtributo;
};

function setarListaTipoTalentos() {
  ListaTiposTalento[0].lista = ListaTalentosGerais;
  ListaTiposTalento[1].lista = ListaTalentosCombate;
  ListaTiposTalento[2].lista = ListaTalentosMagicos;
  ListaTiposTalento[3].lista = ListaTalentosRaciais;
}

function isEven(n) {
  return n % 2 == 0;
}