function verificarAcesso() {
    const numeroCartao = parseInt(document.getElementById("cartao").value);
    let mensagem = "";

    if (numeroCartao >= 1000 && numeroCartao <= 1999) {
        mensagem = "Acesso total a todas as áreas restritas.";
    } else if (numeroCartao >= 2000 && numeroCartao <= 2999) {
        mensagem = "Acesso limitado a algumas áreas restritas.";
    } else if (numeroCartao > 3000) {
        mensagem = "Acesso negado. Sem permissão para acessar as áreas restritas.";
    } else {
        mensagem = "Número de cartão inválido.";
    }

    document.getElementById("resultado").textContent = mensagem;
}