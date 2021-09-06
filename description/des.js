let task=[0,0,0,0,0,0];
console.log(task);

function action(px,Bx,n){
     let num = n-1 ;
     if(task[num]==0) {
        document.getElementById(px).style.display="block" ;
        document.getElementById(Bx).style.transform="rotate(90deg)" ;
        task[num]=1 ;
     }

     else {
        document.getElementById(px).style.display="none";
        document.getElementById(Bx).style.transform="rotate(0deg)" ;
        task[num]=0;
     }
}