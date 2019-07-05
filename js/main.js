var r=document.getElementById("rr");
function bo(){
    r.style.fontWeight="bold";
}
function ita(){
    r.style.fontStyle="italic";
    event.preventDefault();

}
function underline (){
    r.style.textDecoration="underline";
    event.preventDefault();

}

function ar(){
    r.style.fontFamily=document.getElementById("pol").value;
}
function si(){
    r.style.fontSize=document.getElementById("siz").value;
}
