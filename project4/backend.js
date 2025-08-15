// console.log("Hellow");

let button=document.querySelector(".button");
let guessed=document.querySelector(".guessed");
let body=document.querySelector(".body");
let val=document.querySelector(".val");
let answer=Math.round(((Math.random()*100)+1));
while (answer>100) {
    answer=Math.round(((Math.random()*100)+1));
    if (answer<=100) break;
}

button.addEventListener('click',(event)=>{
    let num=document.querySelector("#number").value;
    if (Number(num)==answer) 
        {
            alert("Congratulations you beat the game!!. Reload the page to start a new game.")
            body.style.backgroundColor="green";
        }
    else
        {
            let attempt=val.textContent;
            if (Number(attempt)<=0) alert("Out of Attempts. Reload the page to start the new game!!!");
            else
            {
                attempt=Number(attempt)-1;
                console.log(attempt);
                val.textContent=`${attempt}`;
                body.style.backgroundColor="red";
                let values=guessed.textContent;
                values=values+num;
                guessed.textContent=`${values} `;
            }

        }
    
})
