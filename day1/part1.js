//variable declaration
var item

//numbers
item = 10
item = item * 2
console.log(item ** 2)


//strings
item = "test"
item = item * 2
console.log(typeof (item * 2))
item = item + item
item = item.length
item = "2"
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

//maths operators
// + - % / * ++ --

item = 1
item = item + 1
item = item * 10
item = item / 5
item = item % 2
item = 13 % 5
item++
item--

//strict equalitys (in general use this unless you have a good reason)
item = 5 === 5
item = 5 === "5"
item = 0 === false


//optional
//equalities http://www.ecma-international.org/ecma-262/7.0/index.html#sec-abstract-equality-comparison

item = false == ""
item = false == 0
item = false == null
item = false == null
item = false == undefined
item = false == {}
item = undefined == null

//misc
item = typeof ""
item = typeof null
item = typeof undefined
