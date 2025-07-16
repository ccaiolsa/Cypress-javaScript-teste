
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');

function verificarCampos(){
    if (nome.value.trim() && email.value.trim()){
        botao.disabled = false;
    }else{
        botao.disabled = true;
    }
}

nome.addEventListener('input', verificarCampos);
email.addEventListener('input', verificarCampos);

const botao = document.querySelector('#submit-btn');
botao.addEventListener('click', function(event){
    event.preventDefault();

    const form = document.querySelector('#contact-form');
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#mensagem').value;
    const resposta = document.querySelector('#responseMessage');
    

    form.style.display = 'none';
    resposta.classList.remove('oculto');
    resposta.innerHTML = 
    `Parabens ${nome}! Seu cadastro foi feito com sucesso!<br>
     Verifique seu email ${email} por favor!<br>`;
});

