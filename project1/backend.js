// alert("Hello World!")
const body=document.querySelector("#default");
const buttons=document.querySelectorAll(".button")
buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        body.style.backgroundColor=event.target.id;
    })
})