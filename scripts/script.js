document.querySelector(".foodForCat").addEventListener("click", function(){
    const foodContainer = document.querySelector(".foodContainer");
    foodContainer.classList.toggle("animate")
    setTimeout(function(){
        foodContainer.classList.toggle("backAnimate")
    },1000)
    setTimeout(function(){
        foodContainer.classList.toggle("foodContainer")
    },1001)
})




