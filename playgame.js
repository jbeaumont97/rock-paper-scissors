function game()
{
    let numberOfRoundsToPlay = 5;
    let listOfResults = [];
    let results = getResults();

    for(let i = 0; i < numberOfRoundsToPlay; i++)
    {
        let computerSelection = computerPlay();
        let playerSelection = getValidInput();

        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        listOfResults[i] = result;
    }
    
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    listOfResults.forEach(result => {
        if(result === results.WIN)
        {
            playerWins += 1;
        }
        else if(result === results.TIE)
        {
            ties += 1;
        }
        else
        {
            computerWins += 1;
        }
    });

    console.log("Player-Computer-Ties " + playerWins + "-" + computerWins + "-" + ties);


    //for debug
    prompt();

    return listOfResults;
}

function getValidInput()
{
    let selections = getSelections();

    let valid = false;
    let input = "";

    while(valid === false)
    {
        input = prompt();

        selections.forEach(selection => {
        if(selection.toUpperCase() === input.toUpperCase())
        {
            valid = true;
        }
        });
    }

    return input;
}

function computerPlay()
{
    let selections = getSelections();

    let selection = selections[Math.floor((Math.random() * selections.length))];
    
    return selection;
}

function playRound(playerSelection, computerSelection)
{

    let results = getResults();

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if(playerSelection === computerSelection)
    {
        return results.TIE;
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
    playerSelection === "SCISSORS" && computerSelection === "PAPER" ||
    playerSelection === "PAPER" && computerSelection === "ROCK")
    {
        return results.WIN;
    }
    else
    {
        return results.LOSE;
    }
}

function getSelections(){
    return ["Rock", "Paper", "Scissors"];
}
function getResults(){
    return {
        WIN: "player wins",
        LOSE: "player loses",
        TIE: "player ties"
    };
}

let myThing = game();

