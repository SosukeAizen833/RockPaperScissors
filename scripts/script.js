function get_comp_choice(){
    let choice  = Math.floor(Math.random()*3 +1)
    if(choice === 1){
        console.log("Computer chose: rock")
        return "rock"
    }
    if(choice === 2){
        console.log("Computer chose: paper")
        return "paper"
    }
    if(choice === 3){
        console.log("Computer chose: scissors")
        return "scissors"
    }
}

function get_player_choice(){
    let player_choice = prompt("Enter your choice")
    console.log(`You chose: ${player_choice}`)
    return player_choice.toLowerCase()
}

function start_game(num_games){
    let player_score  = 0;
    let comp_score = 0;
    for(let i=0;i<num_games;i++){
         
        let player_choice = get_player_choice();
        let comp_choice = get_comp_choice();

        if(comp_choice==player_choice){
            console.log("match tied")
            continue;
        }

        if(comp_choice=='rock'){
            if(player_choice=='scissors'){
                comp_score++;
                console.log("You lose this round")
            }else{
                player_score++;
                console.log("You win this round")
            }
            
        }
        else if(comp_choice=='paper'){
            if(player_choice === 'scissors'){
                player_score++;
                console.log("You win this round")
            }else{
                comp_score++;
                console.log("You lose this round")
            }
            
        }
        else{
            if(player_choice==='rock'){
                player_score++;
                console.log("You win this round")
            }else{
                comp_score++;
                console.log('You lose this round')
            }
        }

        console.log(`Computer score: ${comp_score}`)
        console.log(`Player score: ${player_score}`)
    }

    if(comp_score>player_score){
        console.log("You lose")
    }
    else if(comp_score < player_score){
        console.log("you won")
    }
    else{
        console.log("Drawn")
    }
}

start_game(5);