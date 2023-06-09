let lists=document.getElementsByClassName("list");
let rightBox=document.getElementById("right");
let leftBox=document.getElementById("left");

for(list of lists)
{
    list.addEventListener("dragstart",(e)=>{
        let selected=e.target;

        rightBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });

        rightBox.addEventListener("drop",(e)=>{
            rightBox.appendChild(selected);
            selected=null;
        });

        leftBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });

        leftBox.addEventListener("drop",(e)=>{
            leftBox.appendChild(selected);
            selected=null;
        });
    });
}

function resetbtn(){
    var container1=document.getElementById("left");
    var container2=document.getElementById("right");
    container1.innerHTML=html1;
    container2.innerHTML=html2;
}

var html1;
var html2;
window.onload=function(){
    html1=document.getElementById('left').innerHTML;
    html2=document.getElementById('right').innerHTML;
};