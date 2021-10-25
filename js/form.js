var form = document.getElementById('formulario');
var nomeSobrenome = document.getElementById('nome_sobrenome');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm_password');
var date = document.getElementById('date');
var data = '2001-01-01';
var submit = document.getElementById('btn_send');

form.addEventListener('submit', function(e){
	
	// Condição input name.
	if (nomeSobrenome.value == ''){
		document.getElementById('error').innerHTML = 'Um dos campos está vazio. :)'
		var nameError = document.getElementById('error').style.display = 'block';
		var timeOut = setTimeout(function timernone(){
			nameError = document.getElementById('error').style.display = 'none';
		}, 3000);
		e.preventDefault();
	}
	else {
		console.log('Nome Certo, sem erros!');
		console.log(date.value)
	}

	// Condição input email.
	if (email.value == ''){
		document.getElementById('error').innerHTML = 'Um dos campos está vazio. :)'
		var emailError = document.getElementById('error').style.display = 'block';
		var timeOut = setTimeout(function timernone(){
			emailError = document.getElementById('error').style.display = 'none';
		}, 3000);
		e.preventDefault();
	}
	else {
		console.log('Email Certo, sem erros!');
	}

	// Condição input password.
	if (password.value == confirm_password.value){
		console.log('as senhas sao iguais')
	}
	else{
		document.getElementById('error').innerHTML = 'Digite senhas iguais. :/'
		var passError = document.getElementById('error').style.display = 'block';
		var timeOut = setTimeout(function timernone(){
			passError = document.getElementById('error').style.display = 'none';
		}, 3000);
		e.preventDefault();
	}
	// Condição input date.
	if (date.value < data){
		console.log('Voçê pode ter um cartão.');
	}
	else{
		document.getElementById('error').innerHTML = 'Voçê é muito novo. :/'
		var dateError = document.getElementById('error').style.display = 'block';
		var timeOut = setTimeout(function timernone(){
			dateError = document.getElementById('error').style.display = 'none';
		}, 3000);
		e.preventDefault();
	}
	// console.log(nomeSobrenome.value \n email.value \n password.value confirm_password.value)
});