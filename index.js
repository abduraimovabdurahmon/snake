let fullscreen = false;
// const imageDiv = document.getElementById('image');
const screenDiv = document.getElementById("screen");
const buttonsDiv = document.getElementById("buttons");
const fullscreenButton = document.getElementById("fullscreen-button");

const gameBoard = document.getElementById("game-board");

if (!fullscreen) {
  gameBoard.style.display = "none";
  fullscreenButton.style.display = "block";
}
else{
    gameBoard.style.display = "block";
    fullscreenButton.style.display = "none";
}   

function onFullscreen() {
    if (fullscreen) {
        gameBoard.style.display = "none";
        fullscreenButton.style.display = "block";
    } else {
        gameBoard.style.display = "block";
        fullscreenButton.style.display = "none";
        document.documentElement.requestFullscreen();
    }
    fullscreen = !fullscreen;
}



function adjustElements() {
  const aspectRatioImage = 1200 / 2851;
  const aspectRatioWindow = window.innerWidth / window.innerHeight;
  let screen = [];
  let bgImageHeight, bgImageWidth;

  if (aspectRatioWindow > aspectRatioImage) {
    bgImageHeight = window.innerHeight;
    bgImageWidth = window.innerHeight * aspectRatioImage;
  } else {
    bgImageWidth = window.innerWidth;
    bgImageHeight = window.innerWidth / aspectRatioImage;
  }

  screen[0] = bgImageWidth * 0.66; // width
  screen[1] = bgImageHeight * 0.203; // height
  screen[2] = (window.innerWidth - screen[0]) / 2; // left
  screen[3] = (window.innerHeight - screen[1]) / 2; // top

  screenDiv.style.width = screen[0] + "px";
  screenDiv.style.height = screen[1] + "px";
  screenDiv.style.left = screen[2] + "px";
  screenDiv.style.top = screen[3] + "px";
  screenDiv.style.transform = "translateY(-97%) translateX(1%)";


    const buttons = [];
    buttons[0] = bgImageWidth * 0.9; // width
    buttons[1] = bgImageHeight * 0.45; // height
    buttons[2] = (window.innerWidth - buttons[0]) / 2; // left
    buttons[3] = (window.innerHeight - buttons[1]) / 2; // top

    buttonsDiv.style.width = buttons[0] + "px";
    buttonsDiv.style.height = buttons[1] + "px";
    buttonsDiv.style.left = buttons[2] + "px";
    buttonsDiv.style.top = buttons[3] + "px";
    buttonsDiv.style.transform = "translateY(42%) translateX(.5%)";



    // buttons box
    const buttonsBox = document.getElementById("buttons-box");
    buttonsBox.style.width = "100%";
    buttonsBox.style.height = "100%";
    // buttonsBox.style.backgroundColor = "red";
    buttonsBox.style.position = "relative";


    // all buttons

    const menu = document.getElementById("menu");
    const arrowUp = document.getElementById("arrow-up");
    const arrowDown = document.getElementById("arrow-down");
    const arrowLeft = document.getElementById("arrow-left");
    const arrowRight = document.getElementById("arrow-right");
    const back = document.getElementById("back");
    const call = document.getElementById("call");
    const exit = document.getElementById("exit");
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const num3 = document.getElementById("num3");
    const num4 = document.getElementById("num4");
    const num5 = document.getElementById("num5");
    const num6 = document.getElementById("num6");
    const num7 = document.getElementById("num7");
    const num8 = document.getElementById("num8");
    const num9 = document.getElementById("num9");
    const star = document.getElementById("star");
    const num0 = document.getElementById("num0");
    const hash = document.getElementById("hash");


    // all buttons styles
    // menu
    menu.style.width = "25%";
    menu.style.height = "12%";
    menu.style.position = "absolute";
    menu.style.left = "2.4%";
    menu.style.top = "2%";
    menu.style.border = "none";
    menu.style.borderRadius = "10px";


    // arrow-up
    arrowUp.style.width = "25%";
    arrowUp.style.height = "10%";
    arrowUp.style.position = "absolute";
    arrowUp.style.left = "38.5%";
    arrowUp.style.top = "2%";
    arrowUp.style.border = "none";
    arrowUp.style.borderRadius = "10px";

    // arrow-down
    arrowDown.style.width = "25%";
    arrowDown.style.height = "10%";
    arrowDown.style.position = "absolute";
    arrowDown.style.left = "38.5%";
    arrowDown.style.top = "23%";
    arrowDown.style.border = "none";
    arrowDown.style.borderRadius = "10px";

    // arrow-left
    arrowLeft.style.width = "10%";
    arrowLeft.style.height = "20%";
    arrowLeft.style.position = "absolute";
    arrowLeft.style.left = "33%";
    arrowLeft.style.top = "7%";
    arrowLeft.style.border = "none";
    arrowLeft.style.borderRadius = "10px";

    // arrow-right
    arrowRight.style.width = "10%";
    arrowRight.style.height = "20%";
    arrowRight.style.position = "absolute";
    arrowRight.style.left = "60%";
    arrowRight.style.top = "7%";
    arrowRight.style.border = "none";
    arrowRight.style.borderRadius = "10px";

    // back
    back.style.width = "25%";
    back.style.height = "12%";
    back.style.position = "absolute";
    back.style.left = "74%";
    back.style.top = "2%";
    back.style.border = "none";
    back.style.borderRadius = "10px";

    // call
    call.style.width = "25%";
    call.style.height = "12%";
    call.style.position = "absolute";
    call.style.left = "2.4%";
    call.style.top = "18%";
    call.style.border = "none";
    call.style.borderRadius = "10px";


    // exit
    exit.style.width = "25%";
    exit.style.height = "12%";
    exit.style.position = "absolute";
    exit.style.left = "74%";
    exit.style.top = "18%";
    exit.style.border = "none";
    exit.style.borderRadius = "10px";

    // num1
    num1.style.width = "27%";
    num1.style.height = "12%";
    num1.style.position = "absolute";
    num1.style.left = "2.7%";
    num1.style.top = "35%";
    num1.style.border = "none";
    num1.style.borderRadius = "10px";

    // num2
    num2.style.width = "27%";
    num2.style.height = "12%";
    num2.style.position = "absolute";
    num2.style.left = "37%";
    num2.style.top = "37%";
    num2.style.border = "none";
    num2.style.borderRadius = "10px";

    // num3
    num3.style.width = "27%";
    num3.style.height = "12%";
    num3.style.position = "absolute";
    num3.style.left = "71%";
    num3.style.top = "35%";
    num3.style.border = "none";
    num3.style.borderRadius = "10px";

    // num4
    num4.style.width = "27%";
    num4.style.height = "12%";
    num4.style.position = "absolute";
    num4.style.left = "2.7%";
    num4.style.top = "52%";
    num4.style.border = "none";
    num4.style.borderRadius = "10px";

    // num5
    num5.style.width = "27%";
    num5.style.height = "12%";
    num5.style.position = "absolute";
    num5.style.left = "37%";
    num5.style.top = "53%";
    num5.style.border = "none";
    num5.style.borderRadius = "10px";

    // num6
    num6.style.width = "27%";
    num6.style.height = "12%";
    num6.style.position = "absolute";
    num6.style.left = "71%";
    num6.style.top = "52%";
    num6.style.border = "none";
    num6.style.borderRadius = "10px";

    // num7
    num7.style.width = "27%";
    num7.style.height = "12%";
    num7.style.position = "absolute";
    num7.style.left = "2.7%";
    num7.style.top = "69%";
    num7.style.border = "none";
    num7.style.borderRadius = "10px";

    // num8
    num8.style.width = "27%";
    num8.style.height = "12%";
    num8.style.position = "absolute";
    num8.style.left = "37%";
    num8.style.top = "70%";
    num8.style.border = "none";
    num8.style.borderRadius = "10px";

    // num9
    num9.style.width = "27%";
    num9.style.height = "12%";
    num9.style.position = "absolute";
    num9.style.left = "71%";
    num9.style.top = "69%";
    num9.style.border = "none";
    num9.style.borderRadius = "10px";


    // star
    star.style.width = "27%";
    star.style.height = "12%";
    star.style.position = "absolute";
    star.style.left = "2.7%";
    star.style.top = "85%";
    star.style.border = "none";
    star.style.borderRadius = "10px";

    // num0
    num0.style.width = "27%";
    num0.style.height = "12%";
    num0.style.position = "absolute";
    num0.style.left = "37%";
    num0.style.top = "86%";
    num0.style.border = "none";
    num0.style.borderRadius = "10px";
    
    // hash
    hash.style.width = "27%";
    hash.style.height = "12%";
    hash.style.position = "absolute";
    hash.style.left = "71%";
    hash.style.top = "85%";
    hash.style.border = "none";
    hash.style.borderRadius = "10px";



    // click sound
    const audio = new Audio();
    audio.src = "./public/sounds/click.mp3";

    // menu click
    const allButtons = [
        menu, arrowUp, arrowDown, arrowLeft, arrowRight, back, call, exit, num1, num2, num3, num4, num5, num6, num7, num8, num9, star, num0, hash
    ];
    
    allButtons.forEach(button => {
        button.addEventListener("click", () => {
            audio.play();
        });
    });

    allButtons.forEach(button => {
        button.addEventListener("dblclick", () => {
            audio.play();
        });
    });

}

adjustElements();
window.addEventListener("resize", adjustElements);
