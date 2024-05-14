window.addEventListener('load', () => {
    const gameBoard = document.getElementById('game-board');
    // const imageDiv = document.getElementById('image');
    const screenDiv = document.getElementById('screen');
    const buttonsDiv = document.getElementById('buttons');

    
    function adjustElements() {
        const aspectRatioImage = 1200 / 2851; 
        const aspectRatioWindow = window.innerWidth / window.innerHeight;
        let screen = [];
        let bgImageHeight, bgImageWidth;


        if (aspectRatioWindow > aspectRatioImage) {
            bgImageHeight = window.innerHeight;
            bgImageWidth = window.innerHeight * aspectRatioImage;
        }
        else {
            bgImageWidth = window.innerWidth;
            bgImageHeight = window.innerWidth / aspectRatioImage;
        }

        
        screen[0] = bgImageWidth*0.66; // width
        screen[1] = bgImageHeight*0.203; // height
        screen[2] = (window.innerWidth - screen[0])/2; // left
        screen[3] = (window.innerHeight - screen[1])/2; // top



        screenDiv.style.width = screen[0] + 'px';
        screenDiv.style.height = screen[1] + 'px';
        screenDiv.style.left = screen[2] + 'px';
        screenDiv.style.top = screen[3] + 'px';
        screenDiv.style.transform = "translateY(-97%) translateX(1%)";


        // screenDiv.style.backgroundImage = "url('./public/images/bg.jpeg')";
        // screenDiv.style.backgroundSize = "cover";

    }

    adjustElements();

    window.addEventListener('resize', adjustElements);
});
