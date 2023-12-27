let whatsappWindow;  // Variável global para armazenar a referência da janela do WhatsApp

function chamar() {
    const form = document.getElementById('my-form');

    // Captura os valores dos campos do formulário
    const nome = form.querySelector('input[name="nome"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const telefone = form.querySelector('input[name="telefone"]').value;
    const servico = form.querySelector('select[name="servico"]').value;
    const destino = form.querySelector('textarea[name="destino"]').value;

    // Envia as informações para o WhatsApp
    const mensagem = encodeURIComponent(
        'Olá, sou ' + nome + ', gostaria de mais informações sobre ' + servico +
        '. Tenho interesse no seguinte destino: ' + destino +
        '. Aqui está meu email ' + email + ' e meu celular ' + telefone
    );

    // Abre a janela do WhatsApp e salva a referência na variável global
    whatsappWindow = window.open('https://api.whatsapp.com/send?phone=5519986030528&text=' + mensagem);

    return whatsappWindow;
}

const form = document.getElementById('my-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();  // Adia a ação padrão do formulário (recarregar a página)

    chamar();

    // Aguarda 2 segundos (2000 milissegundos) antes de recarregar a página
    setTimeout(function() {
        window.location.reload();
    }, 2000);
});
