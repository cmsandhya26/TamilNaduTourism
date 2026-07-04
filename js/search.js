// ===============================
// SEARCH FUNCTION
// ===============================

const searchButton = document.getElementById("searchBtn");

if (searchButton) {

    searchButton.addEventListener("click", openSearch);

}

// Create Search Modal
function openSearch() {

    if (document.getElementById("searchModal")) return;

    const modal = document.createElement("div");

    modal.id = "searchModal";

    modal.innerHTML = `

        <div class="search-box">

            <span id="closeSearch">&times;</span>

            <h2>Search Destination</h2>

            <input
                type="text"
                id="searchInput"
                placeholder="Search places...">

            <button id="searchNow">
                Search
            </button>

            <div id="searchResult"></div>

        </div>

    `;

    document.body.appendChild(modal);

    // Modal Styling
    modal.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.75);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:9999;
    `;

    const box = modal.querySelector(".search-box");

    box.style.cssText = `
        width:90%;
        max-width:450px;
        background:#16163a;
        padding:30px;
        border-radius:20px;
        text-align:center;
        color:#fff;
    `;

    box.querySelector("input").style.cssText = `
        width:100%;
        padding:14px;
        margin:20px 0;
        border:none;
        border-radius:10px;
        outline:none;
        font-size:16px;
    `;

    box.querySelector("button").style.cssText = `
        background:#8d63ff;
        color:white;
        border:none;
        padding:12px 30px;
        border-radius:30px;
        cursor:pointer;
        font-size:16px;
    `;

    document.getElementById("closeSearch").style.cssText = `
        float:right;
        font-size:30px;
        cursor:pointer;
    `;

    // Close Search
    document.getElementById("closeSearch").onclick = () => {

        modal.remove();

    };

    // Search Data
    const destinations = [
        "Ooty",
        "Kodaikanal",
        "Madurai",
        "Mahabalipuram",
        "Rameswaram",
        "Kanyakumari",
        "Yercaud",
        "Chennai",
        "Coimbatore",
        "Thanjavur"
    ];

    // Search Button
    document.getElementById("searchNow").onclick = () => {

        const keyword =
            document.getElementById("searchInput")
            .value
            .toLowerCase();

        const result =
            destinations.filter(place =>
                place.toLowerCase().includes(keyword)
            );

        document.getElementById("searchResult").innerHTML =
            result.length
                ? result.join("<br>")
                : "No destination found.";

    };

}

// ESC Key closes modal
document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        const modal = document.getElementById("searchModal");

        if (modal) modal.remove();

    }

});