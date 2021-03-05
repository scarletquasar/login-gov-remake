var databaseLogins = ['000000000A123'];
function EfetuarLogin() {
	//INÍCIO DA SIMULAÇÃO DE LOGIN (COISAS QUE DEVERIAM SER EXECURADAS DE OUTRA MANEIRA NO BACK-END)
	document.getElementsByClassName("info_login_Nfeito")[0].style.display = "none";
	document.getElementsByClassName("info_login_feito")[0].style.display = "none";


    if(databaseLogins.indexOf(document.getElementById('cpf_container').value + document.getElementById('senha_container').value)) {
		document.getElementsByClassName("info_login_Nfeito")[0].style.display = "block";
		return;
    } 
	else {
		document.getElementsByClassName("info_login_feito")[0].style.display = "block";
		return;
	}



for (i = 0; i < close.length; i++) {

  close[i].onclick = function(){

    var div = this.parentElement;

    div.style.opacity = "0";

    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
}