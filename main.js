document.addEventListener("DOMContentLoaded", () => {
    const quotes = {
        Random: [
            "The best way to predict the future is to create it.",
            "Your limitation—it's only your imagination.",
            "Push yourself, because no one else is going to do it for you.",
            "Friendship is the only cement that will ever hold the world together.",
            "A friend is someone who knows all about you and still loves you.",
            "Friendship multiplies the good of life and divides the evil.",
            "Life is what happens when you’re busy making other plans.",
            "To live is the rarest thing in the world. Most people exist, that is all.",
            "Life itself is the most wonderful fairy tale.",
            "Love is composed of a single soul inhabiting two bodies.",
            "We are most alive when we're in love.",
            "Love recognizes no barriers.",
            "Don't watch the clock; do what it does. Keep going.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",
            "Dream bigger. Do bigger.",
            "Success is not final; failure is not fatal: It is the courage to continue that counts.",
            "Success usually comes to those who are too busy to be looking for it.",
            "Don't be afraid to give up the good to go for the great.",
        ],
        Friendship: [
            "Friendship is the only cement that will ever hold the world together.",
            "A friend is someone who knows all about you and still loves you.",
            "Friendship multiplies the good of life and divides the evil.",
        ],
        Life: [
            "Life is what happens when you’re busy making other plans.",
            "To live is the rarest thing in the world. Most people exist, that is all.",
            "Life itself is the most wonderful fairy tale.",
        ],
        Love: ["Love is composed of a single soul inhabiting two bodies.", "We are most alive when we're in love.", "Love recognizes no barriers."],
        Motivation: [
            "Don't watch the clock; do what it does. Keep going.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",
            "Dream bigger. Do bigger.",
        ],
        Success: [
            "Success is not final; failure is not fatal: It is the courage to continue that counts.",
            "Success usually comes to those who are too busy to be looking for it.",
            "Don't be afraid to give up the good to go for the great.",
        ],
    };

    const quoteDisplay = document.querySelector(".bg-primary p");
    const categories = document.querySelectorAll("details ul li");
    const detailsElement = document.querySelector("details");

    categories.forEach((category) => {
        category.addEventListener("click", () => {
            const selectedCategory = category.textContent.trim();
            const selectedQuotes = quotes[selectedCategory];
            const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];

            // Update the quote display
            quoteDisplay.textContent = randomQuote;
            detailsElement.open = false;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const quotes = {
        // Your existing quotes object
    };

    const quoteDisplay = document.querySelector(".bg-primary p");
    const categories = document.querySelectorAll("details ul li");
    const audio = document.getElementById("background-audio");

    categories.forEach((category) => {
        category.addEventListener("click", () => {
            const selectedCategory = category.textContent.trim();
            const selectedQuotes = quotes[selectedCategory];
            const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];

            // Update the quote display
            quoteDisplay.textContent = randomQuote;
        });
    });

    // Optional: Add a button to pause/play audio
    const audioControlButton = document.createElement("button");
    audioControlButton.textContent = "Play Music";
    document.body.appendChild(audioControlButton);

    audioControlButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            audioControlButton.textContent = "Pause Music";
        } else {
            audio.pause();
            audioControlButton.textContent = "Play Music";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const quotes = {
        Random: [
            "The best way to predict the future is to create it.",
            "Your limitation—it's only your imagination.",
            "Push yourself, because no one else is going to do it for you.",
        ],
        Friendship: [
            "Friendship is the only cement that will ever hold the world together.",
            "A friend is someone who knows all about you and still loves you.",
            "Friendship multiplies the good of life and divides the evil.",
        ],
        Life: [
            "Life is what happens when you’re busy making other plans.",
            "To live is the rarest thing in the world. Most people exist, that is all.",
            "Life itself is the most wonderful fairy tale.",
        ],
        Love: ["Love is composed of a single soul inhabiting two bodies.", "We are most alive when we're in love.", "Love recognizes no barriers."],
        Motivation: [
            "Don't watch the clock; do what it does. Keep going.",
            "The harder you work for something, the greater you’ll feel when you achieve it.",
            "Dream bigger. Do bigger.",
        ],
        Success: [
            "Success is not final; failure is not fatal: It is the courage to continue that counts.",
            "Success usually comes to those who are too busy to be looking for it.",
            "Don't be afraid to give up the good to go for the great.",
        ],
    };

    const allQuotes = [...quotes.Random, ...quotes.Friendship, ...quotes.Life, ...quotes.Love, ...quotes.Motivation, ...quotes.Success];
    const dailyQuoteDisplay = document.getElementById("daily-quote");
    const quoteDisplay = document.querySelector(".bg-primary p");
    const categories = document.querySelectorAll("details ul li");
    const detailsElement = document.querySelector("details");

    // Function to get current minute (YYYY-MM-DD-HH-MM format)
    const getCurrentMinute = () => {
        const now = new Date();
        return now.toISOString().split(":")[1]; // Returns the current minute
    };

    // Check if there's already a quote stored for the current minute
    const loadQuoteOfTheMinute = () => {
        const savedQuote = localStorage.getItem("quoteOfTheMinute");
        const savedMinute = localStorage.getItem("quoteMinute");

        const currentMinute = getCurrentMinute();

        if (savedQuote && savedMinute === currentMinute) {
            // If quote is stored for the current minute, display it
            dailyQuoteDisplay.textContent = savedQuote;
        } else {
            // Otherwise, pick a new random quote for the new minute
            const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
            dailyQuoteDisplay.textContent = randomQuote;

            // Store the new quote and minute in localStorage
            localStorage.setItem("quoteOfTheMinute", randomQuote);
            localStorage.setItem("quoteMinute", currentMinute);
        }
    };

    // Load the initial quote on page load
    loadQuoteOfTheMinute();

    // Update the quote every minute
    setInterval(() => {
        loadQuoteOfTheMinute();
    }, 60000); // 60,000 milliseconds = 1 minute

    // Category selection logic
    categories.forEach((category) => {
        category.addEventListener("click", () => {
            const selectedCategory = category.textContent.trim();
            const selectedQuotes = quotes[selectedCategory];
            const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];

            // Update the quote display
            quoteDisplay.textContent = randomQuote;

            // Hide the dropdown by closing the <details> element
            detailsElement.open = false;
        });
    });
});
