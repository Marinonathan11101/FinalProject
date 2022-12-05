let count = 0;
let resetBtn = document.querySelector("#reset");



window.onload=function(){
    let homePageButton = document.querySelector("#main-Button");
    homePageButton.addEventListener("click", function () {
        window.location = "./game.html";
    
    });
  }


let randomValue = Math.floor(Math.random() * 49) + 0;
console.log(randomValue);

const buttons = document.querySelectorAll('.cell');

buttons.forEach(function (button, index) {


    button.addEventListener("click", function () {
    count++;
        if (randomValue === index) {
            buttons[index].style.background = "green";
            alert("You got the number!");
            alert("It took you" + " " + count + " " + "tries");
      
            if (count < 5)
            {
                alert("You got it in less than 5 tries! Congrats! Go to https://www.youtube.com/watch?v=dQw4w9WgXcQ to claim your prize!")
                
            }
            
        }

        if (index > randomValue) {
            alert("Lower");
            buttons[index].style.display = "none";
        }

        if (index < randomValue) {
            alert("Higher");
            buttons[index].style.display = "none";
        }
        
        if (randomValue < 15 && count > 13)
        {
            alert("HINT: The number is less than 15");
        }

        if (randomValue > 30 && count > 13)
        {
            alert("HINT: The number is greater than 30");
        }

        
     
    });

 
 



})

resetBtn.addEventListener("click", function () {
    window.location = "./game.html";
});








