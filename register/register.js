
var x1=document.getElementById("1"); // firstname
var x2=document.getElementById("2"); // last name
var x3=document.getElementById("3"); // Email
var x4=document.getElementById("4"); // password
var x5=document.getElementById("5"); //phonenum
var x6=document.getElementById("6"); // username

function valid(){
    event.preventDefault();
if( 
    x1.value!="" &&
    x2.value!="" &&
    x3.value!="" &&
    x4.value!="" &&
    x5.value!="" &&
    x6.value!="")
    {

        let accounts=JSON.parse(localStorage.getItem("accounts"))||[]; // an array
        let obj={
            firstName:x1.value,
            lastName:x2.value ,
            email: x3.value,
            password:x4.value,
            phonenum:x5.value,
            username:x6.value
        };
        accounts.push(obj);
        localStorage.setItem("accounts",JSON.stringify(accounts));
        localStorage.setItem("currentUser",(accounts.length-1));
        if(localStorage.getItem("valid")=="0"){
            window.localStorage.setItem("valid","1");
            window.location.href='file:///D:/final%20web%20project/Home%20page/home.html#';
            
        }
        

    }

}


