console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
    // create a section tag with an id of middle-earth
    var middleEarthSection = document.createElement('section');
       // inside, add each land as an article tag
      for (var i = 0; i < lands.length; i++) {
        var eachLand = document.createElement('article');
        middleEarthSection.appendChild(eachLand);
        console.log(middleEarthSection);
        // inside each article tag include an h1 with the name of the land
        var h1 = document.createElement('h1');
        h1.textContent = lands[i];
        eachLand.appendChild(h1);
        console.log(eachLand);
      }
      // append middle-earth to your document body
  body.appendChild(middleEarthSection);  
}

makeMiddleEarth();


// Part 2
var theShire = body.getElementsByTagName('article')[0];
var rivendell = body.getElementsByTagName('article')[1];
var mordor = body.getElementsByTagName('article')[2];
function makeHobbits() {

  var hobbitList = document.createElement('ul');
    console.log(hobbitList);
    for (var i =0; i < hobbits.length; i++){
      var hobbit =document.createElement('li');
      hobbit.className = 'hobbit';
      hobbit.textContent = hobbits[i];
      hobbitList.appendChild(hobbit);
      console.log(hobbitList);
    }
    theShire.appendChild(hobbitList);
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

}
makeHobbits();

// Part 3
var frodo = body.getElementsByTagName('li')[0];
function keepItSecretKeepItSafe() {
   // create a div with an id of 'the-ring'
  var ring = document.createElement('div');

  ring.id = 'the-ring';
  // give the div a class of 'magic-imbued-jewelry'
  ring.className = 'magic-imbued-jewelry';
  console.log(ring);
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener("click",nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(ring);
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
    console.log(aside);
  // attach an unordered list of the 'buddies' in the aside
  var buddyList = document.createElement('ul');
  for (var i = 0; i < buddies.length; i++) {
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
    aside.appendChild(buddyList)
    console.log(aside);
  }
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}

makeBuddies();
// Part 5

var strider = rivendell.getElementsByTagName('li')[3];
function beautifulStranger() {
  strider.textContent = 'Aragorn';
  // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger();

// Part 6
var hobbits = theShire.getElementsByTagName('ul');
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits[0]);
}

leaveTheShire();
// Part 7

var membersOfFellowship = rivendell.querySelector('li');
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var the-fellowship = document.createElement('div');
  //rivendell.appendChild(the-fellowship);
  //console.log(the-fellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
