document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Evita que a página recarregue ao clicar em enviar
    event.preventDefault();

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const feedbackBox = document.getElementById('formFeedback');

    // Cria uma mensagem personalizada de sucesso
    feedbackBox.innerHTML = `Obrigado pelo contato, ${name}! Sua mensagem foi enviada com sucesso para a equipe do Agrinho Sustentável. 🌱`;
    
    // Adiciona a classe de estilo e remove o 'hidden' para torná-la visível
    feedbackBox.className = "success-msg";

    // Limpa os campos do formulário após o envio
    document.getElementById('contactForm').reset();
});