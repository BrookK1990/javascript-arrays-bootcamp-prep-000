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
