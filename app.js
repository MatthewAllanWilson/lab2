// receive users name,
//5 yes or no questions they can ask of me with upperCase and lowerCase,
//tell user after each answer if they were right,
//console messages for each,
//add an if/else for a sixth question if the 5th question is correct,

var userName = prompt('Hello, friend!  Tell me your name so I don\'t have to keep calling you \'friend\'!');
console.log('User inputs their name.');
alert('Okay, ' + userName + '! I\'m going to ask you some questions so you can get to know me.');
console.log('Telling user what we will be doing.');

var correctGuesses = 0;
var correctAnswerArray = [];
var questionArray = ['Did I grow up in Seattle?  Yes or no?', 'Did I live in Los Angeles?  Yes or no?', 'Do I like Sushi? Yes or no?', 'Do I play piano?  Yes or no?', 'Do I like Golf?  Yes or no?', 'How many miles away is Mill Creek, my hometown, from downtown Seattle?'];

var pTagOne = document.getElementById('ans-one');
function fromSeattleQ() {
  var fromSeattle = prompt(questionArray[0]);
  if (fromSeattle.toUpperCase() === 'YES' || fromSeattle.toUpperCase() === 'Y') {
    pTagOne.textContent = 'That is correct!  Although technically I grew up in Mill Creek,    about 20 miles North of Seattle.';
    correctAnswerArray.push(fromSeattle);
}   else if (fromSeattle.toUpperCase() === 'NO' || fromSeattle.toUpperCase() === 'N') {
    pTagOne.textContent ='Incorrect!  I grew up in Mill Creek, which is near Everett.  But I still say I grew up in Seattle!';
} else {
  alert('Ambiguous answers receive ambiguous responses!');
}
  console.log('User guesses if I grew up in Seattle or not.');
}
fromSeattleQ();

var pTagTwo = document.getElementById('ans-two');
function inLosAngelesQ() {
  var inLosAngeles = prompt(questionArray[1]);
  if (inLosAngeles.toUpperCase() === 'YES' || inLosAngeles.toUpperCase() === 'Y') {
    pTagTwo.textContent = 'You are right!  I lived there for 15 years.';
    correctAnswerArray.push(inLosAngeles);
  } else if (inLosAngeles.toUpperCase() === 'NO' || inLosAngeles.toUpperCase() === 'N') {
    pTagTwo.textContent = 'Nope!  I lived in the City of Angels for 15 years.';
  } else {
    alert('That is not the response I asked for!');
  }
  console.log('User guesses if I lived in Los Angeles.');
}
inLosAngelesQ();

var pTagThree = document.getElementById('ans-three');
function likesSushiQ() {
  var likesSushi = prompt(questionArray[2]);
  if (likesSushi.toUpperCase() === 'YES' || likesSushi.toUpperCase() === 'Y') {
    pTagThree.textContent ='Incorrect!  Even though everyone else in LA loved it, I never caught the Sushi craze.';
  } else if (likesSushi.toUpperCase() === 'NO' || likesSushi.toUpperCase() === 'N') {
    pTagThree.textContent ='That is right, ' + userName + '!  Even though I lived in the land of Sushi, I was never convinced.';
    correctAnswerArray.push(likesSushi);
  } else {
    alert('You have to say YES or NO!  My game, my rules!');
  }
  console.log('User guesses if I like Sushi.');
}
likesSushiQ();

var pTagFour = document.getElementById('ans-four');
function playsPianoQ() {
  var playsPiano = prompt(questionArray[3]);
  if (playsPiano.toUpperCase() === 'YES' || playsPiano.toUpperCase() === 'Y') {
    pTagFour.textContent ='Right you are, ' + userName + '! I started playing piano when I was 30.';
    correctAnswerArray.push(playsPiano);
  } else if (playsPiano.toUpperCase() === 'NO' || playsPiano.toUpperCase() === 'N') {
    pTagFour.textContent ='Incorrect!  I started playing piano when I turned 30.';
  } else {
    alert('Playing by your own rules will not help you learn about me!');
  }
  console.log('User guesses if I play piano.');
}
playsPianoQ();

var pTagFive = document.getElementById('ans-five')
function likesGolfQ() {
  var likesGolf = prompt(questionArray[4]);
  if (likesGolf.toUpperCase () === 'YES' || likesGolf.toUpperCase() === 'Y') {

    var whyGolf = prompt('Incorrect!  Do you think all people in LA play golf?  Yes or no?');
    if (whyGolf.toUpperCase() === 'YES' || whyGolf.toUpperCase() === 'Y') {
      pTagFive.textContent ='Well you are wrong about that!  When I was there I only knew one person who could afford it.';
    } else if (whyGolf.toUpperCase() === 'NO' || whyGolf.toUpperCase() === 'N') {
      pTagFive.textContent ='I see.  But you thought there was something golfy about me?  Well, now you know that is not right!';
    } else {
      alert('Your response baffles me!');
    }

  } else if (likesGolf.toUpperCase() === 'NO' || likesGolf.toUpperCase() === 'N') {
    pTagFive.textContent ='You are right!  I am not a golf guy.';
    correctAnswerArray.push(likesGolf);
  } else {
    alert('At this point of the game there is no excuse for not saying YES or NO!');
  }
  console.log('User guesses if I play golf.  Additional question if they answer yes.');
}
likesGolfQ();

function howFarAwayQ() {
  var numGuesses = 0;
  while(howFarAway !== 23 && numGuesses < 4) {

    var howFarAway = parseInt(prompt(questionArray[5]));

    if (howFarAway > 23) {
      alert(howFarAway + ' is too high!  Try again.');
    } else if (howFarAway < 23) {
      alert(howFarAway + ' is too low!  Try again.');
    } else if (howFarAway === 23) {
      alert(howFarAway + ' is correct!  Well done!');
      correctAnswerArray.push(howFarAway);
    } else if (isNaN(howFarAway) == true) {
      alert('In my experience miles are always counted with NUMBERS!  Try again.');
    }
    else {
      alert('There should not be any other options!');
    }
    console.log('User guesses how far away my hometown is.  They only get 4 tries.');
    numGuesses ++;
  }
}
alert('Thanks for playing, ' + userName + '!  You got ' + correctAnswerArray.length + ' out of 6 questions right!');
