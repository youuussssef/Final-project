
function countdown(id, releaseDate) {
    const countDownDate = new Date(releaseDate).getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(id).innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(id).innerHTML = "Released";
        }
    }, 1000);
}

// Countdown for Assassin's Creed Shadows
countdown("countdown-ac", "Nov 12, 2024 00:00:00");

// Countdown for Star Wars Outlaws
countdown("countdown-sw", "Oct 30, 2024 00:00:00");

// Countdown for STALKER 2
countdown("countdown-st", "Sep 5, 2024 00:00:00");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});