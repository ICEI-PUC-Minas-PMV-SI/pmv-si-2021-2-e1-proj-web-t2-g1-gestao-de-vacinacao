# Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

|FUNCIONALIDADE | ID TESTE | DESCRIÇÃO | CONDIÇÃO | PASSOS | RESULTADO ESPERADO | SITUAÇÃO | 
|--------|----------|-----------|--------------|--------|--------------------|-------| 
| *Home*  | H1 | Validar link *“Home”*  | Ter acesso ao SGI | 1. Abrir a página *Home* <br> 2. Clicar em *“Home”*  | Ao clicar em *Home* o usuário é direcionado a página *Home*  | **OK**  |
| *Home*  | H2 | Validar link *“Sobre o Projeto”* | Ter acesso ao SGI | 1. Abrir a página *Home*  <br> 2. Clicar em *“Sobre o Projeto”*   | Ao clicar em *Sobre o projeto* é exibido para o usuário uma breve descrição sobre o SGI   | **OK**  |
| *Home*  | H3 | Validar link *“Ajuda”* | Ter acesso ao SGI | 1. Abrir a página *Home*  <br> 2. Clicar em *“Ajuda”*  | Ao clicar em *Ajuda* o usuário é direcionado a página *Ajuda*  | **OK**  |
| *Home*  | H4 | Validar link *“Contatos”*  | Ter acesso ao SGI | 1. Abrir a página *Home*  <br> 2. Clicar em *“Contatos”*   | Ao clicar em *Contatos* é exibido para o usuário um endereço de email para suporte | **OK**  |
| *Home*  | H5 | Validar link *“Login”*  | Ter acesso ao SGI | 1. Abrir a página *Home*  <br> 2. Clicar em *“Contatos”*  | Ao clicar em *Login* o usuário é direcionado a página *Login*  | **NOK**  |
| *Home*  | H6 | Validar botão *“Pesquisar”*  | Ter acesso ao SGI | 1. Abrir a página *Home* <br> 2. Clicar em *“Pesquisar”* | Ao clicar em *Pesquisar* o usuário é direcionado a página *Onde tem vacina?*  | **NOK**  |
| *Ajuda*  | A1 | Validar accordion-item *“Sobre o SGI”*  | Ter acesso ao SGI | 1. Abrir a página *Ajuda* <br> 2. Clicar em *“Sobre o SGI”* | Ao clicar em *Sobre o SGI* o dropdown com a descrição do conteúdo é aberto ou fechado  | **OK**  |
| *Ajuda*  | A2 | Validar accordion-item *“Sobre os locais de vacinação”*  | Ter acesso ao SGI | 1. Abrir a página *Ajuda* <br> 2. Clicar em *“Sobre os locais de vacinação”* | Ao clicar em *Sobre os locais de vacinação* o dropdown com a descrição do conteúdo é aberto ou fechado  | **OK**  |
| *Ajuda*  | A3 | Validar accordion-item *“Sobre as vacinas”*  | Ter acesso ao SGI | 1. Abrir a página *Ajuda* <br> 2. Clicar em *“Sobre as vacinas”* | Ao clicar em *Sobre as vacinas* o dropdown com a descrição do conteúdo é aberto ou fechado  | **OK**  |
| *Ajuda*  | A4 | Validar navegação dos links no cabeçalho | Ter acesso ao SGI | 1. Abrir a página *Ajuda* <br> 2. Clicar em *“Home”* <br> 3. Clicar em *“Sobre o projeto”* <br> 4. Clicar em *“Contatos”* <br> 5. Clicar em *“Login”*| Ao clicar nos links descritos nos passos em *Ajuda*, o resultado esperado para o usuário é equivalente aos testes H1, H2, H3, H4 e H5  | **OK**  |
| *Formulário Anamnese*  | FA1 | Validar botão *“Perfil”* no campo usuário logado | Ter acesso ao SGI | 1. Abrir a página *Formulário Anamnese* <br> 2. Clicar em *“Perfil”* | Ao clicar em *Perfil* é exibido para o Profissional de Saúde o seu Nome e a Unidade de Saúde em que está registrado | **OK**  |
| *Formulário Anamnese*  | FA2 | Validar botão *“Sair”* no campo usuário logado  | Ter acesso ao SGI | 1. Abrir a página *Formulário Anamnese* <br> 2. Clicar em *“Sair”* | Ao clicar em *Sair* o Profissional de Saúde é deslogado do sistema e é direcionado para página de *Login* | **OK**  |
| *Formulário Anamnese*  | FA3 | Validar botão *“Cadastrar”* | Ter acesso ao SGI | 1. Abrir a página *Formulário Anamnese* <br> 2. Clicar em *“Cadastrar”* | Ao clicar em *Cadastrar* os `dados corretamente preenchidos no formulário são salvos` na base de dados do SGI, uma mensagem de confirmação é exibida, alguns campos do formulário são exibidos na tabela e a contagem dos registros salvos é atualizada  | **OK**  |
| *Formulário Anamnese*  | FA4 | Validar botão *“Editar”* | Ter acesso ao SGI | 1. Abrir a página *Formulário Anamnese* <br> 2. Clicar em *“Editar”* | Ao clicar em *Editar* é exibida uma mensagem para orientar o Profissional de Saúde a clicar na célula desejada da tabela para efetuar a edição dos dados no formulário | **OK**  |
| *Formulário Anamnese*  | FA5 | Validar botão *“Limpar”* | Ter acesso ao SGI | 1. Abrir a página *Formulário Anamnese* <br> 2. Clicar em *“Limpar”* | Ao clicar em *Limpar* os dados preenchidas no formulário são apagados | **OK**  |
| *Formulário Anamnese*  | FA6 | Validar os campos *“DATA”* no formulário | Ter acesso ao SGI | 1. Abrir a página *Formulário Anamnese* <br> 2. Clicar em *“DATA DE VACINAÇÃO”* <br> 3. Clicar em *“DATA DE NASCIMENTO”* | Ao clicar nos passos 2 ou 3, os dados para preenchimento nos campos *DATA* no formulário são somente aceitos no formato de data DD/MM/YYYY | **OK**  |
| *Formulário Anamnese*  | FA7 | Validar o campo *“CPF”* no formulário | Ter acesso ao SGI | 1. Abrir a página *Formulário Anamnese* <br> 2. Clicar em *“CPF”* | Ao clicar em *"CPF"*, o dado para preenchimento no campo *CPF* no formulário somente é aceito caso tenha 12 algarismos numéricos | **OK**  |

|FUNCIONALIDADE | ID TESTE | DESCRIÇÃO | CONDIÇÃO | PASSOS | RESULTADO ESPERADO | SITUAÇÃO | 
|--------|----------|-----------|--------------|--------|--------------------|-------| 
| *Login*  | L1 | Validar link *“Login”*  | Ter acesso ao SGI | 1. Abrir a página *Home* <br> 2. Clicar em *“Login”*  | Ao clicar em *Home* o usuário é direcionado a página *Login*  | **NOK**  |
| *Login*  | L2 | Validar  *“Usuário”* | Ter acesso ao SGI | 1. Abrir a página *Login*  <br> 2. Clicar e digitar o *“Usuário”*   | Ao clicar em *Entrar* é exibido se o usuário pode ter acesso ou não ao SGI   | **OK**  |
| *Login*  | L3 | Validar *“Senha”* | Ter acesso ao SGI | 1. Abrir a página *Login*  <br> 2. Clicar e digitar a  *“Senha”*  | Ao clicar em *Entrar* o usuário é exibido se o usuário pode ter acesso ou nao ao SGI  | **OK**  |
| *Login*  | L4 | *“Usuário e senha”*  válidos | Ter acesso ao SGI | 1. Abrir a página *Login*  <br> 2. Clicar e digitar *“Usuário e Senha”*   | Ao clicar em *Entrar* com o usuário e senha válidos, o usuário é redirecionado para a página do *Filômetro* | **OK**  |
| *Login*  | L5 | Validar botão *“Entrar”*  | Ter acesso ao SGI | 1. Abrir a página *Login*  <br> 2. Clicar em *“Entrar”*  | Ao clicar em *Entrar* o usuário é direcionado a página *Filômetro*  | **OK**  |
| *Filômetro*  | F1 | Validar botão *“Perfil”* no campo usuário logado  | Ter acesso ao SGI | 1. Abrir a página *Filômetro* <br> 2. Clicar em *“Perfil”* | Ao clicar em *Perfil* é exibido para o Profissional de Saúde o seu Nome e a Unidade de Saúde em que está registrado | **OK**  |
| *Filômetro*  | F2 | Validar botão *“Sair”* no campo usuário logado  | Ter acesso ao SGI | 1. Abrir a página *Filômetro* <br> 2. Clicar em *“Sair”* | Ao clicar em *Sair* o Profissional de Saúde é deslogado do sistema e é direcionado para página de *Login* | **OK**  |
| *Filômetro*  | F3 | Validar botão *“Cadastrar”* | Ter acesso ao SGI | 1. Abrir a página *Filômetro* <br> 2. Clicar em *“Cadastrar”* | Ao clicar em *Cadastrar* os `dados corretamente preenchidos no formulário são salvos` na base de dados do SGI, uma mensagem de confirmação é exibida, alguns campos do formulário são exibidos na tabela e a contagem dos registros salvos é atualizada  | **OK**  |
| *Filômetro*  | F4 | Validar botão *“Editar”* | Ter acesso ao SGI | 1. Abrir a página *Filômetro* <br> 2. Clicar em *“Editar”* | Ao clicar em *Editar* é exibida uma mensagem para orientar o Profissional de Saúde a clicar na célula desejada da tabela para efetuar a edição dos dados no formulário | **OK**  |
| *Filômetro*  | F5 | Validar botão *“Limpar”* | Ter acesso ao SGI | 1. Abrir a página *Filômetro* <br> 2. Clicar em *“Limpar”* | Ao clicar em *Limpar* os dados preenchidas no formulário são apagados | **OK**  |
| *Filômetro*  | F6 | Validar os campos *“DATA”* no formulário | Ter acesso ao SGI | 1. Abrir a página *Filômetro* <br> 2. Clicar em *“DATA”* <br>  | Ao clicar  no campo *DATA* no formulário o preenchimento é apenas  aceito no formato DD/MM/YYYY | **OK**  |
| *Filômetro*  | F7 | Validar o campo *“HORA”* no formulário | Ter acesso ao SGI | 1. Abrir a página *Filômetro* <br> 2. Clicar em *“HORA”* | Ao clicar em *"HORA"*, o dado para preenchimento no campo *HORA* no formulário somente é aceito no formato hh/mm | **OK**  |
| *Filômetro*  | F8 | Validar o campo *“LOTAÇÃO”* no formulário | Ter acesso ao SGI | 1. Abrir a página *Filõmetro* <br> 2. Clicar em *“LOTAÇÃO”* | Ao clicar em *"LOTAÇÃO"*, o dado para preenchimento no campo *LOTAÇÃO* no formulário deve ser escolhido entre uma das opções no dropdown. | **OK**  |
| *Vacinômetro*  | V1 | Validar botão *“Perfil”* no campo usuário logado  | Ter acesso ao SGI | 1. Abrir a página *Vacinômetro* <br> 2. Clicar em *“Perfil”* | Ao clicar em *Perfil* é exibido para o Profissional de Saúde o seu Nome e a Unidade de Saúde em que está registrado | **OK**  |
| *Vacinômetro*  | V2 | Validar botão *“Sair”* no campo usuário logado  | Ter acesso ao SGI | 1. Abrir a página *Vacinômetro* <br> 2. Clicar em *“Sair”* | Ao clicar em *Sair* o Profissional de Saúde é deslogado do sistema e é direcionado para página de *Login* | **OK**  |
| *Vacinômetro*  | V3 | Validar botão *“Cadastrar”* | Ter acesso ao SGI | 1. Abrir a página *Vacinômetro* <br> 2. Clicar em *“Cadastrar”* | Ao clicar em *Cadastrar* os `dados corretamente preenchidos no formulário são salvos` na base de dados do SGI, uma mensagem de confirmação é exibida, alguns campos do formulário são exibidos na tabela e a contagem dos registros salvos é atualizada  | **OK**  |
| *Vacinômetro*  | V4 | Validar botão *“Editar”* | Ter acesso ao SGI | 1. Abrir a página *Vacinômetro* <br> 2. Clicar em *“Editar”* | Ao clicar em *Editar* é exibida uma mensagem para orientar o Profissional de Saúde a clicar na célula desejada da tabela para efetuar a edição dos dados no formulário | **OK**  |
| *Vacinômetro*  | V5 | Validar botão *“Limpar”* | Ter acesso ao SGI | 1. Abrir a página *Vacinômetro* <br> 2. Clicar em *“Limpar”* | Ao clicar em *Limpar* os dados preenchidas no formulário são apagados | **OK**  |
| *Vacinômetro*  | V6 | Validar os campos *“DATA”* no formulário | Ter acesso ao SGI | 1. Abrir a página *Vacinômetro* <br> 2. Clicar em *“DATA”* <br>  | Ao clicar  no campo *DATA* no formulário o preenchimento  é apenas  aceito no formato DD/MM/YYYY | **OK**  |
| *Vacinômetro*  | V7 | Validar o campo *“LABORATÓRIO”* no formulário | Ter acesso ao SGI | 1. Abrir a página *Vacinômetro* <br> 2. Clicar em *“LABORATÓRIO”* | Ao clicar em *"LABORATÓRIO"*, o dado para preenchimento no campo *LABORATÓRIO* no formulário deve ser escolhido entre uma das opçôes no dropdown| **OK**  |
| *Vacinômetro*  | V8 | Validar o campo *“DOSES DISPONÍVEIS”* no formulário | Ter acesso ao SGI | 1. Abrir a página *VACINÔMETRO* <br> 2. Clicar em *“DOSES”* | Ao clicar em *"DOSES"*, o dado para preenchimento no campo *DOSES* no formulário deve ser escolhido  entre uma das opções no dropdown. | **OK**  |
| *Cadastro de Profissional*  | C1 | Validar Link *“Filômetro”* | Ter acesso ao SGI | 1. Abrir a página *Cadastro de Profissional* <br> 2. Clicar em *“Filômetro”* | Ao clicar em *Filômetro* Ira abrir uma tela de Login para ser preenchida, assim levando para a tela de Filômetro| **OK**  |
| *Cadastro de Profissional*  | C2 | Validar Link *“Vacinômetro”* | Ter acesso ao SGI | 1. Abrir a página *Cadastro de Profissional* <br> 2. Clicar em *“Vacinômetro”* | Ao clicar em *Vacinômetro* Ira abrir uma tela de Login para ser preenchida, assim levando para a tela de Vacinômetro| **OK**  |
| *Cadastro de Profissional*  | C3 | Validar botão *“Cadastrar”* | Ter acesso ao SGI | 1. Abrir a página *Cadastro de Profissional* <br> 2. Clicar em *“Cadastrar”* | Ao clicar em *Cadastrar* O Administrador do sistema preenchendo corretamente os dados do Profissional da Saúde, ira exibir uma mensagem de *“cadastro realizado ”* | **OK**  |
| *Cadastro de Profissional*  | C4 | Validar botão *“Editar”* | Ter acesso ao SGI | 1. Abrir a página *Cadastro de Profissional* <br> 2. Clicar em *“Editar”* | Ao clicar em *Editar* Os campos editados pelo Administrados do sistema com os dados do Profissional da Saúde serão editados | **OK**  |
| *Cadastro de Profissional*  | C5 | Validar botão *“Excluir”* | Ter acesso ao SGI | 1. Abrir a página *Cadastro de Profissional* <br> 2. Clicar em *“Excluir”* | Ao clicar em *Excluir* O Administrador do sistema ira realizar a exclusão do Profissional da Saúde do sistema, assim apagando todos os dados do Profissional da Saúde| **OK**  | 
| *Cadastro de Profissional*  | C6 | Validar botão *“Limpar”* | Ter acesso ao SGI | 1. Abrir a página *Cadastro de Profissional* <br> 2. Clicar em *“Limpar”* | Ao clicar em *Limpar* O Administrador do sistema realizara a limpeza de todos os campos preenchidos| **OK**  |
| *Onde tem Vacina ?*  | O1 | Validar Link *“Sobre o Projeto”* | Ter acesso ao SGI | 1. Abrir a página *Onde tem Vacina * <br> 2. Clicar em *“Sobre o Projeto”* | Ao clicar em *Sobre o projeto* é exibido para o usuário uma breve descrição sobre o SGI| **OK**  |
| *Onde tem Vacina ?*  | O2 | Validar Link *“Ajuda”* | Ter acesso ao SGI | 1. Abrir a página *Onde tem Vacina * <br> 2. Clicar em *“Ajuda”* | Ao clicar em *Ajuda* Ao clicar em Ajuda o usuário é direcionado a página Ajuda| **OK**  |
| *Onde tem Vacina ?*  | O3 | Validar Link *“Contatos”* | Ter acesso ao SGI | 1. Abrir a página *Onde tem Vacina * <br> 2. Clicar em *“Contatos”* | Ao clicar em *Contatos* Ao clicar em Contatos é exibido para o usuário um endereço de email para suporte| **OK**  |
| *Onde tem Vacina ?*  | O4 | Validar Link *“Login”* | Ter acesso ao SGI | 1. Abrir a página *Onde tem Vacina * <br> 2. Clicar em *“Login”* | Ao clicar em *Login* Ao clicar em Login o usuário é direcionado a página Login| **OK**  |
| *Onde tem Vacina ?*  | O5 | Validar accordion *“UNIDADES BÀSICAS DE SAÙDE”* | Ter acesso ao SGI | 1. Abrir a página *Onde tem Vacina ?*  <br> 2. Clicar em *“UBS”*   | Ao clicar em *UBS (Nome da Unidade)* È exibido para o usuário informações sobre a UBS selecionada como "Endereço","Horário de atendimento","Telefone","Disponibilidade da dose","Laboratórios disponíveis para aplicação","Status da fila da Unidade"| **OK**  |


## Avaliação

Nos testes de software foram testadas as funcionalidades básicas do sistema e os resultados apresentados para apreciação são visualizados na tabela acima. 

Nos pontos fortes pode-se destacar:
- Interface com recursos simples e objetivos para utilização do usuário: acesso a outras páginas, comandos assertivos e suporte ao usuário.
- O cumprimento das premissas essenciais ao projeto como o cadastro e registro de pessoas vacinadas. 

Nos pontos fracos pode-se destacar:
- Falta de interatividade entre as páginas *Filômetro* e *Vacinômetro* com a *Onde tem Vacina?*. Pois, os parâmetros de controle das informações na parte dinâmica do projeto não foram satisfeitas. Itens como disponibilidade de doses e ocupação do local de vacinação não estão habilitados para funcionarem automaticamente.
 - Falta de interatividade entre as páginas *Filômetro*, *Vacinômetro* e *Formulário de Anamnese*. Pois, os parâmetros de controle das informações na parte dinâmica do projeto não foram satisfeitas. 
  - Falta de interatividade entre as páginas do *Administrador*. Pois, os parâmetros de controle das informações na parte dinâmica do projeto não foram satisfeitas. 
- Falta de recursos de busca (ex: geolocalização) para encontrar locais de vacinação mais próximos ao usuário na página *Onde tem Vacina?*.
- Falta da gestão do perfil Administrador que não foi implementado em *Login* por problemas no grupo e prazo.
-Falta do mecanismo principal do sistema, a contagem regressiva de vacinas em tempo real.

Pontos de melhoria futura:
- Linkagem de todas as páginas do sistema para navegação completa no SGI.
- Implementação de mecanismos de busca e filtragem na base de dados dos registros salvos no SGI.
- Implementação de preenchimento de data e hora atual automaticamente.
- Implementação de um recurso de geolocalização.

