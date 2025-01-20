const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("main-action-button").onclick = function () {
    document.getElementById("programm").scrollIntoView({behavior: "smooth"});
}


document.querySelectorAll('.programm__text').forEach(serviceText => {
    serviceText.addEventListener('click', function() {
        const link = this.querySelector('a');
        if (link) {
            window.location.href = link.href; // Перенаправление на URL ссылки
        }
    });
});