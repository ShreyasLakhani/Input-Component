let a= parseInt(document.getElementById("age").value)


let b=document.getElementById("r")

if(a < 18){
    b.style.color="red";
    b.innerHTML="Sorry,your age is under 18"
}