let monthly = document.getElementsByClassName("pricingMonthly")[0];
let monthly2 = document.getElementsByClassName("pricingMonthly")[1];
let monthly3 = document.getElementsByClassName("pricingMonthly")[2];
let annually = document.getElementsByClassName("pricingAnnually")[0];
let annually2 = document.getElementsByClassName("pricingAnnually")[1];
let annually3 = document.getElementsByClassName("pricingAnnually")[2];
// let monthly = document.getElementById("Monthly");
// let annually = document.getElementById("Annually");

function switchPrice() {
  if(monthly.classList.contains("hide")){
    monthly.classList.remove("hide");
    annually.classList.add("hide")
  }else{
    annually.classList.remove("hide");
    monthly.classList.add("hide")
  }
  if(monthly2.classList.contains("hide")){
    monthly2.classList.remove("hide");
    annually2.classList.add("hide")
  }else{
    annually2.classList.remove("hide");
    monthly2.classList.add("hide")
  }
  if(monthly3.classList.contains("hide")){
    monthly3.classList.remove("hide");
    annually3.classList.add("hide")
  }else{
    annually3.classList.remove("hide");
    monthly3.classList.add("hide")
  }
}

console.log(monthly);