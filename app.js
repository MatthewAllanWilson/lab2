// receive users name,
//5 yes or no questions they can ask of me with upperCase and lowerCase,
//tell user after each answer if they were right,
//console messages for each,
//add an if/else for a sixth question if the 5th question is correct,

var userName = prompt('Hello, friend!  Tell me your name so I don\'t have to keep calling you \'friend\'!');
console.log('User inputs their name.');
alert('Okay, ' + userName + '! I\'m going to ask you some questions so you can get to know me.');
console.log('Telling user what we will be doing.');

var fromSeattle = prompt('Did I grow up in Seattle?  Yes or no?');
if (fromSeattle.toUpperCase() === 'YES' || fromSeattle.toUpperCase() === 'Y') {
  alert('That is correct!  Although technically I grew up in Mill Creek, about 20 miles North of Seattle.');
} else if (fromSeattle.toUpperCase() === 'NO' || fromSeattle.toUpperCase() === 'N') {
  alert('Incorrect!  I grew up in Mill Creek, 20 miles North of downtown Seattle.  But I still say I grew up in Seattle!');
} else {
  alert('Ambiguous answers receive ambiguous responses!');
}
console.log('User guesses if I grew up in Seattle or not.');

var inLosAngeles = prompt('Did I live in Los Angeles?  Yes or no?');
if (inLosAngeles.toUpperCase() === 'YES' || inLosAngeles.toUpperCase() === 'Y') {
  alert ('You are right!  I lived there for 15 years.');
} else if (inLosAngeles.toUpperCase() === 'NO' || inLosAngeles.toUpperCase() === 'N') {
  alert('Nope!  I lived in the City of Angels for 15 years.');
} else {
  alert('That is not the response I asked for!');
}
console.log('User guesses if I lived in Los Angeles.');

var likesSushi = prompt('Do I like Sushi? Yes or no?');
if (likesSushi.toUpperCase() === 'YES' || likesSushi.toUpperCase() === 'Y') {
  alert('Incorrect!  Even though everyone else in LA loved it, I never caught the Sushi craze.');
} else if (likesSushi.toUpperCase() === 'NO' || likesSushi.toUpperCase() === 'N') {
  alert('That is right, ' + userName + '!  Even though I lived in the land of Sushi, I was never convinced.');
} else {
  alert('You have to say YES or NO!  My game, my rules!');
}
console.log('User guesses if I like Sushi.');

var playsPiano = prompt('Do I play piano?  Yes or no?');
if (playsPiano.toUpperCase() === 'YES' || playsPiano.toUpperCase() === 'Y') {
  alert('Right you are, ' + userName + '! I started playing piano when I was 30.');
} else if (playsPiano.toUpperCase() === 'NO' || playsPiano.toUpperCase() === 'N') {
  alert('Incorrect!  I started playing piano when I turned 30.');
} else {
  alert('Playing by your own rules will not help you learn about me!');
}
console.log('User guesses if I play piano.');

var likesGolf = prompt('Do I like Golf?  Yes or no?');
if (likesGolf.toUpperCase () === 'YES' || likesGolf.toUpperCase() === 'Y') {

  var whyGolf = prompt('Incorrect!  Do you think all people in LA play golf?  Yes or no?');
  if (whyGolf.toUpperCase() === 'YES' || whyGolf.toUpperCase() === 'Y') {
    alert('Well you are wrong about that!  When I was there I only knew one person who could afford it.');
  } else if (whyGolf.toUpperCase() === 'NO' || whyGolf.toUpperCase() === 'N') {
    alert('I see.  But you thought there was something golfy about me?  Well, now you know that is not right!');
  } else {
    alert('Your response baffles me!');
  }

} else if (likesGolf.toUpperCase() === 'NO' || likesGolf.toUpperCase() === 'N') {
  alert('You are right!  I am not a golf guy.');
} else {
  alert('At this point of the game there is no excuse for not saying YES or NO!');
}
console.log('User guesses if I play golf.  Additional question if they answer yes.');
