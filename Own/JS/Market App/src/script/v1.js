
/**
 * TODO
 *      
*/

let searchInput = document.getElementById("send-ticker");
let searchValue = document.getElementById("input-asset");

searchInput.addEventListener("submit", getTickerResults);

function getTickerResults(e) {
    e.preventDefault();
    let searchQuery = searchValue.value.toUpperCase();
    fetchSearchResults(searchQuery);

    searchValue.value = "";
}

async function fetchSearchResults(query) {
    let data = await fetch(`https://financialmodelingprep.com/api/v3/quote/${query}`);
    let response = await data.json();
    if (data.ok) {
        let objectResponse = response[0];
        appendResults_DOM(objectResponse);
    } else{
        console.log("Data wasn´t fetched correctly");
    }
}

let resultsDiv = document.querySelector(".ticker-information");

function appendResults_DOM(data) {

    let divResult1 = document.querySelector(".result1").childNodes;
    let divResult2 = document.querySelector(".result2").childNodes;
    let divResult3 = document.querySelector(".result3").childNodes;
    let divResult4 = document.querySelector(".result4").childNodes;
    let divResult5 = document.querySelector(".result5").childNodes;

    if (data) {
        resultsDiv.classList.remove("hidden");

        const {name, price, open, dayLow, volume} = data;

        divResult1[1].innerText = "Name:";
        divResult1[3].innerText = name;

        divResult2[1].innerText = "Price:";
        divResult2[3].innerText = price;

        divResult3[1].innerText = "Open:";
        divResult3[3].innerText = open;

        divResult4[1].innerText = "Day Low";
        divResult4[3].innerText = dayLow;

        divResult5[1].innerText = "Volume";
        divResult5[3].innerText = volume;
        console.log(data);

    } else{
        console.log("Check your input!");
    }
}




