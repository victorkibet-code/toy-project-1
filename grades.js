

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function studentMarks(marks)
{
    if (marks > 100 || marks < 0){
        console.log("The Marks should be between 0 and 100")
    }
    else{
        if (marks > 79){
            console.log("Grade: A")
        }
        else if (marks >= 60 && marks <= 79){
            console.log("Grade: B")
        }
        else if (marks >= 50 && marks <= 59){
            console.log("Grade: C")
        }
        else if (marks >= 40 && marks <= 49){
            console.log("Grade: D")
        }
        else
        {console.log("Grade: E")} 
        
    }
}
rl.question('Enter your marks: ', (userInput) => {
    const marks = parseFloat(userInput);
    
    if (!isNaN(marks)) {
        studentMarks(marks);
      } else {
        console.log("Invalid input. Please enter a valid marks value.");
      }

    rl.close();
  });







        
    

       

        
  
    
         
        
   
  
        





   


  



    