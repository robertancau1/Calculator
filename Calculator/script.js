let currentResult = "", result = "", alreadySet = false, afterResult = false,usedDot = false;
for (let i = 0; i<=9; i++)
{
    document.getElementById("button"+i).onclick = function(){
        if (afterResult == true)
        {
            currentResult = "";
        }
        currentResult += i;
        document.getElementById("result-box").textContent = currentResult;
        alreadySet = false;
        afterResult = false;
    }
}
document.getElementById("backspace").onclick = function () {
    if (currentResult[currentResult.length-1] == "+" || currentResult[currentResult.length-1] == "-" || currentResult[currentResult.length-1] == "*" || currentResult[currentResult.length-1] == "/")
    {
        alreadySet = false;
        usedDot = true;
    }
    if (currentResult[currentResult.length-2] == "+" || currentResult[currentResult.length-2] == "-" || currentResult[currentResult.length-2] == "*" || currentResult[currentResult.length-2] == "/")
    {
        alreadySet = true;
    }
    currentResult = currentResult.substring(0, currentResult.length - 1);
    document.getElementById("result-box").textContent = currentResult;
}
document.getElementById("clear").onclick = function(){
    currentResult = "";
    result = "";
    alreadySet = false;
    afterResult = false;
    usedDot = false;
    document.getElementById("result-box").textContent = currentResult;
}
for (let i = 1; i<=4; i++)
{
    document.getElementById("sign"+i).onclick = function(){
        if (currentResult != "" && alreadySet == true) 
        {
          currentResult = currentResult.substring(0, currentResult.length - 1);
          currentResult += document.getElementById("sign" + i).textContent;
          document.getElementById("result-box").textContent = currentResult;
          usedDot = false;
          alreadySet = true;
        } 
        else if (currentResult != "") 
        {
          currentResult += document.getElementById("sign" + i).textContent;
          document.getElementById("result-box").textContent = currentResult;
          alreadySet = true;
          afterResult = false;
          usedDot = false;
        }
    }
}
document.getElementById("dot").onclick = function(){
    if (usedDot == false && currentResult != "" && alreadySet == false) 
    {
        currentResult += document.getElementById("dot").textContent;
        document.getElementById("result-box").textContent = currentResult;
        usedDot = true;
        afterResult = false;
        alreadySet = true;
    }
}
document.getElementById("equal").onclick = function(){
    if (currentResult != "")
    {
        result = eval(currentResult);
        currentResult = result.toString();
        document.getElementById("result-box").textContent = result;
        alreadySet = false;
        afterResult = true;
        for (let i = 0; i<=currentResult.length-1; i++)
        {
            if (currentResult[i] == ".")
            {
                usedDot = true;
                break;
            }
            else
            {
                usedDot = false;
            }
        }
    }
}