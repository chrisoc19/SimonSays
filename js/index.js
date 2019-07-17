let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let start = false;
let noise = true;
let on = false;
let win;

let oneNoise = new Audio('sounds/drop.mp3');
let twoNoise = new Audio('sounds/pop.mp3');
let threeNoise = new Audio('sounds/seagull.ogg');
let fourNoise = new Audio('sounds/radar.wav');
let startNoise = new Audio('sounds/startSound.ogg');
let offNoise = new Audio('sounds/off.ogg');
let winNoise = new Audio('sounds/winSound.wav');
let strictNoise = new Audio('sounds/b1.wav');


const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

//--------------------------------------------------------------- strictButton
strictButton.addEventListener('change', (event) => {
    if (onButton.checked == false) {
        document.getElementById("#strict").disabled = true;

    }
    if (strictButton.checked == true) {
        strict = true;
        strictSound();
        clearInterval(intervalId);
        turnCounter.innerHTML = "-";
        flashColor();
        setTimeout(() => {
            clearColor();
        }, 800);

    }
    else {
        strict = false;
        strictSound();
        turnCounter.innerHTML = "-";
        flashColor();
        setTimeout(() => {
            clearColor();
        }, 800);

    }
});

function strictSound() {
    if (noise) {
        strictNoise.play();
    }
    noise = true;

}
//--------------------------------------------------------------- onButton
onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = "-";
        startSound();
        flashColor();
        setTimeout(() => {
            clearColor();
        }, 800);
    }
    else {
        on = false;
        turnCounter.innerHTML = "Bye";
        setTimeout(() => {
            turnCounter.innerHTML = "";
        }, 1000);
        clearInterval(intervalId);
        off();
        flashColor();
        setTimeout(() => {
            clearColor();
        }, 800);
        setTimeout(() => {
            document.location.reload(true);
        }, 200);
        
    }
    
});

function startSound() {
    if (noise) {
        startNoise.play();
    }
    noise = true;

}

function off() {
    if (noise) {
        offNoise.play();
    }
    noise = true;

}
//---------------------------------------------------------------startButton
startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
        start = true;
    }
    if (onButton.checked == false) {
        startButton = 'unclick';
        start = false;
        
    }
});
//---------------------------------------------------------------play()
function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
}
//---------------------------------------------------------------GameTurn  ()
function gameTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200);
    }
}
//--------------------------------------------------------------- Function 1 - 4
function one() {
    if (noise) {
        oneNoise.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
}

function two() {
    if (noise) {
        twoNoise.play();
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";
}

function three() {
    if (noise) {
        threeNoise.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";
}

function four() {
    if (noise) {
        fourNoise.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";
}
//---------------------------------------------------------------clear color
function clearColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
}
//---------------------------------------------------------------  flash Colors
function flashColor() {
    topLeft.style.backgroundColor = "lightgreen";
    topRight.style.backgroundColor = "tomato";
    bottomLeft.style.backgroundColor = "yellow";
    bottomRight.style.backgroundColor = "lightskyblue";
}
//---------------------------------------------------------------Click Events
topLeft.addEventListener('click', (event) => {
    if (on && start) {
        playerOrder.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }

});

topRight.addEventListener('click', (event) => {
    if (on && start) {
        playerOrder.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bottomLeft.addEventListener('click', (event) => {
    if (on && start) {
        playerOrder.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }

});

bottomRight.addEventListener('click', (event) => {
    if (on && start) {
        playerOrder.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
//---------------------------------------------------------------Check()
function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        good = false;

    if (playerOrder.length == 3 && good) {
        winGame();
    }
    if (good == false) {
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();

            if (strict) {
                play();
            }
            else {
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = true;
                intervalId = setInterval(gameTurn, 800);
            }
        }, 800);
        noise = false;
    }
    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }
}
//---------------------------------------------------------------winGame
function winGame() {
    flashColor();
    winSound();
    turnCounter.innerHTML = "win!";
    on = false;
    win = true;
}

function winSound() {
    if (noise) {
        winNoise.play();
    }
    noise = true;

}
