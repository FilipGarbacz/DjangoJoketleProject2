const jokersData = [
    { name: 'Joker', cost: 2, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Greedy Joker', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'On Scored' },
    { name: 'Lusty Joker', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'On Scored' },
    { name: 'Wrathful Joker', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'On Scored' },
    { name: 'Gluttonous Joker', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'On Scored' },
    { name: 'Jolly Joker', cost: 3, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Zany Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Mad Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Crazy Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Droll Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Sly Joker', cost: 3, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Wily Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Clever Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Devious Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Crafty Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Half Joker', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Joker Stencil', cost: 8, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Four Fingers', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Mime', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '...', activate: 'On Held' },
    { name: 'Credit Card', cost: 1, rarity: 'Common', unlock_start: true, type: '+$', activate: 'N/A' },
    { name: 'Ceremonial Dagger', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Banner', cost: 5, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Mystic Summit', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Marble Joker', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Loyalty Card', cost: 5, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: '8 Ball', cost: 5, rarity: 'Common', unlock_start: true, type: '!!', activate: 'On Scored' },
    { name: 'Misprint', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Dusk', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '...', activate: 'On Scored' },
    { name: 'Raised Fist', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'On Held' },
    { name: 'Chaos the Clown', cost: 4, rarity: 'Common', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Fibonacci', cost: 8, rarity: 'Uncommon', unlock_start: true, type: '+m', activate: 'On Scored' },
    { name: 'Steel Joker', cost: 7, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Scary Face', cost: 4, rarity: 'Common', unlock_start: true, type: '+c', activate: 'On Scored' },
    { name: 'Abstract Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Delayed Gratification', cost: 4, rarity: 'Common', unlock_start: true, type: '+$', activate: 'N/A' },
    { name: 'Hack', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '...', activate: 'On Scored' },
    { name: 'Pareidolia', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Gros Michel', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Even Steven', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'On Scored' },
    { name: 'Odd Todd', cost: 4, rarity: 'Common', unlock_start: true, type: '+c', activate: 'On Scored' },
    { name: 'Scholar', cost: 4, rarity: 'Common', unlock_start: true, type: '++', activate: 'On Scored' },
    { name: 'Business Card', cost: 4, rarity: 'Common', unlock_start: true, type: '+$', activate: 'On Scored' },
    { name: 'Supernova', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Ride the Bus', cost: 6, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Mixed' },
    { name: 'Space Joker', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'On Played' },
    { name: 'Egg', cost: 4, rarity: 'Common', unlock_start: true, type: '+$', activate: 'N/A' },
    { name: 'Burglar', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Blackboard', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Runner', cost: 5, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Mixed' },
    { name: 'Ice Cream', cost: 5, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'DNA', cost: 8, rarity: 'Rare', unlock_start: true, type: '!!', activate: 'On Played' },
    { name: 'Splash', cost: 3, rarity: 'Common', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Blue Joker', cost: 5, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Sixth Sense', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Constellation', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Hiker', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '+c', activate: 'On Scored' },
    { name: 'Faceless Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+$', activate: 'On Discard' },
    { name: 'Green Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Mixed' },
    { name: 'Superposition', cost: 4, rarity: 'Common', unlock_start: true, type: '!!', activate: 'Indep.' },
    { name: 'To Do List', cost: 4, rarity: 'Common', unlock_start: true, type: '+$', activate: 'On Played' },
    { name: 'Cavendish', cost: 4, rarity: 'Common', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Card Sharp', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Red Card', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Madness', cost: 7, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Square Joker', cost: 4, rarity: 'Common', unlock_start: true, type: '+c', activate: 'Mixed' },
    { name: 'Seance', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'Indep.' },
    { name: 'Riff-Raff', cost: 6, rarity: 'Common', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Vampire', cost: 7, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Mixed' },
    { name: 'Shortcut', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Hologram', cost: 7, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Vagabond', cost: 8, rarity: 'Rare', unlock_start: true, type: '!!', activate: 'Indep.' },
    { name: 'Baron', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'On Held' },
    { name: 'Cloud 9', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '+$', activate: 'N/A' },
    { name: 'Rocket', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+$', activate: 'N/A' },
    { name: 'Obelisk', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'Mixed' },
    { name: 'Midas Mask', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'On Played' },
    { name: 'Luchador', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Photograph', cost: 5, rarity: 'Common', unlock_start: true, type: 'Xm', activate: 'On Scored' },
    { name: 'Gift Card', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+$', activate: 'N/A' },
    { name: 'Turtle Bean', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Erosion', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Reserved Parking', cost: 6, rarity: 'Common', unlock_start: true, type: '+$', activate: 'On Held' },
    { name: 'Mail-In Rebate', cost: 4, rarity: 'Common', unlock_start: true, type: '+$', activate: 'On Discard' },
    { name: 'To the Moon', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '+$', activate: 'N/A' },
    { name: 'Hallucination', cost: 4, rarity: 'Common', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Fortune Teller', cost: 6, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Juggler', cost: 4, rarity: 'Common', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Drunkard', cost: 4, rarity: 'Common', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Stone Joker', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Golden Joker', cost: 6, rarity: 'Common', unlock_start: true, type: '+$', activate: 'N/A' },
    { name: 'Lucky Cat', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Mixed' },
    { name: 'Baseball Card', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'On Other Jokers' },
    { name: 'Bull', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Diet Cola', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Trading Card', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+$', activate: 'On Discard' },
    { name: 'Flash Card', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Popcorn', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Spare Trousers', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+m', activate: 'Mixed' },
    { name: 'Ancient Joker', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'On Scored' },
    { name: 'Ramen', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Mixed' },
    { name: 'Walkie Talkie', cost: 4, rarity: 'Common', unlock_start: true, type: '++', activate: 'On Scored' },
    { name: 'Seltzer', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '...', activate: 'On Scored' },
    { name: 'Castle', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+c', activate: 'Mixed' },
    { name: 'Smiley Face', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'On Scored' },
    { name: 'Campfire', cost: 9, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Golden Ticket', cost: 5, rarity: 'Common', unlock_start: true, type: '+$', activate: 'On Scored' },
    { name: 'Mr. Bones', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Acrobat', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Sock and Buskin', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '...', activate: 'On Scored' },
    { name: 'Swashbuckler', cost: 4, rarity: 'Common', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Troubadour', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Certificate', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Smeared Joker', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Throwback', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Hanging Chad', cost: 4, rarity: 'Common', unlock_start: true, type: '...', activate: 'On Scored' },
    { name: 'Rough Gem', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '+$', activate: 'On Scored' },
    { name: 'Bloodstone', cost: 7, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'On Scored' },
    { name: 'Arrowhead', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '+c', activate: 'On Scored' },
    { name: 'Onyx Agate', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '+m', activate: 'On Scored' },
    { name: 'Glass Joker', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Showman', cost: 5, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Flower Pot', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Blueprint', cost: 10, rarity: 'Rare', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Wee Joker', cost: 8, rarity: 'Rare', unlock_start: true, type: '+c', activate: 'Mixed' },
    { name: 'Merry Andy', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Oops! All 6s', cost: 4, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'The Idol', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'On Scored' },
    { name: 'Seeing Double', cost: 6, rarity: 'Uncommon', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Matador', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '+$', activate: 'Indep.' },
    { name: 'Hit the Road', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'Mixed' },
    { name: 'The Duo', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'The Trio', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'The Family', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'The Order', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'The Tribe', cost: 8, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Stuntman', cost: 7, rarity: 'Rare', unlock_start: true, type: '+c', activate: 'Indep.' },
    { name: 'Invisible Joker', cost: 8, rarity: 'Rare', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Brainstorm', cost: 10, rarity: 'Rare', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Satellite', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '+$', activate: 'N/A' },
    { name: 'Shoot the Moon', cost: 5, rarity: 'Common', unlock_start: true, type: '+m', activate: 'On Held' },
    { name: 'Drivers License', cost: 7, rarity: 'Rare', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Cartomancer', cost: 6, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Astronomer', cost: 8, rarity: 'Uncommon', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Burnt Joker', cost: 8, rarity: 'Rare', unlock_start: true, type: '!!', activate: 'On Discard' },
    { name: 'Bootstraps', cost: 7, rarity: 'Uncommon', unlock_start: true, type: '+m', activate: 'Indep.' },
    { name: 'Canio', cost: null, rarity: 'Legendary', unlock_start: true, type: 'Xm', activate: 'Indep.' },
    { name: 'Triboulet', cost: null, rarity: 'Legendary', unlock_start: true, type: 'Xm', activate: 'On Scored' },
    { name: 'Yorick', cost: null, rarity: 'Legendary', unlock_start: true, type: 'Xm', activate: 'Mixed' },
    { name: 'Chicot', cost: null, rarity: 'Legendary', unlock_start: true, type: '!!', activate: 'N/A' },
    { name: 'Perkeo', cost: null, rarity: 'Legendary', unlock_start: true, type: '!!', activate: 'N/A' }
];
const JimboWinMessage = [
    "You Aced it!",
    "You dealt with that pretty well!",
    "Looks like you weren't bluffing!",
    "Too bad these chips are all virtual...",
    "Looks like I've taught you well!",
    "You made some heads up plays!",
    "Good thing I didn't bet against you!"
]

let randJoker = Math.floor(Math.random() * jokersData.length);
let joker = jokersData[randJoker];
let GuessInput = document.getElementById("guessInput");
let GuessAmountText = document.getElementById("guessAmount");
let ResultScreen = document.getElementById("Result");
let ResultText = document.getElementById("resultText");
let JimboMessage = document.getElementById("JimboText");
let Jimbo = document.getElementById("Jimbo");
let JokerImage = document.getElementById("ChosenImage");
let ChosenText = JimboWinMessage[Math.floor(Math.random() * JimboWinMessage.length)];
let NewGame = document.getElementById("NewGame");
let Autocomplete = document.getElementById("autocomplete");
let WrongGuess = document.getElementById("WrongGuess");
let JokerFileName = joker.name.replace(/ /g,"_");
let GuessAmount = 0;
let GuessLimit = 10;
GuessInput.addEventListener("keypress", function (event) {
 if(event.key === "Enter") {
    HandleGuess();
 }
});

console.log(joker.name);
console.log(joker.cost);
NewGame.addEventListener("click", () => {
  window.location.reload();
});
window.addEventListener("mousemove", event => {
    const rect = Jimbo.getBoundingClientRect();
    const JimboX = rect.left + rect.width / 2;
    const JimboY = rect.top + rect.height / 2;

    const clientX = event.clientX;
    const clientY = event.clientY;

    const deltaX = clientX - JimboX;
    const deltaY = clientY - JimboY;
  
    Jimbo.style.transform = `rotateY(${-deltaX / 13}deg) rotateX(${deltaY / 10 }deg)`;});

let isTyping = false; 

GuessInput.addEventListener("input", updateAutocomplete);
    
function updateAutocomplete(){
 let guessInputValue = GuessInput.value;
 console.log(guessInputValue);
 Autocomplete.innerHTML = "";
    showAutocomplete(guessInputValue);
}

function showAutocomplete(guessInputValue) {
    if (guessInputValue.length > 0) {
        let filteredJokers = jokersData.filter(filterJokers =>
            filterJokers.name.toLowerCase().includes(guessInputValue.toLowerCase())
        );

        if (filteredJokers.length > 0) {
            Autocomplete.style.display = "flex";
            filteredJokers.forEach(joker => {
                let listItem = document.createElement("li");
                listItem.textContent = joker.name;
                Autocomplete.appendChild(listItem);

                listItem.addEventListener("click", () => {
                    GuessInput.value = joker.name;
                    Autocomplete.innerHTML = "";
                    GuessInput.focus();
                    Autocomplete.style.display = "none";
                });
            });
        }
        else {
            Autocomplete.style.display = "none";
        }
    } else {
        Autocomplete.style.display = "none";
    }
}


function typewriter(text) {
    if (isTyping) return; 
    isTyping = true; 

    JimboMessage.innerHTML = ""; 
    let i = 0;
    let speed = 50;

    function type() {
        if (i < text.length) {
            JimboMessage.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            isTyping = false; 
        }
    }
    type();
}

Jimbo.addEventListener("click", () => {
    Jimbo.classList.add("Bump");
    Jimbo.addEventListener("animationend", () => Jimbo.classList.remove("Bump"));
    typewriter("Ts pmo cro icl ong n shi fr yu pmo ngl r u fr vroski 💔💔💔");
});

function HandleGuess() {

     if (GuessInput.value.toLowerCase() === joker.name.toLowerCase()) {
        ResultScreen.style.display = "block";
        ResultText.innerHTML = "<br> Correct! The Joker is: " + joker.name + "<br> Guess Amount: " + GuessAmount;
        JokerImage.src = "../static/images/Jokers/" + JokerFileName + ".png";
        console.log("Correct! The Joker is: " + JokerImage.src);
        typewriter(ChosenText)

        console.log("Correct! The Joker is: " + joker.name);
     }

     else {
        inputJoker = jokersData.find(joker => joker.name.toLowerCase() === GuessInput.value.toLowerCase());
        GuessAmount++;
         console.log("Incorrect! Try again.");
         GuessInput.classList.add("WrongAnswer");
         GuessInput.addEventListener("animationend", () => GuessInput.classList.remove("WrongAnswer"));
         let JokerInfoContainer = document.createElement("div");
         WrongGuess.appendChild(JokerInfoContainer);
        GuessAmountText.innerHTML = "Guess Amount: " + GuessAmount;

         let JokerName = document.createElement("p");
         let JokerCost = document.createElement("p");
         let JokerRarity = document.createElement("p");
         let JokerUnlock = document.createElement("p");
         let JokerType = document.createElement("p");
         let JokerActivate = document.createElement("p");

         JokerName.innerHTML = "Name: " + inputJoker.name;  
         JokerCost.innerHTML = "Cost: " + inputJoker.cost;  
         JokerRarity.innerHTML = "Rarity: " + inputJoker.rarity;
         JokerUnlock.innerHTML = "Unlocked From Start: " + inputJoker.unlock_start;
         JokerType.innerHTML = "Type: " + inputJoker.type;
         JokerActivate.innerHTML = "Activate: " + inputJoker.activate;
 

         JokerInfoContainer.appendChild(JokerName);
         JokerInfoContainer.appendChild(JokerCost);
         JokerInfoContainer.appendChild(JokerRarity);
         JokerInfoContainer.appendChild(JokerUnlock);
         JokerInfoContainer.appendChild(JokerType);
         JokerInfoContainer.appendChild(JokerActivate);
     }

}

