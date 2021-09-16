# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

1. **Valdicéia Barcelos** tem 44 anos, é Técnica em Enfermagem, casada, tem 2 filhos e trabalha na central de imunização de Contagem/MG numa jornada de 30h semanais. Atualmente é uma das funcionárias efetivas do munícipio responsável pela distribuição de vacinas da Covid-19 aos locais de vacinação. Nesse período da pandemia participou ativamente da campanha de vacinação da população como agente de imunização. Ela relata que os dados sobre a vacinação são preenchidos manualmente, em um formulário padrão contendo os campos específicos para anotação dos dados do paciente. Posteriormente esses formulários são enviados ao departamento administrativo da Secretaria de Saúde de Contagem, para que as informações possam ser lançadas no sistema informatizado do SUS para a gestão da Campanha Nacional de Imunização (PNI) contra Covid-19.
   
2. Bianca, 25 anos, classe média, brasileira, moradora do Rio de Janeiro. É formada em jornalismo e está em seu primeiro emprego. Apesar de ter uma rotina desorganizada, Bianca tenta manter um estilo de vida saudável indo a academia e fazendo atividades ao ar livre. Normalmente, sempre saia com seus amigos para se divertir aos finais de semana, mas devido as restrições impostas pela sua cidade e o medo da contaminação do vírus circulante, ela   aprendeu a se divertir sozinha e a desfrutar sua própria companhia. Por causa do seu trabalho, Bianca é viciada em notícias e mesmo assim constata confusão para achar informações concretas sobre a questão das doses na vacinação de sua cidade contra o COVID-19. 

3. Roberto e morador da cidade de Pouso Alegre Minas Gerais, e tem 38 anos de idade, ele está à procura de postos de vacinação contra a Covid-19, para obter sua segunda dose. Na primeira vacina foi aplicada a da companhia AstraZeneca, porém o posto próximo a sua residência possui apenas Coronavac e Pfizer. Ele está buscando postos de vacinação em área mais próxima de sua residência para estar tomando a segunda dose da AstraZeneca. 

4. Ana Laura Silva tem 21 anos e trabalha em um supermercado no centro da cidade. Como seu horário de trabalho não é compatível com o horário de funcionamento do posto de saúde, ela não conseguiu tomar a primeira dose da vacina no posto próximo à sua casa. Ana pensa em usar o seu horário de almoço para se vacinar, mas não sabe qual é o ponto de vacinação mais próximo do seu trabalho, e, por isso, busca alguma ferramenta na internet que indique qual é o lugar mais próximo para se vacinar.

## Histórias de Usuário

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`    |PARA ... `MOTIVO/VALOR`                 |
|--------------------|---------------------------------------|----------------------------------------|
|Valdicéia           | Inserir dados dos pacientes vacinados | Facilitar e agilizar o preenchimento de dados dos pacientes|
|Valdicéia           | Inserir a quantidade e o tipo de vacinas para gerir o progresso da campanha de vacinação            | Facilitar e agilizar o  preenchimento de dados dos pacientes  |

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`    |PARA ... `MOTIVO/VALOR`                 |
|--------------------|---------------------------------------|----------------------------------------|
|Bianca      |Uma interface que mostre os postos com vacinas disponíveis|Para proteger a saúde pública e a individual|    
|Agente da Informação          |Informar notícias mais concretas a população sobre vacinas e postos de saúde|Ajudar no combate contra a COVID-19|
 
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`    |PARA ... `MOTIVO/VALOR`                 |
|--------------------|---------------------------------------|----------------------------------------|
|Roberto     |Um sistema pratico que me mostre localização e quantidades de vacinas|Que eu possa ter informações precisas sobre postos de vacinação com localidade próxima ao meu endereço e vacinas disponíveis |    
|Funcionário          |Um sistema que possa inserir dados sobre as vacinas, e recolher informações dos usuários  |Ter controle dos dados dos usuários, e quantidades de vacinas a serem lançadas |

## Requisitos   

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

