var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 4){
	counter = 1;
}
},8000);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "1rem 0";
    document.getElementById("down").style.top = "-5rem";
   
  } else {
    document.getElementById("navbar").style.padding = "3rem 0";
    document.getElementById("down").style.top = "2.5rem";
    
  }
   
}



$(document).ready(function(){
	$('.list').click(function(){
		const value = $(this).attr('data-filter');
		if (value == 'all'){
			$('.itemBox').show('1000');
		}
		else{
			$('.itemBox').not('.'+value).hide('1000');
			$('.itemBox').filter('.'+value).show('1000');
		}
	})
	$('.list').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})



const accordion = document.getElementsByClassName('contentBx');

for (i = 0; i<accordion.length; i++ ){
	accordion[i].addEventListener('click',function(){
		this.classList.toggle('active')
	})
}



var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")

menubtn .onclick = function(){
	if(sidenav.style.right == "-250px"){
		sidenav.style.right = "0";
		menu.src = "img/close.png"	;
		}
	else{
		sidenav.style.right = "-250px";
		menu.src = "img/menu.png"	;

		}
}
