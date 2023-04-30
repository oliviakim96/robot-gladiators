var playerName = window.prompt ("what is your robot's name?");
var playerHealth =100;
var playerAttack=10;
var playerMoney =10;


var enemyNames=["Roborto","Amy Android", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack=12;




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
        playerName+"attacked"+enemyNames+"."+enemyNames+ "now has"+enemyHealth+ "health remaining."
    );
    //Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the ` palyerHealth` variable. 
    playerHealth = playerHealth-enemyAttack;
    //Log a resulting message to the console so we know that it worked. 
        console.log(
            enemyNames+"attacked"+playerName+"."+playerName+"now has"+playerHealth
+"health remaining."
        );
    // check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyNames+"has died!");
    }
    else {
        window.alert(enemyNames +"still has"+enemyHealth+"health left.");
    }
};

fight();


//check to see if the value of the playerHealth variable is greater than 0
if(playerHealth>0){
    console.log("Your player is still alive");
}

//Games states
//"Win"- Player robot has defeated all enemy-robots+fight all enemy-robots +defeat each enemy-robot. 
//"Lose"- Player robot's health is zero or less.

for (var i=0; i<enemyNames.length;i++){
    fight(enemyNames[i]);
}