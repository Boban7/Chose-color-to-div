//variables
const elementId = (id) => {return document.getElementById(id);}
const arrayDiv = document.getElementsByClassName('demo');
let activeDivId = 'none';

//event listen to input
elementId('color').addEventListener('change', colored);
elementId('colorBorder').addEventListener('change', coloredBorder);

//event listen to divs
for(let i = 0; i < arrayDiv.length; i++) {
  arrayDiv[i].addEventListener('click', divActivate);
}

//chose div to colored
function divActivate() {
  this.style.borderStyle = 'dashed';
  activeDivId = this.id;
}

//function to colored background
function colored() {
  elementId(activeDivId).style.background = this.value;
  elementId(activeDivId).style.borderStyle = 'solid';
  activeDivId = 'none';
}

//function to colored border
function coloredBorder() {
  elementId(activeDivId).style.borderColor = this.value;
  elementId(activeDivId).style.borderStyle = 'solid';
  activeDivId = 'none';
}
