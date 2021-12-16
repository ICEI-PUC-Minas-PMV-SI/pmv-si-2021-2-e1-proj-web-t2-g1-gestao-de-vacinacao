var db_inicial = {
  "data": [
      {
          "id": 1,
          "vacinador": "João de Souza",
          "unidade": "UBS Universal",
          "data": "2021-12-02",
          "time": "10:45",
          "lotacao": "Lotação Mínima",
      }
      
    ]
  }

var db = JSON.parse(localStorage.getItem('db_sgi'));
if (!db) {
  db = db_inicial
};

function displayMessage(msg) {
  $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function Cadastrar(dadosSGI) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = 1;
  if (db.data.length != 0) 
    novoId = db.data[db.data.length - 1].id + 1;
  let novoSGI = {
      "id": novoId,
      "vacinador": dadosSGI.vacinador,
      "unidade": dadosSGI.unidade,
      "data": dadosSGI.data,
      "time": dadosSGI.time,
      "lotacao": dadosSGI.lotacao,
    };

  // Insere o novo objeto no array
  db.data.push(novoSGI);
  displayMessage("Inclusão realizada com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_sgi', JSON.stringify(db));
}

function Alterar(id, dadosSGI) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map(obj => obj.id).indexOf(id);

  // Altera os dados do objeto no array
  db.data[index].vacinador = dadosSGI.vacinador,
  db.data[index].unidade = dadosSGI.unidade,
  db.data[index].data = dadosSGI.data,
  db.data[index].time = dadosSGI.time
  db.data[index].lotacao = dadosSGI.lotacao,
 
  

  displayMessage("Alteração realizada com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_sgi', JSON.stringify(db));
}

function Excluir(id) {    
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function (element) { return element.id != id });

  displayMessage("Exclusão realizada com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_sgi', JSON.stringify(db));
}

