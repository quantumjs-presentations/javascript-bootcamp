//variable declaration
var item

//numbers
item = 10
item = item * 2
item = Math.pow(item, 2)
console.log(item ** 2)


//strings
item = "test"
item = item * 2
console.log(typeof (item * 2))
item = item + item
item = item.length
item  = "2"
item = item.concat(23)
item = item * 2
item = item + "three"
console.log(item * "three")

//booleans and conditionals
item = false
item = !item
item = !!item
item && console.log("this will never print")
item = true
item && console.log("this will always print")

//equalities http://www.ecma-international.org/ecma-262/7.0/index.html#sec-abstract-equality-comparison
console.log(typeof "")
console.log(typeof null)
console.log(typeof undefined)
console.log(false == "")
console.log(false == 0)
console.log(false == null)
console.log(false == null)
console.log(false == undefined)
console.log(false == {})
console.log(undefined == null)

//strict equality (in general use this unless you have a good reason)
console.log(false === "")
console.log(false === 0)

// obejcts
item = {}
debugger
item.toString()


