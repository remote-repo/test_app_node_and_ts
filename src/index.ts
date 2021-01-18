import sockCall from "./testFIle";
import raiseEvent from "./button";
var obj = {
  name: "ayush",
  age: 25
};

function start() {
  console.log("Application is started");
  sockCall(obj);
}

document.getElementById("call").onclick = function (e) {
  raiseEvent();
};

start();
