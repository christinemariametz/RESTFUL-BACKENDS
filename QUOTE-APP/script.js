"use strict";

/* QUOTE APP
*/

// Gedanken: 
//- rendern
//- fetch(en)
//- btn eventListener (function aufrufen)
//- function: Elemente "creieren" und ins html hinzufügen(appendChild)


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
        return createQuoteAndAuthor(jsonData.quote, jsonData.author);
})
        .catch(() => {
            console.error("API error");
        });
}


// 1. Button bauen
const BtnGetQuote = document.getElementById("btnGetQuote");
// Ich brauche eine funktion für den Button, siehe 2.
BtnGetQuote.addEventListener("click", fetchQuotes);



//3. 2 neue Elemente müssen kreiert werden (Quote & Author) und zum html hinzugefügt:
function createQuoteAndAuthor(quoteValue, authorValue) {
    document.getElementById("author").innerHTML = "";
    document.getElementById("blockquotes").innerHTML = "";

    const quote = document.createTextNode(`"`+ quoteValue + `"`);
    const author = document.createTextNode("– " + authorValue);

    document.getElementById("author").appendChild(author);
    document.getElementById("blockquotes").appendChild(quote);
}

fetchQuotes();



