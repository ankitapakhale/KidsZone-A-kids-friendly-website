/*jshint esversion: 6 */


/*var n1 = Math.floor(Math.random()*10+1);
var n2 = Math.floor(Math.random()*10+1);

document.getElementById("v1").value = n1;
document.getElementById("v2").value = n2;

ans=n1+n2;

const jsGame = () => {

  var user = document.getElementById("answer");


  if(user == ans)
  {
    alert("well done! Your answer is correct");
  }
  else{
    alert("Correct ans is " + ans + " . Try Again . ");
  }
}*/

correct=0;
wrong=0;

function random(maxValue) {
day= new Date();
hour= day.getHours();
min=day.getMinutes();
sec=day.getSeconds();
mili=day.getTime();
return(((hour*3600)+(min*60)+(sec)+mili) % maxValue);
}
function ranom(maxValue) {
day= new Date();
mil=day.getTime();
return((mil) % maxValue);
}

function add() {
if(document.quizform.arithmetic[0].checked)
maxValue=10;
else {
if(document.quizform.arithmetic[1].checked)
maxValue=30;
else {
maxValue=60;
   }
}
numA=random(maxValue);
numB=ranom(maxValue);
numC=numA + numB;
Answer=window.prompt(  numA + "+"  + numB +  " = ", "");
ans();
}
function subtract() {
if(document.quizform.arithmetic[0].checked)
maxValue=10;
else
{if(document.quizform.arithmetic[1].checked)
maxValue=30;
else {
maxValue=60;
   }
}
numA=random(maxValue);
numB=ranom(maxValue);
numC=numA - numB;
Answer=window.prompt(  numA + "-"  + numB+  " = ", 0);
ans();
}
function divide() {
if(document.quizform.arithmetic[0].checked)
maxValue=10;
else {
if(document.quizform.arithmetic[1].checked)
maxValue=30;
else {
maxValue=60;
   }
}
numA=random(maxValue)+1;
numB=ranom(maxValue)+1;
numC=numA / numB;
numC=Math.round(numC);
window.alert("Please round your answer off:\n"+".5 or higher rounds one number up\n"+".4 or lower rounds one number down");
Answer=window.prompt(  numA + "/"  + numB +  " = ", 0);
ans();
}
function multiply() {
if(document.quizform.arithmetic[0].checked)
maxValue=10;
else {
if(document.quizform.arithmetic[1].checked)
maxValue=30;
else {
maxValue=60;
   }
}
numA=random(maxValue);
numB=ranom(maxValue);
numC=numA * numB;
Answer=window.prompt(  numA + "*"  + numB +  " = ", 0);
ans();
}
function check() {
if ((correct+wrong) != 0) {
score = "" + ((correct / (correct + wrong)) * 100);
score = score.substring(0,4) + "%";
alert("YOUR SCORE:  " + score + "\n"+ correct + " correct\n"+ wrong + " incorrect");
}
else alert("You have not completed any exercises yet.");
}
function ans() {
if (Answer == numC) {
correct++;
msg = "Congratulations, your answer is correct.";
}
else {
wrong++;
msg = "Oops!  " + Answer + " is incorrect.\n\n"+ "The correct answer was " +numC + ".";
   }
score = "" + ((correct / (correct + wrong)) * 100);
score = score.substring(0,4) + "%";
alert(msg + "\n\nYOUR SCORE:  " + score + "\n"+ correct + " correct\n"+ wrong + " incorrect");
}
//  End -->
