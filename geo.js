async function fetchLocation() {
    try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data = await response.json();

        const locationText = `
            <p>Your IP: ${data.ip}</p>
            <p>Location: ${data.city}, ${data.region}, ${data.country}</p>
            <p>Coordinates: ${data.latitude}, ${data.longitude}</p>
        `;

        document.getElementById("visitor-location").innerHTML = locationText;
    } catch (error) {
        console.error("Failed to fetch location:", error);
        document.getElementById("visitor-location").innerHTML = "<p>Could not retrieve location.</p>";
    }
}

fetchLocation();
