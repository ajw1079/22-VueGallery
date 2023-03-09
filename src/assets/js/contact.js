const close1 = document.querySelector(".close");
const thankyou_message1 = document.querySelector(".thankyou_message");
console.log(close1);
console.log(thankyou_message1);

/*
const closePop = function(){
    thankyou_message1.style.display="none";
}
close.onclick = closePop;
*/
setTimeout(() => {
    thankyou_message1.style.display="none";
},3000);
