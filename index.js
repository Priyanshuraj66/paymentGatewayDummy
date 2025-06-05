 const mycard =       document.getElementById("myRadio");
 const myUpi =        document.getElementById("myRadio2");
 const myPaytm =      document.getElementById("myRadio3");
 const myAmazonpay =  document.getElementById("myRadio4");
 const myGooglepay =  document.getElementById("myRadio5");
 const myTandC =      document.getElementById("myCheckbox1");
 const myContinue =   document.getElementById("myContinue");
 
 const result = document.getElementById("result");


   
   myContinue.addEventListener("click", function(){
     if(mycard.checked && myTandC.checked){
        window.location.href="paymentpage.html";
     }
     else if(myUpi.checked && myTandC.checked){
        window.location.href="Upi.html";
     }
     else if(myPaytm.checked && myTandC.checked){
        window.location.href= "https://paytm.com/";
     }
     else if(myAmazonpay.checked && myTandC.checked){
        window.location.href= "https://www.amazon.in/amazonpay/home";
     }
     else if(myGooglepay.checked && myTandC.checked){
        window.location.href= "https://pay.google.com/";
     }
});
  