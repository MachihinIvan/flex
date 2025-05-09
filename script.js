document.querySelector(".foodForCat").addEventListener("click", function(){
    const foodContainer = document.querySelector(".foodContainer");
    foodContainer.classList.toggle("animate")
    setTimeout(function(){
        
        foodContainer.style.transform = "trnaslateY(0)";
    },1000)
})