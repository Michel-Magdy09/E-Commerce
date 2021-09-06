var usernamee=document.getElementById("email");
var pass=document.getElementById("pass");
let accounts=JSON.parse(localStorage.getItem("accounts"))||[];

function visit(){

    event.preventDefault();
    let a = false;
    for (let i = 0; i < accounts.length; i++) {
        if(accounts[i].username === usernamee.value && accounts[i].password === pass.value)
        {
            window.location.href='file:///D:/final%20web%20project/Home%20page/home.html#';
            if(localStorage.getItem("valid")=="0")
            {
                window.localStorage.setItem("valid","1");
            }
            localStorage.setItem("currentUser",i);
            a=true;
            break;
        }
    }
    if(!a)
    {
        alert("Invalid Information");
    }

}