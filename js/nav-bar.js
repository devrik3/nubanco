// document.getElementById('nav').addEventListener('click', function(){
// 	document.getElementById('aside-left').style.display = 'block';
// })
	// aside bar aparece
document.getElementById('nav-hamb').addEventListener("click", function(){
	document.getElementById('nav').style.display = 'block';
	document.getElementById('nav-hamb').style.display = 'none';
	document.getElementById('nav-hamb2').style.display = 'block';
	document.getElementById('nav').classList.add('active');
});
document.getElementById('nav-hamb2').addEventListener("click", function(){
	document.getElementById('nav').style.display = 'none';
	document.getElementById('nav-hamb').style.display = 'block';
	document.getElementById('nav-hamb2').style.display = 'none';
	document.getElementById('nav').classList.add('notactive');
});
 // const navbar = document.getElementsByClassName('nav-bar');
 // if(navbar.classList) navbar.classList.add('nav-drop');
 // else navbar.className += 'nav-drop';
 // aside bar desaparece
 // document.getElementById('close').removeEventListener('click' function(){
 //	document.getElementById('aside-left').style.display = 'none'
 // })