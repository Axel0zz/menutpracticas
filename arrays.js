let items=document.getElementById("items");
let valor=document.getElementById("valor");
let add=document.getElementById("add");
let del=document.getElementById("del");
let unshift=document.getElementById("un");
let shift=document.getElementById("sh");
let index=document.getElementById("btnIndex");
let splice=document.getElementById("splice");
var miarray=new Array();


splice.onclick=async()=>
const{value:pos}=await
Swal.fire({
    title:"Splice",
    input:"text",
    inputlabel
})



index.onclick=()=>{
    let pos=miarray.indexOf(parseInt(document.getElementById("index").value));
    Swal.fire({
        title: "ARRAY",
        text: "Posición:"+pos,
        icon: "success"
    });
}   

unshift.onclick=()=>{
    let n=parseInt(valor.value);
    miarray.unshift(n);
    imprimirArray()
}

shift.onclick=()=>{
    miarray.shift();
    imprimirArray()
}
add.onclick=()=>{
    let n=parseInt(valor.value);
    miarray.push(n);
    imprimirArray();
}
del.onclick=()=>{
    miarray.pop();
    imprimirArray();
}

const imprimirArray=()=>{    
    let x="";
    for(let i=0;i<miarray.length;i++){
        x+=`<h3>${miarray[i]}</h3>`;
    }
    items.innerHTML=x
}