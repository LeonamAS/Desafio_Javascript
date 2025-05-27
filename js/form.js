
//class contato

class contato {

}

function Post(form) {
    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value);
    console.log(data);
}

function Enviar() {

    var nome = document.getElementsByName("nome").value;

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}