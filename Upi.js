const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const payNow = document.getElementById("paynow");
const canncelNow = document.getElementById("canncelpay")

function removeNumbers(event){
     if(/[0-9]/.test(String.fromCharCode(event.which))){
          event.preventDefault(); 
     }
}
function removeLettersandSymbols(event){
     if(/[a-zA-Z~`~!@#$#$%^&**()_+|}{":>?<}`]/.test(String.fromCharCode(event.which)))
          event.preventDefault(); 
}
payNow.addEventListener("click", function(){
    if(input1.value && input2.value){
     window.location.href="payload.html";
     }
     else{
     window.alert("Please input your creditentials to continue further!");
     }
});
canncelNow.addEventListener("click", function(){
     window.location.href = "INDEX.html";
});

