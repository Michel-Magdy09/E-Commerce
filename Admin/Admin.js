
let accounts=JSON.parse(localStorage.getItem("accounts"))||[];
let cur=localStorage.getItem("currentUser");
let user=document.getElementById("name");
let pass=document.getElementById("pass");
let mail=document.getElementById("email");
let num=document.getElementById("number");

user.innerText=accounts[cur].username;
pass.innerText=accounts[cur].password;
mail.innerText=accounts[cur].email;
num.innerText=accounts[cur].phonenum;


let field1=document.getElementById("input1");
let field2=document.getElementById("input2");
let field3=document.getElementById("input3"); 
let field4=document.getElementById("input4");

let curName= accounts[cur].username;
let curNum= accounts[cur].phonenum;
let curEmail=accounts[cur].email;
let curFirst=accounts[cur].firstName;
let curLast=accounts[cur].lastName;
let curPass=accounts[cur].password;

function changeAdmin(){

    if(field1.value != ""){

        curName=field1.value;
    }
    if(field2.value != ""){

        curPass=field2.value;
    }
    if(field3.value != ""){

        curEmail=field3.value;
    }
    if(field4.value != ""){

        curNum=field4.value;
    }
    let aaa={
        email: curEmail,
        firstName:curFirst,
        lastName:curLast ,
        password:curPass,
        phonenum:curNum,
        username:curName
    };
    accounts.splice(cur,1,aaa);
    localStorage.setItem("accounts",JSON.stringify(accounts));
    location.reload(); // to refresh the page
}
/*****************************************************/ 
function changeColor1 (){
    
    let q1 = document.getElementById("firstColor");
    document.getElementById("cont").style.backgroundColor=q1.value;
}
function changeColor2 (){
    
    let q2 = document.getElementById("secondColor");
    document.getElementById("second").style.backgroundColor=q2.value;
}
 function changeColor3 (){
    
    let q3 = document.getElementById("thirdColor");
    let ll=document.getElementsByClassName("mainstyle");
    for (let i = 0; i <ll.length ; i++) {
        ll[i].style.backgroundColor=q3.value;
    }
 }

function resetValues(){
let le=document.getElementsByClassName("mainstyle");

for (let i = 0; i <le.length ; i++) {
    le[i].style.backgroundColor="#36353521";
}
document.getElementById("second").style.backgroundColor="#36353521";
document.getElementById("cont").style.backgroundColor="transparent";
    
}





