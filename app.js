var user=document.body.querySelector(".user");
var dragon=document.body.querySelector(".dragon");
var userwinlose=document.body.querySelector(".userwinlose");

var condition = true
var userdamage = 0
var dragondamage = 0

while(condition) {
    var hit = Number(prompt("How many hits would you like to attempt on the dragon?"));
    var randomnum = Math.ceil(Math.random() * hit) ;
    var dragonnum = Math.floor(Math.random() * 2) + 1;

    if(randomnum>5){
        randomnum= 1;
    }
    dragondamage = randomnum +dragondamage;
    userdamage = dragonnum + userdamage;

    if(dragondamage>=10){
        condition = false;
        user.innerHTML= "User Damage: " + userdamage;
        dragon.innerHTML="Dragon Damage: " + dragondamage;
        userwinlose.innerHTML= "User Wins!";
    }
    else if(userdamage>=5){
        condition= false;
        user.innerHTML="User Damage: " + userdamage;
        dragon.innerHTML= "Dragon Damage: " +dragondamage;
        userwinlose.innerHTML= "User Loses!";
    }
}