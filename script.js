let currentRating = 0; 

function setRating(value) {
    const stars = document.querySelectorAll('.satisfaction .stars .star'); // Sélectionne toutes les étoiles dans .satisfaction .stars

    if (currentRating === value) {

        stars.forEach(star => {
            star.textContent = '☆';
            star.style.color = '#ccc'; 
        });
        currentRating = 0; 
    } else {

        stars.forEach(star => {
            star.textContent = '☆'; 
            star.style.color = '#ccc'; 
        });
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'), 10);
            if (starValue === value) {
                star.textContent = '★'; 
                star.style.color = '#e50914';
            }
        });

        currentRating = value; 
    }
}


const stars = document.querySelectorAll('.satisfaction .stars .star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'), 10);
        setRating(value);
    });
});
const title = document.getElementById("title");
const text = title.innerText;



title.innerHTML = text.split('').map(letter => `<span class="gray">${letter}</span>`).join('');

let index = 0;
function illuminate() {
    const spans = title.querySelectorAll("span"); 
    if (index < spans.length) {
        spans[index].classList.add("highlight");
        index++;
        setTimeout(illuminate, 100); 
    }
}

setTimeout(illuminate,1000);

    const zoomLogo = document.getElementById("logo");
    zoomLogo.style.transform = "scale(1.2)";
    setTimeout(() => {
        zoomLogo.style.transform = "scale(1)";
    }, 1700);


    function searchMovie() {
        const query = document.getElementById("searchInput").value.trim();
        if (query) {
            window.location.href = `result.html?query=${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a movie title to search.");
        }
    }
    
    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchMovie(); 
        }
    });

    document.getElementById("searchButton").addEventListener("click", function () {
        searchMovie(); 
    });