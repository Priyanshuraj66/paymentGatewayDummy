const debitbtn= document.getElementById("debitbtn");
const cardNum= document.getElementById("myci1");
const expDate= document.getElementById("myci2");
const cvv= document.getElementById("myci3");
const cpay= document.getElementById("card");

function ValidateINput(input){
    input.value= input.value.replace(/[^0-9]/g, "").slice(0,16);
    if(input.value.length===16){
        alert("You have entered 16 digits!");
    }
}
function removeLettersandSymbols(event){
    if(/[a-zA-Z~`~!@#$#$%^&**()_+|}{":>?<}`]/.test(String.fromCharCode(event.which))){
        event.preventDefault(); 
    }
}

function ValidateCVV(input){
    if(input.value.length > 3){
       input.value = input.value.slice(0,3);
    }
}

function submitBTN(){
   
    cardNum.value= cardNum.value.trim();
    expDate.value=expDate.value.trim();
    cvv.value=cvv.value.trim();
     

if(cardNum.value && expDate.value && cvv.value) {

    if(/^\d{16}$/.test(cardNum.value)){
    const cardDetails= {
            cardNum: cardNum.value,
            expDate: expDate.value,
            cvv: cvv.value,


    };
    
    alert("Payment details are successfully saved!");
    window.location.href= "enteramt.html";
}
        else{
            alert("Invalid card details!");
        }
      
}
    
    else{
        alert("Please fill out the details to continue further!")
    }
    };


cpay.addEventListener("click", function(){
    cardNum.value=" ";
    expDate.value=" ";
    cvv.value=" ";

    window.location.href="INDEX.html";
});
