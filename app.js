let userscore = 0;
let compscore = 0;
let winstreak = 0;
let totalrounds = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const winStreakPara = document.querySelector("#win-streak");
const winRatePara = document.querySelector("#win-rate");
const resetBtn = document.querySelector("#reset-btn");

const playerCard = document.querySelector("#player-card");
const compCard = document.querySelector("#comp-card");
const playerCardImg = document.querySelector("#player-card-img");
const compCardImg = document.querySelector("#comp-card-img");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const updateWinRate = () => {
    if (totalrounds === 0) {
        winRatePara.innerText = "0%";
    } else {
        const rate = Math.round((userscore / totalrounds) * 100);
        winRatePara.innerText = `${rate}%`;
    }
};

const drawGame = (userChoice, compChoice) => {
    winstreak = 0; // reset streak on draw
    winStreakPara.innerText = winstreak;
    
    msg.innerText = `Draw! Both chose ${userChoice.toUpperCase()}`;
    msg.className = "draw";
    
    playerCard.className = "fighter-card draw-glow";
    compCard.className = "fighter-card draw-glow";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userscore++;
        winstreak++;
        userScorePara.innerText = userscore;
        winStreakPara.innerText = winstreak;
        
        msg.innerText = `Victory! Your ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()} 🎉`;
        msg.className = "win";
        
        playerCard.className = "fighter-card winner-glow-user";
        compCard.className = "fighter-card";
    } else {
        compscore++;
        winstreak = 0; // reset streak
        compScorePara.innerText = compscore;
        winStreakPara.innerText = winstreak;
        
        msg.innerText = `Defeat! CPU's ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()} 😢`;
        msg.className = "lose";
        
        playerCard.className = "fighter-card";
        compCard.className = "fighter-card winner-glow-comp";
    }
};

const playGame = (userChoice) => {
    totalrounds++;
    
    // Disable choice clicking during battle animation
    choices.forEach(c => c.style.pointerEvents = "none");
    
    // Clear old glows and set to shaking position (fist/rock)
    playerCard.className = "fighter-card shake-left";
    compCard.className = "fighter-card shake-right";
    
    playerCardImg.src = "./images/rock.png";
    compCardImg.src = "./images/rock.png";
    
    msg.innerText = "Shaking weapons...";
    msg.className = "";
    
    setTimeout(() => {
        // Stop shake animation
        playerCard.classList.remove("shake-left");
        compCard.classList.remove("shake-right");
        
        // Re-enable clicks
        choices.forEach(c => c.style.pointerEvents = "auto");
        
        const compChoice = genComputerChoice();
        
        // Update images to actual choices
        playerCardImg.src = `./images/${userChoice}.png`;
        compCardImg.src = `./images/${compChoice}.png`;
        playerCardImg.alt = userChoice;
        compCardImg.alt = compChoice;
        
        if (compChoice === userChoice) {
            drawGame(userChoice, compChoice);
        } else {
            let userwin = false;
            if (userChoice === "rock") {
                userwin = compChoice === "scissors";
            } else if (userChoice === "paper") {
                userwin = compChoice === "rock";
            } else if (userChoice === "scissors") {
                userwin = compChoice === "paper";
            }
            showWinner(userwin, userChoice, compChoice);
        }
        updateWinRate();
    }, 600); // 600ms battle shake delay
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    winstreak = 0;
    totalrounds = 0;
    
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    winStreakPara.innerText = "0";
    winRatePara.innerText = "0%";
    
    playerCard.className = "fighter-card";
    compCard.className = "fighter-card";
    playerCardImg.src = "./images/rock.png";
    compCardImg.src = "./images/rock.png";
    playerCardImg.alt = "Rock";
    compCardImg.alt = "Rock";
    
    msg.innerText = "Select your weapon below to enter the battle";
    msg.className = "";
});

