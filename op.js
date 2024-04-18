let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let num3=document.getElementById("num3");


let n1=document.getElementById("n1");
let n2=document.getElementById("n2");
let n3=document.getElementById("n3");

let res=document.getElementById("res");
let res2=document.getElementById("res2");

num1.oninput=()=>{
 n1.innerHTML=num1.value; 
 
 let a=parseFloat(num1.value);
 let b=parseFloat(num2.value);
 let c=parseFloat(num3.value);

 let x;
 let x2;

  let factor=Math.pow(b,2)-(4*a*c);

 if(factor===0){
    res.innerHTML=(-b/(2*a));
 }else if(factor>0){
x=(-b+Math.sqrt(factor))/(2*a);
x2=(-b-Math.sqrt(factor))/(2*a);
res.innerHTML="x1:"+x.toFixed(2) ;
res2.innerHTML=" x2:"+x2.toFixed(2);
 }else{
   res.innerHTML="No hay solucion";
   res2.innerHTML="";
 }



}

num2.oninput=()=>{
 n2.innerHTML=num2.value;   
 let a=parseFloat(num1.value);
 let b=parseFloat(num2.value);
 let c=parseFloat(num3.value);

 let x;
 let x2;

 let factor=Math.pow(b,2)-(4*a*c);

 if(factor===0){
    res.innerHTML=(-b/(2*a));
 }else if(factor>0){
x=(-b+Math.sqrt(factor))/(2*a);
x2=(-b-Math.sqrt(factor))/(2*a);
res.innerHTML="x1:"+x.toFixed(2) ;
res2.innerHTML=" x2:"+x2.toFixed(2);
 }else{
   res.innerHTML="No hay solucion";
   res2.innerHTML="";
 }

}

num3.oninput=()=>{
 n3.innerHTML=num3.value; 
 let a=parseFloat(num1.value);
 let b=parseFloat(num2.value);
 let c=parseFloat(num3.value);

 let x;
 let x2;

 let factor=Math.pow(b,2)-(4*a*c);

 if(factor===0){
    res.innerHTML=(-b/(2*a));
 }else if(factor>0){
x=(-b+Math.sqrt(factor))/(2*a);
x2=(-b-Math.sqrt(factor))/(2*a);
res.innerHTML="x1:"+x.toFixed(2) ;
res2.innerHTML=" x2:"+x2.toFixed(2);
 }else{
   res.innerHTML="No hay solucion";
   res2.innerHTML="";
 }

  
}
   
   
