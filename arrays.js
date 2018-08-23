var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element){
  var array = [1]
  var element =  "foo"
return [element,...array]

}

function destructivelyAddElementToBeginningOfArray(array,element) {
  var array = [1]
  var element = "foo"
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array = [1]
  var element =  "foo"
  return [array,...element]

}
function destructivelyAddElementToEndOfArray(array, element) {
  var array = [1]
  var element = "foo"
  array.push(element)
  return array
}

function accessElementInArray(array,index)  {
  var array = [1,2,3]
  var index = 2
console.log(array[index]);
}
