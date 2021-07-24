let agencia;
let conta;
let cartoes;
let emprestimos;
let negativados;

agencia = prompt("Agencia: ");
conta = prompt("Conta: ");
cartoes = prompt("Cartoes: ");
emprestimos = prompt("emprestimos: ");
negativados = prompt("O Nome consta no SPC: ");


if(negativados == "Sim" || negativados == "sim") {
    negativados = true;
}else if(negativados == "Não" || negativados == "não") {
    negativado = false;
}else {
    negativados = "error 404"
}

//200 sucesso
//100 operação imcompleta
//404 operação não encontrada
//401 3 operação não autorizada
//500 erro no servidor


alert(`Agencia: ${agencia} \n
Conta: ${conta} \n
Cartoes: ${cartoes} \n
Emprestimo: ${emprestimos} \n
Negativado: ${negativados}`);