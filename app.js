// receive users name,
//5 yes or no questions they can ask of me with upperCase and lowerCase,
//tell user after each answer if they were right,
//console messages for each,
//add an if/else for a sixth question if the 5th question is correct,
//adding a comment for a git test

var userName = prompt('Hello, friend!  Tell me your name so I don\'t have to keep calling you \'friend\'!');
console.log('User inputs their name.');
  alert('Okay, ' + userName + '! I\'m going to ask you some questions so you can get to know me.');
    console.log('Telling user what we will be doing.');

var fromSeattle = prompt('Did I grow up in Seattle?  Yes or no?');
  if (fromSeattle.toUpperCase() === 'YES') {
    alert('That is correct!  Although technically I grew up in Mill Creek, about 20 miles North of Seattle.');
} else {
    alert('Incorrect!  I grew up in Mill Creek, 20 miles North of downtown Seattle.  But I still say I grew up in Seattle!');
    }
    console.log('User guesses if I grew up in Seattle or not.');

var inLosAngeles = prompt('Did I live in Los Angeles?  Yes or no?');
  if (inLosAngeles.toUpperCase() === 'YES'){
    alert ('You are right!  I lived there for 15 years.');
} else {
    alert('Nope!  I lived in the City of Angels for 15 years.');
    }
    console.log('User guesses if I lived in Los Angeles.');

var likesSushi = prompt('Do I like Sushi? Yes or no?');
  if (likesSushi.toUpperCase() === 'YES') {
    alert('Incorrect!  Even though everyone else in LA loved it, I never caught the Sushi craze.');
} else {
    alert('That is right, ' + userName + '!  Even though I lived in the land of Sushi, I was never convinced.');
    }
    console.log('User guesses if I like Sushi.');

  var playsPiano = prompt('Do I play piano?  Yes or no?');
    if (playsPiano.toUpperCase() === 'YES') {
        alert('Right you are, ' + userName + '! I started playing piano when I was 30.');
  } else {
      alert('Incorrect!  I started playing piano when I turned 30.');
    }
    console.log('User guesses if I play piano.');

  var likesGolf = prompt('Do I like Golf?  Yes or no?');
    if (likesGolf.toUpperCase () === 'YES') {

      var whyGolf = prompt('Incorrect!  Do you think all people in LA play golf?  Yes or no?');
        if (whyGolf.toUpperCase() === 'YES') {
          alert('Well you are wrong about that!  When I was there I only knew one person who could afford it.');
      } else {
          alert('I see.  But you thought there was something golfy about me?  Well, now you know that is not right!');
      }

  } else {
    alert('You are right!  I am not a golf guy.');
  }
    console.log('User guesses if I play golf.  Additional question if they answer yes.');
