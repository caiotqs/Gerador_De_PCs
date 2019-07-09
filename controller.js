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

    var selectRaca = document.getElementById("listaRaca");
    for (var i = 0; i < listaRacas.length; i++) {
      var element = document.createElement("option");
      element.text = listaRacas[i].dsc;
      element.value = i;
      selectRaca.appendChild(element);
    }


  var featTable = document.getElementById("featTable");
  setTableHeader(featTable, "Feat");
    
  var complicationsTable = document.getElementById("complicationsTable");
    setTableHeader(complicationsTable, "Complication");
  }
})(window, document, undefined);

function setarTodosValores() {

  var featTable = document.getElementById("featTable");
  while (featTable.hasChildNodes()) {
    featTable.removeChild(featTable.firstChild);
  }
  setTableHeader(featTable, "Feat");

  var complicationsTable = document.getElementById("complicationsTable");
  while (complicationsTable.hasChildNodes()) {
    complicationsTable.removeChild(complicationsTable.firstChild);
  }
  setTableHeader(complicationsTable, "Complication");

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
  var tamanhoNome = Math.floor(Math.random() * (4) + 3);
  var nome = "";
  for (var i = 0; i < tamanhoNome; i++) {
    switch (i) {
      case 0:
        nome = listaConsoantes[Math.floor(Math.random() * listaConsoantes.length)].dsc;
        nome = nome.toUpperCase();
        break;
      default:
        if (isEven(i)) {
          var parOuImpar = Math.floor(Math.random() * 3);
          if (isEven(parOuImpar))
            nome = nome + listaConsoantes[Math.floor(Math.random() * listaConsoantes.length)].dsc;
          else {
            nome = nome + listaVogais[Math.floor(Math.random() * listaVogais.length)].dsc;
            nome = nome + listaConsoantes[Math.floor(Math.random() * listaConsoantes.length)].dsc;
          }
        } else {
          nome = nome + listaVogais[Math.floor(Math.random() * listaVogais.length)].dsc;
        }
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

  var selectRaca = document.getElementById("listaRaca").value;
  var posicaoRaca = 0;
  if (selectRaca != -1)
    posicaoRaca = selectRaca;
  else
    posicaoRaca = Math.floor(Math.random() * listaRacas.length);
  document.getElementById("Raca").value = listaRacas[posicaoRaca].dsc;
  var hpRolado = rolarDado(listaRacas[posicaoRaca].dv);
  var caracteristicas = "Starting HP 1d" + listaRacas[posicaoRaca].dv + "(" + hpRolado + ")" + " + 4 = " + (hpRolado + 4);
  caracteristicas = caracteristicas + "\n" + "Speed: 30ft";
  caracteristicas = caracteristicas + "\n" + this.MontarListaGeral("Melee Weapons", listaRacas[posicaoRaca].ArmasCorpo, ListaArmas);
  caracteristicas = caracteristicas + "\n" + this.MontarListaGeral("Ranged Weapons", listaRacas[posicaoRaca].ArmasDist, ListaArmas);
  caracteristicas = caracteristicas + "\n" + this.MontarListaGeral("Armors", listaRacas[posicaoRaca].Armadura, ListaArmaduras);
  document.getElementById("CarcteristicasGerais").value = caracteristicas;

  this.MontarListaTalentos(listaRacas[posicaoRaca].ListaTalentosRaciais, ListaTalentosRaciais, "featTable", 0);
  this.MontarListaTalentos(listaRacas[posicaoRaca].ListaTalentosCombate, ListaTalentosCombate, "featTable", 1);
  this.MontarListaTalentos(listaRacas[posicaoRaca].ListaTalentosGerais, ListaTalentosGerais, "featTable", 2);
  this.MontarListaTalentos(listaRacas[posicaoRaca].ListaTalentosMagicos, ListaTalentosMagicos, "featTable", 3);

  for (let index = 0; index < listaRacas[posicaoRaca].qtddTalentosExtra; index++) {
    var TipoTalentoAleatorio = 1;
    if (document.getElementById("raceTalents").checked)
      TipoTalentoAleatorio = Math.floor(Math.random() * (ListaTiposTalento.length));
    else
      TipoTalentoAleatorio = Math.floor(Math.random() * (ListaTiposTalento.length - 1));

    nmrTalentoAleatorio = Math.floor(Math.random() * (ListaTiposTalento[TipoTalentoAleatorio].lista.length));
    this.MontarListaTalentos([nmrTalentoAleatorio], ListaTiposTalento[TipoTalentoAleatorio].lista, "featTable", TipoTalentoAleatorio);
  }

  var desvantagens = "";
  var desvantagensextras = Math.floor((Math.random() * 3) + 1);
  for (let index = 0; index < desvantagensextras; index++) {
    var nmrDesvanagemAleatorio = Math.floor(Math.random() * ListaDesvantagens.length);
    if (desvantagens != "")
      desvantagens = desvantagens + "\n";
    desvantagens = desvantagens + this.MontarListaTalentos([nmrDesvanagemAleatorio], ListaDesvantagens, "complicationsTable", 4);
  }
  this.gerarIdade(posicaoRaca);
}


function MontarListaGeral(descricao, listaEspecifica, listaGeral) {
  if (listaEspecifica) {
    var texto = descricao + ":";
    listaEspecifica.forEach(function (index) {
      texto = texto + " " + listaGeral[index].dsc;
      if (index < (listaEspecifica.length - 1))
        texto = texto + ",";
    });
    return texto;
  }
}

function MontarListaTalentos(listaEspecifica, listaGeral, tableName, codigoTabelaTipoTalento) {
  var texto = "";

  listaEspecifica.forEach(function (index) {
    texto = texto + listaGeral[index].title + " - " + listaGeral[index].dsc;
  });

  if (tableName != "") {
    var table = document.getElementById(tableName);
    listaEspecifica.forEach(function (index) {
      var row = table.insertRow(-1);
      row.id = row.rowIndex;

      var cell1 = row.insertCell(0);
      var newText1 = document.createTextNode(listaGeral[index].title);
      cell1.appendChild(newText1);

      var cell2 = row.insertCell(1);
      var newText2 = document.createTextNode(listaGeral[index].dsc);
      cell2.appendChild(newText2);

      var cell3 = row.insertCell(2);
      var input = document.createElement("button");
      input.className += "btn btn-success";
      input.CodigoTipoTalento = codigoTabelaTipoTalento;
      input.addEventListener("click", function regerarTalentoEspecifico() {
        var Cells = this.parentElement.parentElement.cells;

        nmrTalentoAleatorio = Math.floor(Math.random() * (ListaTiposTalento[this.CodigoTipoTalento].lista.length));

        Cells[0].innerText = ListaTiposTalento[this.CodigoTipoTalento].lista[nmrTalentoAleatorio].title;
        Cells[1].innerText = ListaTiposTalento[this.CodigoTipoTalento].lista[nmrTalentoAleatorio].dsc;
      }, false);
      input.id = row.rowIndex;
      var icon = document.createElement("span");
      icon.className += "glyphicon glyphicon-repeat";
      input.appendChild(icon);
      cell3.appendChild(input);


      var cell4 = row.insertCell(2);
      var input2 = document.createElement("button");
      input2.className += "btn btn-danger";
      input2.addEventListener("click", function excluirTalentos() { 
        featTable = document.getElementById("featTable");
        var id = this.parentElement.parentElement.id;
        var node = featTable.childNodes[0].childNodes[id];
        featTable.childNodes[0].removeChild(node);
      }, false);;
      var icon2 = document.createElement("span");
      icon2.className += "glyphicon glyphicon-remove";
      input2.appendChild(icon2);
      cell4.appendChild(input2);

    });
  }

  return texto;
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
  ListaTiposTalento[0].desc = "ListaTalentosGerais";
  ListaTiposTalento[1].lista = ListaTalentosCombate;
  ListaTiposTalento[1].desc = "ListaTalentosCombate";
  ListaTiposTalento[2].lista = ListaTalentosRaciais;
  ListaTiposTalento[2].desc = "ListaTalentosRaciais";
  ListaTiposTalento[3].lista = ListaTalentosMagicos;
  ListaTiposTalento[3].desc = "ListaTalentosMagicos";
  ListaTiposTalento[4].lista = ListaDesvantagens;
  ListaTiposTalento[4].desc = "ListaDesvantagens";
}

function isEven(n) {
  return n % 2 == 0;
}


function setTableHeader(table, colunmName) {
  var header = table.createTHead();
  var row = header.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "<b>"+ colunmName + "</b>";
  var cell2 = row.insertCell(1);
  cell2.innerHTML = "<b>Description</b>";
}