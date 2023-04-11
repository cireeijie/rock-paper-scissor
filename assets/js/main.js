const pageOne = document.querySelector("#page-1");
const pageTwo = document.querySelector("#page-2");
const pageThree = document.querySelector("#page-3");
const toPageTwo = document.querySelector("#toPageTwo");
const toHome = document.querySelector("#toHome");
const playerName = document.querySelector("#name");
const playerDisplayName = document.querySelector("#pName");
const pageTwoValidator = document.querySelector("#emojiValidator");
const aiName = document.querySelector("#aiName");
const chatGpt = document.querySelector("#chatgpt");
const johnWeak = document.querySelector("#johnweak");
const toGame = document.querySelector("#toGame");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playerSelect = document.querySelector("#selectPreview");
const aiSelect = document.querySelector("#aiSelect");
const pReactText = document.querySelector("#pTextReact");
const aiReactText = document.querySelector("#aiTextReact");
const pReactEmoji = document.querySelector("#pReactEmoji");
const aiReactEmoji = document.querySelector("#aiReactEmoji");
const playerScore = document.querySelector("#pScore");
const aiScore = document.querySelector("#cScore");
const playerHistory = document.querySelector("#playerHistory");
const aiHistory = document.querySelector("#aiHistory");

const winReactionText = ["Yey! I won!", "Easy-Peasy!", "Give up now!"];
const loseReactionText = ["Urgh!", "Ouch!", "Huhu!"];
const drawReactionText = ["What?! A draw?", "You copycat!", "It's a Draw!"];
const previewSelectionDefault = "assets/images/waving-hand.png";
const previewSelection = [`assets/images/rock.png`, `assets/images/paper.png`, `assets/images/scissor.png`]
const winReactEmoji = [`assets/images/win-1.png`, `assets/images/win-2.png`, `assets/images/zany-face.png`];
const loseReactEmoji = [`assets/images/lose-1.png`, `assets/images/lose-2.png`, `assets/images/lose-3.png`];
const johnWeakWeapons = [`assets/images/jw-1.png`, `assets/images/jw-2.png`, `assets/images/jw-3.png`];
const johnWeakReactions = ["Excommunicado!", "You killed my dog!", "Yeah!"];
const johnWeakEmoji = [`assets/images/jw-2.png`, `assets/images/jw-1.png`, `assets/images/coin.png`]

let playerChoose = 0;
let aiChoose = 0;
let playerPoints = 0;
let aiPoints = 0;

toPageTwo.addEventListener('click', proceedToPageTwo);
chatGpt.addEventListener('click', enemyName);
johnWeak.addEventListener('click', enemyName);
playerName.addEventListener('change', newPlayerName);
toGame.addEventListener('click', proceedToGame);
rock.addEventListener('mouseover', rockHover);
paper.addEventListener('mouseover', paperHover);
scissor.addEventListener('mouseover', scissorHover);
rock.addEventListener('mouseout', prevSelect);
paper.addEventListener('mouseout', prevSelect);
scissor.addEventListener('mouseout', prevSelect);
rock.addEventListener('click', pickedRock);
paper.addEventListener('click', pickedPaper);
scissor.addEventListener('click', pickedScissor);
toHome.addEventListener('click', toHomePage);


function proceedToPageTwo() {
    pageOne.style.zIndex = '1';
    pageTwo.style.zIndex = '3';
    pageThree.style.zIndex = '2';
}

function newPlayerName() {
    playerDisplayName.innerHTML == "" ? playerDisplayName.innerHTML = "Player" : playerDisplayName.innerHTML = playerName.value;
}

function enemyName() {
    johnWeak.checked ? aiName.innerHTML = johnWeak.value : aiName.innerHTML = chatGpt.value;
}

function proceedToGame() {
    if(playerName && chatGpt.checked || johnWeak.checked) {
        pageTwo.style.zIndex = '1';
    }
    else {
        emojiValidator.innerHTML = "Please type your name and select your enemy";
        pageTwo.style.zIndex = '3';
    }
}

function aiRandom() {
    let random = Math.abs(Math.round(Math.random() * 2));
    return random;
}

function rockHover() {
    playerSelect.src = previewSelection[0];
}

function paperHover() {
    playerSelect.src = previewSelection[1];
}

function scissorHover() {
    playerSelect.src = previewSelection[2];
}

function prevSelect() {
    playerSelect.src = previewSelection[playerChoose];
}

function pickedRock() {
    playerChoose = 0;
    rock.classList.add("active");
    paper.classList.remove("active");
    scissor.classList.remove("active");
    johnWeak.checked ? johnWeakGod() : checkResult();
}

function pickedPaper() {
    playerChoose = 1;
    rock.classList.remove("active");
    paper.classList.add("active");
    scissor.classList.remove("active");
    johnWeak.checked ? johnWeakGod() : checkResult();
}

function pickedScissor() {
    playerChoose = 2;
    rock.classList.remove("active");
    paper.classList.remove("active");
    scissor.classList.add("active");
    johnWeak.checked ? johnWeakGod() : checkResult();
}

function johnWeakWon() {
    aiPoints += 1;
    pReactText.innerHTML = loseReactionText[aiRandom()];
    aiReactText.innerHTML = johnWeakReactions[aiRandom()];
    pReactEmoji.src = loseReactEmoji[aiRandom()];
    aiReactEmoji.src = johnWeakEmoji[aiRandom()];
    aiScore.innerHTML = aiPoints;
}

function winHistory() {
    const pHistory = document.createElement('div');
    pHistory.classList.add('history-container');

    const pResultIcon = document.createElement('i');
    pResultIcon.classList.add('fa-solid');
    pResultIcon.classList.add('fa-check');
    pHistory.appendChild(pResultIcon);

    const playerPicked = document.createElement('img');
    playerPicked.src = previewSelection[playerChoose];
    pHistory.appendChild(playerPicked);

    playerHistory.prepend(pHistory);

    const botHistory = document.createElement('div');
    botHistory.classList.add('history-container');

    const aiPicked = document.createElement('img');
    aiPicked.src = previewSelection[aiChoose];
    botHistory.appendChild(aiPicked);

    const aiResultIcon = document.createElement('i');
    aiResultIcon.classList.add('fa-solid');
    aiResultIcon.classList.add('fa-xmark');
    botHistory.appendChild(aiResultIcon);

    aiHistory.prepend(botHistory);
}

function loseHistory() {
    const pHistory = document.createElement('div');
    pHistory.classList.add('history-container');

    const pResultIcon = document.createElement('i');
    pResultIcon.classList.add('fa-solid');
    pResultIcon.classList.add('fa-xmark');
    pHistory.appendChild(pResultIcon);

    const playerPicked = document.createElement('img');
    playerPicked.src = previewSelection[playerChoose];
    pHistory.appendChild(playerPicked);

    playerHistory.prepend(pHistory);

    const botHistory = document.createElement('div');
    botHistory.classList.add('history-container');

    const aiPicked = document.createElement('img');
    aiPicked.src = previewSelection[aiChoose];
    botHistory.appendChild(aiPicked);

    const aiResultIcon = document.createElement('i');
    aiResultIcon.classList.add('fa-solid');
    aiResultIcon.classList.add('fa-check');
    botHistory.appendChild(aiResultIcon);

    aiHistory.prepend(botHistory);
}

function drawHistory() {
    const pHistory = document.createElement('div');
    pHistory.classList.add('history-container');

    const pResultIcon = document.createElement('i');
    pResultIcon.classList.add('fa-solid');
    pResultIcon.classList.add('fa-minus');
    pHistory.appendChild(pResultIcon);

    const playerPicked = document.createElement('img');
    playerPicked.src = previewSelection[playerChoose];
    pHistory.appendChild(playerPicked);

    playerHistory.prepend(pHistory);

    const botHistory = document.createElement('div');
    botHistory.classList.add('history-container');

    const aiPicked = document.createElement('img');
    aiPicked.src = previewSelection[aiChoose];
    botHistory.appendChild(aiPicked);

    const aiResultIcon = document.createElement('i');
    aiResultIcon.classList.add('fa-solid');
    aiResultIcon.classList.add('fa-minus');
    botHistory.appendChild(aiResultIcon);

    aiHistory.prepend(botHistory);
}

function won() {
    playerPoints += 1;
    pReactText.innerHTML = winReactionText[aiRandom()];
    aiReactText.innerHTML = loseReactionText[aiRandom()];
    pReactEmoji.src = winReactEmoji[aiRandom()];
    aiReactEmoji.src = loseReactEmoji[aiRandom()];
    playerScore.innerHTML = playerPoints; 
    winHistory();
}

function lost() {
    aiPoints += 1;
    pReactText.innerHTML = loseReactionText[aiRandom()];
    aiReactText.innerHTML = winReactionText[aiRandom()];
    pReactEmoji.src = loseReactEmoji[aiRandom()];
    aiReactEmoji.src = winReactEmoji[aiRandom()];
    aiScore.innerHTML = aiPoints;
    loseHistory();
}

function draw() {
    pReactText.innerHTML = drawReactionText[aiRandom()];
    aiReactText.innerHTML = drawReactionText[aiRandom()];
    pReactEmoji.src = winReactEmoji[2];
    aiReactEmoji.src = winReactEmoji[2];
    drawHistory();
}

function checkResult() {
    aiChoose = aiRandom();
    aiSelect.src = previewSelection[aiChoose];

    if(playerChoose == aiChoose) {
        draw();
    }
    else if(playerChoose == 2) {
        aiChoose == playerChoose - 1 ? won() : lost();
    }
    else if(playerChoose == 1) {
        playerChoose == aiChoose - 1 ? lost() : won();
    }
    else if(playerChoose == 0) {
        playerChoose == aiChoose - 1? lost() : won();
    }
    else {
        return 0;
    }
}

function johnWeakGod() {
    aiChoose = aiRandom();
    aiSelect.src = johnWeakWeapons[aiChoose];

    if(playerChoose == aiChoose) {
        lost();
        johnWeakWon();
    }
    else if(playerChoose == 2) {
        aiChoose == playerChoose - 1 ? lost() : johnWeakWon();
    }
    else if(playerChoose == 1) {
        playerChoose == aiChoose - 1 ? lost() : johnWeakWon();
    }
    else if(playerChoose == 0) {
        playerChoose == aiChoose - 1? lost() : johnWeakWon();
    }
    else {
        return 0;
    }
}

function toHomePage() {
    pageOne.style.zIndex = '3'
    playerChoose = 0;
    aiChoose = 0;
    playerPoints = 0;
    aiPoints = 0;
    aiScore.innerHTML = aiPoints;
    playerScore.innerHTML = playerPoints;
    aiSelect.src = previewSelectionDefault;
    playerSelect.src = previewSelectionDefault;
    rock.classList.remove("active");
    paper.classList.remove("active");
    scissor.classList.remove("active");
    pReactText.innerHTML = "Wait! I'm picking...";
    aiReactText.innerHTML = "I'm ready! Pick now.";
    pReactEmoji.src = 'assets/images/zany-face.png';
    aiReactEmoji.src = 'assets/images/zany-face.png';
}