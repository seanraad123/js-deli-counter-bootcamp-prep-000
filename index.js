
var katzDeliLine = [1, 2];
const deliLine = ["Steven", "Blake", "Avi"]

var number = 1;

function takeANumber(array,num){
  array.push(num)
  console.log(num)
  console.log(`Welcome. You are number ${num} in line.`)
  ++ num
  console.log(num)
}

function nowServing(firstInLine){
  if (firstInLine.length === 0){
    console.log("There is nobody waiting to be served!")
  }else{
     console.log(`Currently serving number ${firstInLine.shift()}.`)
     console.log(katzDeliLine)
  }
}

nowServing(katzDeliLine)
nowServing(katzDeliLine)


// "The line is currently: 1. Ada, 2. Grace, 3. Kent"
function currentLine(line){
  if(line.length === 0){
    return ("The line is currently empty.")
  }else{
    var str = "The line is currently: "
    for (var o of line) {
      str += (`${parseInt(line.indexOf(o)+1)}. ${o}, `)
      
    }
    str = str.slice(0, -2);
  }
}

currentLine(deliLine)

