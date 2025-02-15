async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/quotes/random");
        const data = await response.json();
        
        
        if (data.length > 0) {
            const quote = data[0];
            document.getElementById("quote-text").innerText = `"${quote.content}"`;
            document.getElementById("quote-author").innerText = `- ${quote.author}`;
        } else {
            document.getElementById("quote-text").innerText = "No quote found.";
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote-text").innerText = "Failed to load quote.";
    }
}


fetchQuote();
