// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards
fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
  .then((res) => {
    createCard(res);
  })
.catch(err => console.log(err))

    const details = document.getElementById('cards');
    function createCard(result){
    for (var i = 0; i < result.cards.length; i++){
    const card = result.cards[i];
    const { name, id } = card;
    if (card.imageUrl === undefined){
        card.imageUrl = "https://via.placeholder.com/223x310";
    }       
        details.innerHTML += "<div class='col-sm-4' name='cardSort' id='"+name+"'' >" + "<div class='card-container'>" + "<h4>" + name + "</h4>" + "<img src='" + card.imageUrl + "' width='100%' >" + "<a href='card-specific.html?id="+ id +"' class='btn btn-success'> View More </a>" + "</div>" + "</div>";
    }
}

    const searchField = document.querySelector("#search");
    searchField.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const cardsName = document.getElementsByName("cardSort");
    Array.from(cardsName).forEach(function(card){
      const title = card.id;
        if(title.toLowerCase().indexOf(term) != -1){
            card.style.display = "block";
        } else {
            card.style.display = "none";
      
        }
    })
})