// Guessing game

// Entry message

let message = prompt("Type YES to start: ")
message = String(message);
message = message.toUpperCase();

if(message=="YES")
{
    let gen = alert("Generating random number between 1 to 10...");
    
    // Generating a number
    let num = Math.floor((Math.random()*10)+1);
    
    // User input
 
    let true_guess = true;
    let score = 100;
    while(true_guess)
    {
        let usr_ip = prompt("Enter your guess: ");
        usr_ip = Number.parseInt(usr_ip);
      if(usr_ip<1 || usr_ip>10)
      {
         let caution = alert("Guess between 1 to 10 not beyond !")
      }
      else
      {
        if(usr_ip==num)
        {
            true_guess = false;
        }
        else
        {
            let mssg  = alert("Try again !");
            score -= 10;
        }
      }
    }
    
    // score display
    if(score<0)
    {
        score= 0;
    }
    else
    {
    let final = alert("Your score is: "+score+" points");
    }
}
else
{
    let bye_message = alert("See you next time !");
}