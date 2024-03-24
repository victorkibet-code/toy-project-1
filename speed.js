// Solution

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter the vehicle\'s speed: ', (userInput) => {
  const speed = parseFloat(userInput);
  
  if (!isNaN(speed)) {
    speedDetector(speed);
  } else {
    console.log("Invalid input. Please enter a valid speed.");
  }

  rl.close();
});






function speedDetector(speed)
{
    let demerit = 0
    if(speed<70){
        console.log("OK");
    }
    else{
        let difference = speed-70
        demerit = difference / 5

        if (demerit > 12){
            console.log("License Suspended")
        }
        else{
            console.log(`Points ${demerit}`)
        }
    }
}