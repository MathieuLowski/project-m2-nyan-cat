// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of `"app"`
const gameEngine = new Engine(document.getElementById("app"));

// keydownHandler is a variable that refers to a function. The function has one parameter
// (does the parameter name matter?) which is called event. As we will see below, this function
// will be called every time the user presses a key. The argument of the function call will be an object.
// The object will contain information about the key press, such as which key was pressed.
const keydownHandler = (event) => {
  let sound = document.getElementById("sound");

  // event.code contains a string. The string represents which key was press. If the
  // key is left, then we call the moveLeft method of gameEngine.player (where is this method defined?)
  if (event.code === "ArrowLeft") {
    let effect = sound;
    return gameEngine.player.moveLeft();
  }

  // If `event.code` is the string that represents a right arrow keypress,
  // then move our hamburger to the right
  if (event.code === "ArrowRight") {
    return gameEngine.player.moveRight();
  }
};

// We add an event listener to document. document the ancestor of all DOM nodes in the DOM.
document.addEventListener("keydown", keydownHandler);

// We call the gameLoop method to start the game
gameEngine.gameLoop();

const button = document.getElementById("restart");
button.style.position = "absolute";
button.style.backgroundColor = "rgba(140, 64, 226, 0.952)";
button.style.left = 15; //x
button.style.top = 10; //y
button.style.zIndex = 10;
button.style.borderRadius = "10px";
button.style.margin = "12px 7px 7px 7px";
button.style.fontSize = 20;
button.style.color = "white";
gameEngine.appendChild(button);
