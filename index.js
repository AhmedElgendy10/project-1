const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover",()=>{
    console.log(event.pagey-btnE1.offsetleft);
});