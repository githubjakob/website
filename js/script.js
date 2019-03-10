var counter = 0;

function clickOnBackground() {
  counter++;

  setFrameColor();

  if (counter > 25) {
      setScoreInvisible();
  }
  else if (counter > 20) {
    setScoreInvisible();
    displayScore("You like clickin, ey?")
  }
  else if (counter > 15) {
    setScoreInvisible();
  } else if (counter > 5) {
    displayScore(16 - counter);
  }

  if (counter > 15) {
    var headline = document.getElementById("headline");
    var newHeadline = document.createElement('div');
    newHeadline.innerHTML = '<h1 class="site-description" id="headline">' +
      '<span style="color: ' + getColor() + '">H</span>' +
      '<span style="color: ' + getColor() + '">e</span>' +
      '<span style="color: ' + getColor() + '">l</span>' +
      '<span style="color: ' + getColor() + '">l</span>' +
      '<span style="color: ' + getColor() + '">o</span>' +
      '<span style="color: ' + getColor() + '">,&nbsp;</span>' +
      '<span style="color: ' + getColor() + '">I</span>' +
      '<span style="color: ' + getColor() + '">&#039;</span>' +
      '<span style="color: ' + getColor() + '">m </span>' +
      '<span style="color: ' + getColor() + '">J</span>' +
      '<span style="color: ' + getColor() + '">a</span>' +
      '<span style="color: ' + getColor() + '">k</span>' +
      '<span style="color: ' + getColor() + '">o</span>' +
      '<span style="color: ' + getColor() + '">b</span>' +
      '<span style="color: ' + getColor() + '">!</span></h1>'

    headline.parentNode.replaceChild(newHeadline, headline);
  }
}

function getColor() {
  var colors = {
    1: "#85144b ",
    2: "#B10DC9",
    3: "#F012BE",
    4: "#FF4136",
    5: "#0074D9",
    6: "#2ECC40",
    7: "#01FF70",
    8: "#FFDC00"
  }

  var number = Math.floor((Math.random() * 10) % Object.keys(colors).length + 1)

  return colors[number];
}

function setFrameColor() {
  var color = getColor();
  document.getElementById("top").setAttribute("style", "background-color:" + color);
  document.getElementById("left").setAttribute("style", "background-color:" + color);
  document.getElementById("right").setAttribute("style", "background-color:" + color);
  document.getElementById("bottom").setAttribute("style", "background-color:" + color);

}

function displayScore(score) {
  setScoreText(score);
  setScoreVisible();
}

function setScoreText(text) {
  document.getElementById("score").innerHTML = text;
}

function setScoreVisible() {
  document.getElementById("score-box").setAttribute("style", "visibility: visible")
}

function setScoreInvisible() {
  document.getElementById("score-box").setAttribute("style", "visibility: hidden")
}

setFrameColor();
