var playerName = window.prompt ("what is your robot's name?");
var playerHealth =100;
var playerAttack=10;

//You can also log multiple values at once like this
console.log (playerName, playerAttack, playerHealth);

var enemyName="Roborto";
var enemyHealth= 50;
var enemyAttack=12;

var playerMoney=10;

//ask the player to confirm that they want to quit
//if they answer `yes`, subtract 2 from the playerMoney variable and creat an alert that lets the player know they're leaving the game. 
//if they say `no`, execute the fight function to start the fight over again. This will give them the choice to fight or skip , so they can choose `fight` and keep playing. 


var promptFight=window.prompt("would you like to fight or skip this battle?Enter `fight` or `skip` to choose");


//Function expression: this is when create a function by assigning it to a variable. 
var fight=function(){
    window.alert("welcome to Robot Gladiators!");

    //subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
   enemyHealth = enemyHealth-playerAttack;
    //Log a resulting message to the console so we know that it worked. 
    console.log(
        playerName+"attacked"+enemyName+"."+enemyName+ "now has"+enemyHealth+ "health remaining."
    );
    //Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the ` palyerHealth` variable. 
    playerHealth = playerHealth-enemyAttack;
    //Log a resulting message to the console so we know that it worked. 
        console.log(
            enemyName+"attacked"+playerName+"."+playerName+"now has"+playerHealth
+"health remaining."
        );
    // check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName+"has died!");
    }
    else {
        window.alert(enemyName +"still has"+enemyHealth+"health left.");
    }
};

fight();


//check to see if the value of the playerHealth variable is greater than 0
if(playerHealth>0){
    console.log("Your player is still alive");
}