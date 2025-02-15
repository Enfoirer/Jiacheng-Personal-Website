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


const avatar = document.querySelector(".profile-left img");

document.addEventListener("mousemove", (event) => {
    const x = (window.innerWidth / 2 - event.clientX) / 30; // 控制左右偏移量
    const y = (window.innerHeight / 2 - event.clientY) / 30; // 控制上下偏移量

    avatar.style.transform = `translate(${x}px, ${y}px)`;
});

