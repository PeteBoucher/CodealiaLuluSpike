(function() {

  function evaluateCode(code, print) {
    eval(code);
  }

  (function() {
    var codeWindow, codeOutput, output;

    function print(input) {
      output += input.toString() + "\n";
    }

    function display() {
      codeOutput.innerText = output;
      codeOutput.scrollTop = codeOutput.scrollHeight;
    }
 
    window.onload = function() {
      codeWindow = document.getElementById("code-window");
      codeOutput = document.getElementById("code-output");
      codeWindow.onkeydown = function(event) {
        if (event.keyCode == 13 && event.shiftKey) {
          event.preventDefault();
          output = "";
          evaluateCode(codeWindow.innerText, print);
          display();
        }
      }
    }
 })()
})()
