var ele = document.body.querySelector(".loop") ;
var user = document.body.querySelector(".user");
var dragonhealth = document.body.querySelector(".dragonhealth");

var condition = true;

while(condition) {
   var hit = Number(prompt("How many hits will you attempt on the dragon?"));
   if (hit < 5) {
      hit = 1;
   }
   var rhit = Math.floor(Math.random() * hit) + 1;
   var dragon = Math.floor(Math.random() * 2) + 1;

   var rhit2 = rhit + rhit;
   var rhit3 = rhit2 + rhit;
   var rhit4 = rhit3 +rhit;
   var rhit5 = rhit4 +rhit;

   var dragon2 = dragon + dragon;
   var dragon3 = dragon2 + dragon;
   var dragon4 = dragon3 + dragon;
   var dragon5 = dragon4 + dragon;

   if(rhit=10){
      condition=false;
       user.innerHTML =rhit;
       dragonhealth.innerHTML = dragon;
       ele.innerHTML = "User has won!";
   }if(dragon=5){
      condition=false;
       user.innerHTML = rhit;
       dragonhealth.innerHTML = dragon;
       ele.innerHTML = "User has lost!";
   }if(rhit2=10){
   condition=false;
    user.innerHTML = rhit2;
     dragonhealth.innerHTML = dragon2;
     ele.innerHTML = "User has won!";
  } if(dragon2=5){
   condition=false;
    user.innerHTML = rhit2;
    dragonhealth.innerHTML = dragon2;
    ele.innerHTML = "User has lost!";
  }if(rhit3=10) {
     condition = false;
      user.innerHTML = rhit3;
      dragonhealth.innerHTML = dragon3;
      ele.innerHTML = "User has won!";
  }if(dragon3=5) {
     condition = false;
      user.innerHTML = rhit3;
      dragonhealth.innerHTML = dragon3;
      ele.innerHTML = "User has lost!";
  }if(rhit4=10) {
      condition = false;
       user.innerHTML = rhit4;
       dragonhealth.innerHTM = dragon4;
       ele.innerHTML = "User has won!";
  }if(dragon4=5){
  condition = false;
   user.innerHTML = rhit4;
   dragonhealth.innerHTML = dragon4;
   ele.innerHTML = "User has lost!";
  }if(rhit5=10){
      condition = false;
       user.innerHTML = rhit5;
       dragonhealth.innerHTM = dragon5;
       ele.innerHTML = "User has won!";
  }if(dragon5=5){
      condition = false;
      user.innerHTML = rhit5;
      dragonhealth.innerHTML = dragon5;
      ele.innerHTML = "User has lost!";
   }}





  // for(var i=0; i<5; i++ ){
  //    userdamage = 0 + rhit;
  //    dragondamage = 0 + dragon;
   //}
   //if(userdamage>10) {
  //    condition = false;
  //    user.innerHTML = userdamage;
  //    dragonhealth.innerHTML = dragondamage;
  //    ele.innerHTML = "User has won!";
  // }
  // else if(dragondamage>5){
  //    condition = false;
  //    user.innerHTML = userdamage;
  //    dragonhealth.innerHTML = dragondamage;
  //    ele.innerHTML = "User has lost!";

 //  }