const myForm = document.querySelector("form");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Prodotto aggiunto al carrello");

  const prodottiInput = document.getElementById("prodotti");
  const quantitaInput = document.getElementById("quantita");

  const formValues = {
    prodotti: prodottiInput.value,
    quantita: quantitaInput.value,
  };
  console.log("Ecco cosa hai comprato", formValues);

  const prodotto = document.createElement("li");
  prodotto.classList.add("no-bullets");
//   prodotto.addEventListener("click", function () {
//     prodotto.classList.add("middle-line");
//   });
  prodotto.innerHTML = `<span onclick="barrami(event)">${formValues.prodotti} ${formValues.quantita}</span>`;

  const nostroCarrello = document.getElementById("carrello");

  nostroCarrello.appendChild(prodotto);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Rimuovi dal carrello";
  prodotto.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    prodotto.remove();
  });
});

const barrami = function(e){
  // e.target.classList.add("middle-line") seleziona l'elemento cliccato
  // e.target.parentElement.remove() seleziona il parente dell'elemento cliccato
    e.target.classList.add("middle-line"); 
    
  
  }