const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `C:/Users/Leehj/Documents/GitHub/ES6/image/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}


function genRandom(){
    const number = Math.floor(Math.random()*3);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);

}

init();