var score = 0;
var opp_score = 0;
var PlayBtn = document.getElementById("play-btn");
var hEl = document.getElementById("h-el");
var oppEl = document.getElementById("opp");
var drawEl = document.getElementById("draw");
var div = document.getElementById("btn");
var startBtn = document.getElementById("start-btn");

function choose_one(choice) {

    div.style.display = "block";
    hEl.style.display = "block";
    oppEl.style.display = "block";
    startBtn.style.display = "none";

    let opp_choice;
    const random_num = Math.floor(Math.random() * 3) + 1;

    if (random_num === 1) {
        opp_choice = 'rock';
    } else if (random_num === 2) {
        opp_choice = 'paper';
    } else {
        opp_choice = 'scissor';
    }


    const oppButton = document.getElementById(opp_choice);
    oppButton.classList.add('highlighted');


    setTimeout(() => {
        oppButton.classList.remove('highlighted');
    }, 500);

    if (choice === 'rocks' && random_num === 3 || choice === 'scissors' && random_num === 2 || choice === 'papers' && random_num === 1) {
        score++;
        hEl.textContent = "Your Score : " + score;
        drawEl.style.display = "none";

        hEl.style.display = "block";
        oppEl.style.display = "block";

    }

    if (choice === 'rocks' && random_num === 2 || choice === 'scissors' && random_num === 1 || choice === 'papers' && random_num === 3) {
        opp_score++;
        oppEl.textContent = "Opponent Score : " + opp_score;
        drawEl.style.display = "none";
        hEl.style.display = "block";
        oppEl.style.display = "block";
    }


    if (choice === 'rocks' && random_num === 1 || choice === 'scissors' && random_num === 3 || choice === 'papers' && random_num === 2) {
        drawEl.textContent = "uh oh!..It's draw😓";
        drawEl.style.display = "block";
        hEl.style.display = "block";
        oppEl.style.display = "block";
    }

    if (score === 10) {
        drawEl.textContent = "Congrats🥳You Won!"
        drawEl.style.display = "block";
        hEl.style.display = "none";
        oppEl.style.display = "none";
        PlayBtn.style.display = "block";
        div.style.display = "none";

    }

    else if (opp_score === 10) {
        drawEl.textContent = "Sorry😢Opponent Won!"
        drawEl.style.display = "block";
        hEl.style.display = "none";
        oppEl.style.display = "none";
        PlayBtn.style.display = "block";
        div.style.display = "none";

    }
}

function restart() {
    score = 0;
    opp_score = 0;

    random_num = Math.floor(Math.random() * 3) + 1;

    hEl.textContent = "Your Score : " + score;
    drawEl.style.display = "none";

    hEl.style.display = "block";
    oppEl.style.display = "block";

    oppEl.textContent = "Opponent Score : " + opp_score;
    drawEl.style.display = "none";

    PlayBtn.style.display = "none";
    div.style.display = "block";
}


function start_game() {
    startBtn.style.display = "block";
    choose_one();
}