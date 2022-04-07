let contentGridElement = document.getElementById('contentGrid');

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "Name" : "Pim",
    "pictureURL" : "https://static.wikia.nocookie.net/smiling-friends/images/f/fb/Pim.png/revision/latest?cb=20211223214250",
    "Color" : "Bubble Gum Pink",
    "Species" : "Critter",
    "Occupation" : "Smiling Friend"
  },
  {
    "Name" : "Charlie",
    "pictureURL" : "https://static.wikia.nocookie.net/smiling-friends/images/c/c9/Charlie.png/revision/latest?cb=20220113014948",
    "Color" : "Piss Yellow",
    "Species" : "Critter",
    "Occupation" : "Smiling Friend"
  },
  {
    "Name" : "The Boss",
    "pictureURL" : "https://static.wikia.nocookie.net/smiling-friends/images/b/bf/The_boss.jpg/revision/latest/scale-to-width-down/700?cb=20220114223652",
    "Color" : "Pale Peach",
    "Species" : "Human",
    "Occupation" : "Head of Smiling Friends Inc."
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {
  var divColor = "#eefbfd";

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = divColor;
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['Name'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['pictureURL'];
  newContentElement.appendChild(newImage);

  let newColorSubhead = document.createElement("H4");
  newColorSubhead.innerText = "Color: " + incomingJSON['Color'];
  newContentElement.appendChild(newColorSubhead);

  let newSpeciesSubhead = document.createElement("H4");
  newSpeciesSubhead.innerText = "Species: " + incomingJSON['Species'];
  newContentElement.appendChild(newSpeciesSubhead);

  let newOccupSubhead = document.createElement("H4");
  newOccupSubhead.innerText = "Occupation: " + incomingJSON['Occupation'];
  newContentElement.appendChild(newOccupSubhead);

  contentGridElement.appendChild(newContentElement);
}
