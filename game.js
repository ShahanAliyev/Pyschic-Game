let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p', 'q','r','s','t','u','v','w','x','y','z'];
let wins = 0;
let loses = 0;
function startGame(){
let answer = letters[Math.floor(Math.random()*letters.length)];
let leftGuess = 0;
let soFar = 0;
let list = []
for(let i = 0; i<9; i++){
    let guess = prompt("Insert any letter: ");
    if(isNaN(guess) && guess.length === 1){
        if(guess===answer){
            alert("You won");
            wins ++;
            document.getElementById("wins").innerHTML = `Wins: ${wins}`;
            list.push(guess);
            document.getElementById("left").innerHTML =`Guesses Left:  ${9-i -1}`;
            document.getElementById("sofar").innerHTML =`Your Guesses so far: ${list} `;
            document.getElementById("loses").innerHTML = `Loses : ${loses}`; 
            i = 0;
            break;
        }else if (guess !==answer){
            if(i!==8){
                alert(`Wrong answer`);
                list.push(guess);
                document.getElementById("left").innerHTML =`Guesses Left:  ${9-i -1}`;
                document.getElementById("sofar").innerHTML =`Your Guesses so far: ${list} `;
            }else{
                alert(`Wrong answer`);
                list.push(guess);
                document.getElementById("left").innerHTML =`Guesses Left:  ${9-i -1}`;
                document.getElementById("sofar").innerHTML =`Your Guesses so far: ${list} `;
                loses ++;
                document.getElementById("loses").innerHTML = `Loses : ${loses}`; 
                document.getElementById("wins").innerHTML = `Wins: ${wins}`;
                list.push(guess);
            }
        }
    }else if(isNaN(guess)===false){
        i = 0;
        alert("Wrong input type");
        break;
    }else if(guess.length !==1){
        i = 0;
        alert("Wrong input type");
        break;
    }
}
}



