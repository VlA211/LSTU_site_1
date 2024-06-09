var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var icon = this.querySelector(".icon");
        if (content.style.display === "block") {
            content.style.display = "none";
            icon.textContent = "+";
        } else {
            content.style.display = "block";
            icon.textContent = "-";
        }
    });
}

function scrollDown(str) {
    document.getElementById(str).scrollIntoView({behavior: 'smooth'})
}

// script.js
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.top = '-100px'; // Adjust according to header height
    } else {
        // Scroll up
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});





document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.container .list .num');

    items.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});




