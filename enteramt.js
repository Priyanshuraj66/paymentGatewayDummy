const input1 = document.getElementById("input-1");
const cancelBtn = document.getElementById("cn-class");
const payBtn = document.getElementById("py-class"); 


cancelBtn.addEventListener("click", function(){
    window.location.href = "paymentpage.html";
});
payBtn.addEventListener("click", function(){
   if(input1.value){
      window.location.href = "payload.html"; 
   }
   else{
      window.alert("Please enter the specific amount to pay!");
   }
});
