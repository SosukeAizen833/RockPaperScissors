
const startBtn = document.querySelector('.start-btn');
const content = document.createElement('div')
content.classList.add('button-container')

const rock_button = document.createElement('button')
const paper_button = document.createElement('button')
const scissor_button  = document.createElement('button')

rock_button.classList.add('btn-choice')
rock_button.setAttribute('id','rock')
paper_button.classList.add('btn-choice')
paper_button.setAttribute('id','paper')
scissor_button.classList.add('btn-choice')
scissor_button.setAttribute('id','scissor')

console.log(paper_button.id)
console.log(rock_button.id)

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

let player_score = 0;
let comp_score = 0;

function get_comp_choice(){
    let choice  = Math.floor(Math.random()*3 + 1)
    let comp_choice
    if(choice === 1){
        console.log("Computer chose: rock")
        comp_choice = 'rock'
    }
    else if(choice === 2){
        console.log("Computer chose: paper")
        comp_choice = "paper"
    }
    else{
        console.log("Computer chose: scissors")
        comp_choice = "scissor"
    }
    document.getElementById('info').innerHTML =  `Computer chose ${comp_choice}`
    return comp_choice
}



function start_game(player_choice){
    
    let comp_choice = get_comp_choice();
    document.getElementById('final').innerHTML = ""
    if(comp_choice==player_choice){
        
        winner()
        document.getElementsById.innerHTML =  `Computer chose ${comp_choice}`
        return;
    }

    if(comp_choice==='rock'){

        if(player_choice==='scissor'){
            comp_score++;            
        }else{
            player_score++;
            
        }
        update_score()
        winner()
        
    }
    else if(comp_choice==='paper'){
        if(player_choice === 'scissor'){
            player_score++;
            console.log("You win this round")
            document.getElementById('pscore').innerHTML = player_score
        }else{
            comp_score++;
            console.log("You lose this round")
            document.getElementById('cscore').innerHTML = comp_score
        }
        update_score()
        winner()
        
    }
    else{
        if(player_choice==='rock'){
            player_score++;
            console.log("You win this round")
        }else{
            comp_score++;
            console.log('You lose this round')
            
        }
        update_score()
        winner()
    }
    
    return;
    
}

function winner(){
    if(player_score == 5){

        player_score = 0;
        comp_score = 0;
        update_score()
        document.getElementById('info').innerHTML = ""
        document.getElementById('final').innerHTML = "You Win"
    }
    if(comp_score==5){
        player_score = 0;
        comp_score = 0;
        update_score()
        document.getElementById('info').innerHTML = ""
        document.getElementById('final').innerHTML = "You Lose"
    }
}



startBtn.addEventListener('click',()=>{
    startBtn.remove()
    body.appendChild(content)
    const buttons = document.getElementsByClassName('btn-choice')
    let a  = Array.from(buttons)
    for(let i=0;i<a.length;i++){
        a[i].addEventListener('click',()=>{
            start_game(a[i].id)
        })
    }
})

function update_score(){
    document.getElementById('cscore').innerHTML = comp_score
    document.getElementById('pscore').innerHTML = player_score
}

