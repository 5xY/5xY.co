var getStarted = document.getElementById('get-started');

var beforeWeBegin = document.getElementById('before-we-begin');
beforeWeBegin.style.display="none";

var whyOne = document.getElementById('why-one');
whyOne.style.display="none";

var whyTwo = document.getElementById('why-two');
whyTwo.style.display="none";

var whyThree = document.getElementById('why-three');
whyThree.style.display="none";

var whyFour = document.getElementById('why-four');
whyFour.style.display="none";

var whyFive = document.getElementById('why-five');
whyFive.style.display="none";

var congratsCompleted = document.getElementById('congratulations-process-completed');
congratsCompleted.style.display="none";

var progressComplete = document.getElementById('progress-complete');
var progressRemain = document.getElementById('progress-remain');
setProgress('0','100');

function setProgress(complete, remain){
  progressComplete.style.width= complete + '%';
  progressRemain.style.width = remain + '%';
}

function theClick(displayBlock, progressComplete, styleOpacity, styleCursor){
  displayBlock.style.display="block";
  setProgress(progressComplete, 100-progressComplete);
  styleOpacity.style.opacity="0.2";
  // styleCursor.style.disabled=true;
  styleCursor.style.cursor="default";
}

var getStartedBtn = getStarted.getElementsByClassName('btn');
getStartedBtn[0].addEventListener("click", function() {
  if ( getStarted.style.opacity != "0.2" ){
    progressComplete.className = progressComplete.className + ' active';
    progressRemain.className = progressRemain.className  + ' active';
    theClick(beforeWeBegin, 0, getStarted, getStartedBtn[0]);
  } else {
    return false;
  }
},false);

var beforeWeBeginBtn = beforeWeBegin.getElementsByClassName('btn');
beforeWeBeginBtn[0].addEventListener("click", function() {
   if ( beforeWeBegin.style.opacity != "0.2"){
    theClick(whyOne, 17, beforeWeBegin, beforeWeBeginBtn[0]);
   } else {
     return false;
   }
},false);

var whyOneBtn = whyOne.getElementsByClassName('btn');
whyOneBtn[0].addEventListener("click", function() {
   if ( whyOne.style.opacity != "0.2"){
    theClick(whyTwo, 33, whyOne, whyOneBtn[0]);
   } else {
     return false;
   }
},false);

var whyTwoBtn = whyTwo.getElementsByClassName('btn');
whyTwoBtn[0].addEventListener("click", function() {
   if ( whyTwo.style.opacity != "0.2"){
    theClick(whyThree, 50, whyTwo, whyTwoBtn[0]);
   } else {
     return false;
   }
},false);

var whyThreeBtn = whyThree.getElementsByClassName('btn');
whyThreeBtn[0].addEventListener("click", function() {
   if ( whyThree.style.opacity != "0.2"){
    theClick(whyFour, 67, whyThree, whyThreeBtn[0]);
   } else {
     return false;
   } 
},false);

var whyFourBtn = whyFour.getElementsByClassName('btn');
whyFourBtn[0].addEventListener("click", function() {
   if ( whyFour.style.opacity != "0.2"){
    theClick(whyFive, 83, whyFour, whyFourBtn[0]);
   } else {
     return false;
   }
},false);

var whyFiveBtn = whyFive.getElementsByClassName('btn');
whyFiveBtn[0].addEventListener("click", function() {
   if ( whyFive.style.opacity != "0.2"){
    theClick(congratsCompleted, 100, whyFive, whyFiveBtn[0]);
   } else {
     return false;
   }
},false);