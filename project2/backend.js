const button = document.querySelector("#calButton");
button.addEventListener('click',(event)=>{
    let height=document.querySelector("#height").value;
    let weight=document.querySelector("#weight").value;
    height=Number(height);
    weight=Number(weight);
    let result=(weight*(10000/height));
    let res=document.querySelector("#result");
    res.textContent=`${result.toFixed(2)}`;
    let ans1,ans2,ans3;
    ans1=document.querySelector("#stat1");
    ans2=document.querySelector("#stat2");
    ans3=document.querySelector("#stat3");
    if (result<18.6)
    {
        
        ans1.style.backgroundColor="green";
        ans2.style.backgroundColor="white";
        ans3.style.backgroundColor="white";
    }
    else if (result>=18.6 && result<24.9)
    {
        ans1.style.backgroundColor="white";
        ans2.style.backgroundColor="green";
        ans3.style.backgroundColor="white";
    }
    else
    {
        ans1.style.backgroundColor="white";
        ans2.style.backgroundColor="white";
        ans3.style.backgroundColor="green";
    }
})