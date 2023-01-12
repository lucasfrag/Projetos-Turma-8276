/* Mostrar/esconder dicas */

function gerarPDF() {
    print()
}

function mostraDica()
{
    document.getElementById("dicaTexto").style.display = "inline";
}

function escondeDica()
{
    document.getElementById("dicaTexto").style.display = "none";
}

/* Validar senha */

function validaLogin() {
    var campoLogin = document.getElementById("txtLogin")
    var valorLogin = txtLogin.value;

    if(valorLogin.length < 5) {
        if (valorLogin == "" || valorLogin == null ) {
            alert("Campo de login não pode estar em branco!");
            return false;
        } else {
            alert("Login precisa ter ao menos 5 caracteres.");
            return false;
        }
           
    } else {
        return true;
    }
}

function validaSenha()
{
    var campoSenha = document.getElementById("txtSenha");
    var valorSenha = txtSenha.value;
    if(valorSenha.length < 6)
    {
        alert("Senha precisa ter ao menos 6 caracteres");
        return false;
    }
    else
    {
        return true;
    }
}
/**Bloco global*/
document.getElementById("dicaTexto").style.display = "none";

var elForm = document.getElementById("formPrincipal");
elForm.onsubmit = validaLogin;
elForm.onsubmit = validaSenha;