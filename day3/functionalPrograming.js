var myFunction = function () {
  console.log("Function executed")
}
myFunction()

var myFunction2 = function (param1) {
  console.log("Function executed, the param value is " + param1
  )
}
myFunction2("Hello World")

function functionThatCallsAnotherFunction(otherFunction) {
  otherFunction()
}
functionThatCallsAnotherFunction(myFunction2("Another Hello World"))



