let div=document.querySelector(".box");

setInterval(()=>{
    let date= new Date();
    // console.log(date.toLocaleTimeString());
    div.textContent=`${date.toLocaleTimeString()}`;
},1000);