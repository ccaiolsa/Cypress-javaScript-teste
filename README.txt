SITE TESTE PARA INTEGRAÇÃO HTML E JAVASCRIPT

/////////////////////////////////////////////////////////////////////
Descrição
Esse repositório é destinado à salvar mini projetos que envolvam 
HTML, CSS e JAVASCRIPT e teste UI com Cypress.

Nesse mini projeto integrei um formuário simples com um script
utilizei métodos como .querySelector() para buscar elementos 
com ID específico, .preventDefault() para evitar que as infor-
mações fossem enviadas ao próprio site e ocasionasse o recarre-
gamento da página, .classList.remove() para remover uma classe
após um evento ser desencadeado.
Ainda adicionei uma condição para a submissão do formulário
para evitar de enviar o formulário sem preencher os campos

Como?
---------------------------------------------------------------
const variável1 = document.querySelector("#ID");
const variável2 = document.querySelector("#ID");
function varificarCampos(){
  if (variável1.value.trim() && variável2.value.trim()){
   botao.disabled: false;
  }else{
   botao.disabled: true;
  }
variável1.addEventListener('input', verificarCampos());
variável2.addEventListener('input', verificarCampos());
----------------------------------------------------------------

Após o mini projeto, foi elaborado um teste automatizado testando
as funcionalidades do site.
/////////////////////////////////////////////////////////////////////
