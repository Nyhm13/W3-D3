const myForm = document.querySelector("form");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Prodotto aggiunto al carello");

  const prodottiInput = document.getElementById("prodotti");
  const quantitaInput = document.getElementById("quantita");

  const formValues = {
    prodotti: prodottiInput.value,
    quantita: quantitaInput.value,
  };
  console.log("Ecco cosa hai comprato", formValues);

  const prodotto = document.createElement("li");
  prodotto.classList.add("no-bullets");
  prodotto.addEventListener("click", function () {
    prodotto.classList.add("middle-line");
  });
  prodotto.innerText = `${formValues.prodotti} ${formValues.quantita}`;

  const nostroCarrello = document.getElementById("carello");

  nostroCarrello.appendChild(prodotto);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Rimuovi dal carello";
  prodotto.appendChild(deleteButton);
  
  deleteButton.addEventListener("click", function () {
    prodotto.remove();
  });
});
