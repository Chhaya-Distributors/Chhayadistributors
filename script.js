document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar input");
    const vaccineItems = document.querySelectorAll(".dish");

    searchInput.addEventListener("keyup", () => {
        const searchValue = searchInput.value.toLowerCase();

        vaccineItems.forEach(item => {
            const title = item.querySelector("h3").textContent.toLowerCase();
            
            if (title.includes(searchValue)) {
                item.style.display = "block"; // Show the item if it matches
            } else {
                item.style.display = "none"; // Hide the item if it doesn't match
            }
        });
    });
});

