async function fetchQuote() {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();

        
        const randomIndex = Math.floor(Math.random() * data.length);
        const quote = data[randomIndex];

        document.getElementById("quote-text").innerText = `"${quote.text}"`;
        document.getElementById("quote-author").innerText = `- ${quote.author || "Unknown"}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote-text").innerText = "Failed to load quote.";
    }
}


fetchQuote();
