document.querySelector('h1').onclick = function() {
    alert('Stop clicking this page please!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dolphin.jpg') {
      myImage.setAttribute ('src','images/castle.jpg');
    } else {
      myImage.setAttribute ('src','images/dolphin.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Site Prototype, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Site Prototype, ' + storedName;
}
