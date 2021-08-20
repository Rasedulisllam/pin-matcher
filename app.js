            
// pin generator
function PinGenerator(){
    const generatedPin=Math.round(Math.random()*10000);
    const pinString=generatedPin+'';
    if(pinString.length != 4){
       return PinGenerator();
    }
    else{
        return generatedPin;
    }
}

// pin generator control button
document.getElementById("generate-pin-btn").addEventListener("click",function(){
    document.getElementById("generate-pin-filed").value=PinGenerator();
})

// matching and calculated section
document.getElementById("calc-btns").addEventListener("click",function(e){
   const Number=e.target.innerText;
   const calcInput=document.getElementById("calc-input");
   if(isNaN(Number)){
    if(Number=='C'){
        calcInput.value='';
    }
   }
   else{
    const calcPrevNumber=calcInput.value;
    calcInput.value=calcPrevNumber+Number;
   }
})

// generated pin and typing pin matching check;

document.getElementById("pin-match-submit").addEventListener("click",function(){
    const generatedInput=document.getElementById("generate-pin-filed").value;
    const calcInput=document.getElementById("calc-input").value;
    const unmatchMassage=document.getElementById('unmatch-massage');
    const matchMassage=document.getElementById('match-massage');
    if(generatedInput==calcInput){
        matchMassage.style.display="block";
        unmatchMassage.style.display="none";
    }
    else if(generatedInput!=calcInput){
        matchMassage.style.display="none";
        unmatchMassage.style.display="block";
    }
    // console.log(generatedInput,calcInput);
})


