// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    
}

// variable for the id
var id = getQueryStringValue("id");
if (id == false){
    alert("You didnt choose a card!");
}

var cardStat = "https://api.magicthegathering.io/v1/cards/" + id;
fetch(cardStat)
    .then(result => result.json())
  .then((res) => {
    choosenCard(res);
  })
.catch(err => console.log(err))

function choosenCard(result){
var showCard = document.getElementById("cardImage");
var cardDetails = document.getElementById("cardDetails");
    if (result.card.imageUrl === undefined){
        result.card.imageUrl = "https://via.placeholder.com/223x310";
    }    
showCard.innerHTML =  "<img src='" + result.card.imageUrl + "'>";
cardDetails.innerHTML =  "<h2>" + result.card.name + "</h2>" + "<div> <b>About:  </b>" +  result.card.text + "</div>" + "<div><b>Rarity: </b>" + result.card.rarity + "</div>" + "<div><b>Color: </b>" + result.card.colors + "</div>";   
}

