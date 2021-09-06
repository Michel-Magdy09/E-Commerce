function del() // delete
{
    localStorage.setItem("valid","0");
    location.reload();
}
if(localStorage.getItem("valid")=="0"){
    document.getElementById("admin").style.display="none";
    document.getElementById("logout").style.display="none";
    document.getElementById("login").style.display="inline block";
    document.getElementById("register").style.display="inline block";
    }
else{
        document.getElementById("logout").style.display="inline block";
        document.getElementById("admin").style.display="inline block";
        document.getElementById("login").style.display="none";
        document.getElementById("register").style.display="none";
    }


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0; 
}


   
