function moveBoy(e){

    let boy = document.getElementById("boy");
    let circle = document.getElementById("circle");

    let cs = window.getComputedStyle(circle);

    let left = parseInt(cs.marginLeft);
    let top = parseInt(cs.marginTop);

    switch(e.keyCode){

        case 37:  // если нажата клавиша влево
            if(left > 21){
                circle.style.marginLeft = left - 70 + "px";
                boy.src = './images/boy-left.png';
            }
            break;
        case 38:   // если нажата клавиша вверх
            if(top > 35){
                circle.style.marginTop = top - 70 + "px";
                boy.src = './images/boy-back.png';
            }
            break;
        case 39:   // если нажата клавиша вправо
            if( left < 380){
                circle.style.marginLeft = left + 70 + "px";
                boy.src = './images/boy-right.png';
            }
            break;
        case 40:   // если нажата клавиша вниз
            if(top < 380){
                circle.style.marginTop = top + 70 + "px";
                boy.src = './images/boy-front.png';
            }
            break;
    }
}

addEventListener("keydown", moveBoy);
