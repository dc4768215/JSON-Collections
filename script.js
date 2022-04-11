let contentGridElement = document.getElementById('contentGrid');

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "Name" : "Pim",
    "pictureURL" : "Pim.webp",
    "Color" : "Bubble Gum Pink",
    "Species" : "Critter",
    "Occupation" : "Smiling Friend"
  },
  {
    "Name" : "Charlie",
    "pictureURL" : "Charlie.webp",
    "Color" : "Piss Yellow",
    "Species" : "Critter",
    "Occupation" : "Smiling Friend"
  },
  {
    "Name" : "The Boss",
    "pictureURL" : "The_boss.webp",
    "Color" : "Pale Peach",
    "Species" : "Human",
    "Occupation" : "Head of Smiling Friends Inc."
  },
  {
    "Name" : "Alan",
    "pictureURL" : "Alan.webp",
    "Color" : "Pale Red",
    "Species" : "Critter",
    "Occupation" : "Smiling Friend; Former Frowning Friend"
  },
  {
    "Name" : "Glep",
    "pictureURL" : "Glep.webp",
    "Color" : "Green",
    "Species" : "Critter",
    "Occupation" : "Smiling Friend; Former Frowning Friend"
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
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
