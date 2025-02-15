async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        
        document.getElementById("quote-text").innerText = `"${data.content}"`;
        document.getElementById("quote-author").innerText = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote-text").innerText = "Failed to load quote.";
    }
}

fetchQuote();

