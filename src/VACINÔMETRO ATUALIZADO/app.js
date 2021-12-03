var db_inicial = {
  "data": [
      {
          "id": 1,
          "vacinador": "João de Souza",
          "unidade": "UBS Universal",
          "data": "2021-12-02",
          "laboratorio": "Astrazeneca",
          "lote": "1234",
          "dose": "Única",
          "nome": "Maria da Silva",
          "cpf": "10659545312",
          "datanascimento": "1980-01-01",
          "idade": "41",
          "sexo": "Feminino"
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
      "laboratorio": dadosSGI.laboratorio,
      "lote": dadosSGI.lote,
      "dose": dadosSGI.dose,
      "nome": dadosSGI.nome,
      "cpf": dadosSGI.cpf,
      "datanascimento": dadosSGI.datanascimento,
      "idade": dadosSGI.idade,
      "sexo": dadosSGI.sexo
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
  db.data[index].laboratorio = dadosSGI.laboratorio,
  db.data[index].lote = dadosSGI.lote,
  db.data[index].dose = dadosSGI.dose,
  db.data[index].nome = dadosSGI.nome,
  db.data[index].cpf = dadosSGI.cpf,
  db.data[index].datanascimento = dadosSGI.datanascimento,
  db.data[index].idade = dadosSGI.idade,
  db.data[index].sexo = dadosSGI.sexo

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