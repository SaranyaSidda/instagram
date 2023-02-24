
let loveIcon = document.querySelectorAll(".icon-heart")
let saveIcon = document.querySelectorAll(".icon-save")

for(let icon of loveIcon)
{
    icon.addEventListener("click", ()=>{
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid")
        icon.classList.toggle("icon-styles")
    })
}

for(let icon of saveIcon)
{
    icon.addEventListener("click", ()=>{
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid")
        icon.classList.toggle("icon-styles-book")
    })
}
