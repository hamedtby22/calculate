let displaybox=document.querySelector(".display");
function play(event) {
    const x=event.target.innerText;
    if (displaybox.innerHTML==0) {
        displaybox.innerHTML=x;
        return displaybox.innerHTML;
    }
    return displaybox.innerHTML+=x;
}
function calculate() {
    let result=displaybox.innerText;
    displaybox.innerText=eval(result);
}
function allclear() {
    displaybox.innerText=0;
}
function clearlast() {
    var text= displaybox.innerText;
    if (text.length===1) {
        displaybox.innerText=0;
    }else{
        displaybox.innerText=text.substring(0,text.length - 1)
    }
}
document.querySelector(".clear-last").addEventListener("click",clearlast);
document.querySelector(".all-clear").addEventListener("click",allclear);
document.querySelector(".calc").addEventListener("click",calculate);
let list=document.querySelectorAll(".show-display");
list.forEach(item=>{
    item.addEventListener("click",play);
})

// let displaybox=document.querySelector(".display");
// function run(event) {
//     const x=event.target.innerText;
//     if (displaybox.innerHTML==0) {
//         displaybox.innerHTML=x;
//         return displaybox.innerText;
//         console.log(x)
//     }
//     return displaybox.innerHTML+=x;
// }
// function calculate() {
//     let result=displaybox.innerText;
//     displaybox.innerText=eval(result);
// }
// function allclear() {
//     displaybox.innerText=0;
// }
// function clearlast() {
//     let text=displaybox.innerText;
//     if (text.length===1) {
//         displaybox.innerText=0;
//     }else{
//         displaybox.innerText=text.substring(0,text.length - 1);
//     }
// }
// document.querySelector(".clear-last").addEventListener("click",clearlast);
// document.querySelector(".all-clear ").addEventListener("click",allclear);
// document.querySelector(".calc").addEventListener("click",calculate);
// let list=document.querySelectorAll(".show-display");
// list.forEach(item=> {
//     item.addEventListener("click",run);
// })