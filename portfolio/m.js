let but= document.querySelector("#btn");
let cmode="light";
let body= document.querySelector("body");


but.addEventListener("click",()=>
{
    if(cmode==="light")
    {
        cmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        cmode="light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
})