let numberEl = document.getElementById("number")
let btnEl = document.getElementById("convert-btn")
let outputEl = document.getElementById("output")
let romanNum = ""
outputEl.classList.remove("error")
outputEl.classList.remove("result")
const romanMap=[
  {value:1000,numeral:"M"},
  {value:900,numeral:"CM"},
  {value:500,numeral:"D"},
  {value:400,numeral:"CD"},
  {value:100,numeral:"C"},
  {value:90,numeral:"XC"},
  {value:50,numeral:"L"},
  {value:40,numeral:"XL"},
  {value:10,numeral:"X"},
  {value:9,numeral:"IX"},
  {value:5,numeral:"V"},
  {value:4,numeral:"IV"},
  {value:1,numeral:"I"}, 
]
function convert(num){
  let result=""
  for(let i=0;i<romanMap.length;i++){
    while(num>=romanMap[i].value){
      result+=romanMap[i].numeral
      num-=romanMap[i].value
    }
  }
  return result
}




numberEl.addEventListener("keydown", function (e) {
  if(e.key=="Enter")
 { e.preventDefault()
  handleConvert()
}
 

})
btnEl.addEventListener("click",handleConvert)
function handleConvert(){
  let num=(numberEl.value)
  if(num==="0"){
    outputEl.textContent = "Please enter a number greater than or equal to 1."
    outputEl.classList.add("error");
    outputEl.classList.remove("result")
    return
  }
  else if ( !+num) {
   
    outputEl.textContent = "Please enter a valid number."
    outputEl.classList.add("error")
    outputEl.classList.remove("result")
return
  }
  else if (+num> 3999) {
    outputEl.textContent = "Please enter a number less than or equal to 3999."
    outputEl.classList.add("error");
    outputEl.classList.remove("result")
    return


  }else if(+num < 0){
    outputEl.textContent = "Please enter a number greater than or equal to 1."
    outputEl.classList.add("error");
    outputEl.classList.remove("result")
    return
  }
  else{
    outputEl.textContent = convert(+num)
  outputEl.classList.remove("error")
  outputEl.classList.add("result")
}

}


