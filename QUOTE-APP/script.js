"use strict";

/* QUOTE APP
*/

// Gedanken: 
//- rendern
//- fetch(en)
//- btn eventListener (function aufrufen)
//- function: Elemente "creieren" und ins html hinzufügen(appendChild) -----> DIESE ENTFÄLLT, da ich den Inhalt gleich in meiner funktion abrufen kann.


// 2. Funktion für den Button:
function fetchQuotes() {
    //den Inhalt bzw. quotes holen(fetch'en)
    const theQuote = fetch("https://dummy-apis.netlify.app/api/quote");
    //console.log(theQuote);
    theQuote.then((response) => {
        if(response.ok){
            return response.json();
        }  
})
        .then((jsonData) => {
            document.getElementById("blockquotes").innerHTML = jsonData.quote;
            document.getElementById("author").innerHTML = jsonData.author;
})
        .catch(() => {
            console.error("API error");
        });
}

// 1. Button bauen
const BtnGetQuote = document.getElementById("btnGetQuote");
// Ich brauche eine funktion für den Button, siehe 2.
BtnGetQuote.addEventListener("click", fetchQuotes);

fetchQuotes();



