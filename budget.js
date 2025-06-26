
const desc    = document.getElementById("beskrivningsruta");
const amount  = document.getElementById("beloppruta");
const income  = document.getElementById("inkomstknapp");
const expense = document.getElementById("utgiftsknapp");
const list    = document.getElementById("lista");
const balOut  = document.getElementById("totalsaldo");

//const ska alltid vara

let balance = 0;   
// från vilket belopp vi ska börja

function add(type) {          
  const text = desc.value.trim();
  const val  = parseFloat(amount.value);

  if (!text || isNaN(val) || val <= 0) {
    alert("Fyll i både beskrivning och ett giltigt belopp");
    return;
  }
  
  //if startar en kontroll
  //!text kontrollerar om texten är tom
  //isNaN(val) – true om beloppet inte är ett giltigt tal
  //val <= 0 måste vara en siffra högre än 0
  //|| alla 3 fält måste vara korekta enligt kraven, räcker med att 1 av kraven inte uppfylls, då kommer den alerta
  //alert texten som ska visas om något av de 3 reglerna inte följs
  
  balance += type === "inc" ? val : -val; // type === "inc"kontrollerar om transaktionen är en inkomst
                                          //val : -val; positiv annars negativ
  balOut.textContent = balance.toFixed(2);  //gör om saldot (2) med 2 decimaler,textcontent raden skriver ut det uppdaterade saldot


  const li = document.createElement("li");  //skapa och spara en rad i listan
  li.innerHTML =
    `<span>${text}</span><span>${type === "inc" ? "+" : "−"}${val.toFixed(2)} kr</span>`; //fyller listan med + på inkomst och - på utgifter
  list.appendChild(li); //lägger in den nya raden längst ner

  desc.value   = "";  //tömmer beskrivningsfältet efter inmatning och tryck
  amount.value = "";  //tömmer beloppsfält på samma sätt
}

income.addEventListener("click", () => add("inc")); //skapa en "lyssnare", dvs om jag trycker på knapen, om det görs så ska funktionen vara att lögga till belippet i inc - 
expense.addEventListener("click", () => add("exp")); //samm som ovan men i exp dvs utgifer
                                                      //kopplar knapparna till en funktion