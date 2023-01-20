// Snake, Water And Gun

generateRandom =()=>{
    let result = '';
    let characters = "GSW";
    let idx = (Math.floor(Math.random()*3))
   // checking for valid index
  //  console.log(idx)
    result += characters[idx]
    return result;
}

// main

// Entry into game
// Will accept Yes,YES,YeS,yES,yeS,YEs,yes
let exit = true;
let ask = prompt("Welcome to Snake Water Gun, Do you want to start  game ? ")
ask = String(ask)
ask = ask.toUpperCase();

// to store number of rounds and score
let score = 0;
let rounds = 0;

// Entry into game checker
if(ask=="YES")
{
    exit = true;
}
else
{
    let userQuit = confirm("Do,you want to quit ? ")
    exit = false;
}

// Once entry exit option
let escp = false;

// Game code
// If user doesn't decide to play exit will be false
// If user plays but decides to quit escp will be false
while(exit && !escp)
{
    // User input
    let usr_ip = prompt("Enter your choice, W,G or S: ")
    usr_ip = String(usr_ip)
    usr_ip = usr_ip.toUpperCase();
    
    
   // console.log(usr_ip);
   let computer_turn = alert("Computer's move! ")
   
   // Generate random from computer side
   let computer = generateRandom();
   console.log(computer);
  
  
  
  // Game logic
        if(computer==usr_ip)
        {
            let equal = alert("Draw !")
            score+=1
        }
        else
        {
            if(computer=="W")
            {
                if(usr_ip=="S")
                {
                    let win = alert("Win")
                    score+=1;
                }
                else
                {
                    let lose = alert("Loose")
                }
            }
            else if(computer=="G")
            {
                if(usr_ip=="W")
                {
                    let win = alert("Win")
                    score+=1;
                }
                else
                {
                    let lose = alert("Loose")
                }
            }
            else
            {
                if(usr_ip=="G")
                {
                    let win = alert("Win")
                    score+=1;
                }
                else
                {
                    let lose = alert("Loose")
                }
            }
        }
        
    // keeps count of ongoing rounds
    rounds+=1;
    
    // exit from game
    escp = confirm("Do you want to quit ?");
}

// Final score
let final = alert("Your score is: "+score+" in "+rounds+".")