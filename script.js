const upperSet = "ABCDEFGHIJKLMANOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*()_+";

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

const pass = document.getElementById("pass-len");
const test = document.getElementById("test");

  
  const random = (dataSet)=>{
      return  dataSet[Math.floor(Math.random()*dataSet.length)]
  }
  const generator = (password = "")=>{
    if(upper.checked){
       password += random(upperSet)
    }
    if(lower.checked){
        password += random(lowerSet)
     }
     if(number.checked){
        password += random(numberSet)
     }
     if(symbol.checked){
        password += random(symbolSet)
     }
    
     if(password.length < pass.value){
       return generator(password);
     }
    test.innertext =  truncateString(password,pass.value)
  }
  
  document.getElementById("btn").addEventListener("click",()=>{
    generator();
  })
 function truncateString(str,num){
   if(str.length > num){
     return substr = str.substring(0,num)
   }
   else{
      return str;
   }
 }