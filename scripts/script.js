const startBtn = document.querySelector('.start-btn');
const content = document.createElement('div')
content.classList.add('button-container')

const rock_button = document.createElement('button')
const paper_button = document.createElement('button')
const scissor_button  = document.createElement('button')

rock_button.classList.add('btn-choice')
rock_button.id = "rock"
paper_button.classList.add('btn-choice')
paper_button.id = "paper"
scissor_button.classList.add('btn-choice')
scissor_button.id = "scissors"

console.log(paper_button.id)

const rock_img = document.createElement('img')
rock_img.src="../images/8-2-rock-png-picture-thumb.png"

const paper_img = document.createElement('img')
paper_img.src = "../images/SeekPng.com_paper-background-png_2740377.png"

const scissors_img = document.createElement('img')
scissors_img.src = "../images/SeekPng.com_scissor-clip-art-png_3618580.png"

rock_button.appendChild(rock_img)
paper_button.appendChild(paper_img)
scissor_button.appendChild(scissors_img)

content.appendChild(rock_button)
content.appendChild(paper_button)
content.appendChild(scissor_button)

const body = document.body
// function get_comp_choice(){
//     let choice  = Math.floor(Math.random()*3 + 1)
//     if(choice === 1){
//         console.log("Computer chose: rock")
//         return "rock"
//     }
//     if(choice === 2){
//         console.log("Computer chose: paper")
//         return "paper"
//     }
//     if(choice === 3){
//         console.log("Computer chose: scissors")
//         return "scissors"
//     }
// }



// function start_game(rounds){
//     let player_score  = 0;
//     let comp_score = 0;
//     for(let i=0;i<rounds;i++){
         
//         let player_choice = get_player_choice();
//         let comp_choice = get_comp_choice();

//         if(comp_choice==player_choice){
//             console.log("match tied")
//             display_score(player_score,comp_score)
//             continue;
//         }

//         if(comp_choice==='rock'){
//             if(player_choice==='scissors'){
//                 comp_score++;
//                 console.log("You lose this round")
//             }else{
//                 player_score++;
//                 console.log("You win this round")
//             }
            
//         }
//         else if(comp_choice==='paper'){
//             if(player_choice === 'scissors'){
//                 player_score++;
//                 console.log("You win this round")
//             }else{
//                 comp_score++;
//                 console.log("You lose this round")
//             }
            
//         }
//         else{
//             if(player_choice==='rock'){
//                 player_score++;
//                 console.log("You win this round")
//             }else{
//                 comp_score++;
//                 console.log('You lose this round')
//             }
//         }

//         display_score(player_score,comp_score)
//     }

//     winner(player_score,comp_score)
// }


// function winner(player_score,comp_score){
//     if(comp_score>player_score){
//         alert("You lose")
//     }
//     else if(comp_score < player_score){
//         alert("You win")
//     }
//     else{
//         alert("Drawn")
//     }
// }

// function display_score(player_score,comp_score){
//     console.log(`Player Score: ${player_score}`)
//     console.log(`Computer Score: ${comp_score}`)    
// }


startBtn.addEventListener('click',()=>{
    startBtn.remove()
    body.appendChild(content)
})

rock_button.addEventListener('click',()=>{
    start_game(rock_button.id)
})