
function navMenuOpen(){
    let hiddenMenu = document.getElementById('hiddenMenu');
    let displayStyle = window.getComputedStyle(hiddenMenu).display;
    if(displayStyle == "none"){
        hiddenMenu.style.display = "block";
    } else {
        hiddenMenu.style.display = "none";
    }
}

function funTime(){
    let sliderNum = document.getElementById('slider').value;
    if(sliderNum < 10){
        document.body.style.backgroundColor = "rgb(3, 5, 48)";
    } else if (sliderNum < 20){
        document.body.style.backgroundColor = "red";
    } else if (sliderNum < 30){
        document.body.style.backgroundColor = "green";
    } else if (sliderNum < 40){
        document.body.style.backgroundColor = "orange";
    } else if (sliderNum < 50){
        document.body.style.backgroundColor = "cyan";
    }
}

function arrowToSlide(arrow){
    let slider = document.getElementById('slider');
    let sliderNum = parseInt(slider.value, 10);
    if(arrow === 0){
        if(sliderNum > 0){
            sliderNum -= 10;
            slider.value = sliderNum;
            funTime();
        }
    } else {
       if(sliderNum < 50){
        sliderNum += 10;
        slider.value = sliderNum;
        funTime();
       }
    }
}