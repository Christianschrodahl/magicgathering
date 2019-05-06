// refer to question 3 before development starts for scope document
//var currentWord = /Magic/gi;
var aboutText = document.getElementById("aboutText").innerHTML;
var newText = aboutText.replace(/Magic/gi, "Something");
document.getElementById("aboutText").innerHTML = newText;

var triggerEvent = document.getElementById("moreInfoTrigger").addEventListener("click", function(){
    var moreInfoContent = document.getElementById("moreInfoContent");
    if (moreInfoContent.style.display === "none"){
        moreInfoContent.style.display = "block";
    } else {
        moreInfoContent.style.display = "none";
    }
})