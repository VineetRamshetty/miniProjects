let ip=document.querySelector("input");
let addBtn=document.querySelector("#addBtn");
let ul=document.querySelector("ul");

addBtn.addEventListener("click", function(){
    let task=ip.value;
    ip.value="";
    let list=document.createElement("li");
    list.innerText=task;
    let btn=document.createElement("button");
    btn.innerText="X";
    list.appendChild(btn);
    ul.appendChild(list);
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName==="BUTTON"){
        let list=event.target.parentElement;
        list.remove();
    }
});