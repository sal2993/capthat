var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === '/img/buck.png') {
    myImage.setAttribute ('src', '/img/buck2.png');
  }
  else {
    myImage.setAttribute('src', '/img/buck.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
}
else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

console.log('my name is savior');
