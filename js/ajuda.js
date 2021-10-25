var form = document.getElementById('form'); //Chamando o </form>
var nome = document.getElementById('nome'); //Chamando o nome
var email = document.getElementById('email'); //Chamando o email
var duvida = document.getElementById('duvida'); //Chamando a duvida

form.addEventListener('submit', function(e){
	if(nome.value == ''){
		document.getElementById('error').innerHTML = 'Preencha todos os campos. :/'
		var nameError = document.getElementById('error').style.display = 'block';
		var timeOut = setTimeout(function timernone(){
			nameError = document.getElementById('error').style.display = 'none';
		}, 3000);	
		e.preventDefault();
	}else{
		document.getElementById('nome').style.border = '1px solid #333';
	}
	
	if(email.value == ''){
		document.getElementById('error').innerHTML = 'Preencha todos os campos. :/'
		var emailError = document.getElementById('error').style.display = 'block';
		var timeOut = setTimeout(function timernone(){
			emailError = document.getElementById('error').style.display = 'none';
		}, 3000);	
		e.preventDefault();
	}else{
		document.getElementById('email').style.border = '1px solid #333';
	}

	if(duvida.value == ''){
		document.getElementById('error').innerHTML = 'Preencha todos os campos. :/'
		var duvidaError = document.getElementById('error').style.display = 'block';
		var timeOut = setTimeout(function timernone(){
			duvidaError = document.getElementById('error').style.display = 'none';
		}, 3000);	
		e.preventDefault();
	}else{
		document.getElementById('duvida').style.border = '1px solid #333';
	}
});
