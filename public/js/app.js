(function() {

  function evaluateCode(code, print) {
    eval(code)
  }

  (function() {
    var codeWindow, codeOutput;

    function print(input) {
      codeOutput.innerText += input.toString() + "\n"
    }
 
    window.onload = function() {
      codeWindow = document.getElementById("source-window")
      codeOutput = document.getElementById("code-output")
      codeWindow.onkeydown = function(event) {
        if (event.keyCode == 13 && event.shiftKey) {
          event.preventDefault()
          codeOutput.innerText = ""
          evaluateCode(codeWindow.innerText, print)
        }
      }
      codeWindow.innerHTML = "This is now a different set of code"
    }
 })()
})()
