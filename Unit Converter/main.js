const input = document.getElementById('input')
const result = document.getElementById('result')
const inputType = document.getElementById('inputType')
const resultType = document.getElementById('resultType')

input.addEventListener("keyup",myResult)
inputType.addEventListener("change",myResult)
resultType.addEventListener("change",myResult)

var inputTypeValue = inputType.value
var resultTypeValue = resultType.value


function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    switch (inputTypeValue) {
        case "kg":
            if(resultTypeValue==="mg"){
                result.value = Number(input.value) * 1000000
            }else if(resultTypeValue==="gm"){
                result.value = Number(input.value) * 1000
            }else if(resultTypeValue==="pound"){
                result.value = Number(input.value) * 2.205
            }else{
                result.value = input.value
            }
            break;

        case "mg":
            if(resultTypeValue==="kg"){
                result.value = Number(input.value) / 1000000
            }else if(resultTypeValue==="gm"){
                result.value = Number(input.value) / 1000
            }else if(resultTypeValue==="pound"){
                result.value = Number(input.value) / 453600
            }else{
                result.value = input.value
            }
            break;

        case "gm":
            if(resultTypeValue==="kg"){
                result.value = Number(input.value) / 1000
            }else if(resultTypeValue==="mg"){
                result.value = Number(input.value) * 1000
            }else if(resultTypeValue==="pound"){
                result.value = Number(input.value) / 453.6
            }else{
                result.value = input.value
            }
            break;

        case "pound":
            if(resultTypeValue==="kg"){
                result.value = Number(input.value) / 2.205
            }else if(resultTypeValue==="mg"){
                result.value = Number(input.value) * 453600
            }else if(resultTypeValue==="gm"){
                result.value = Number(input.value) * 453.6
            }else{
                result.value = input.value
            }
            break;
    
        default:
            break;
    }


}