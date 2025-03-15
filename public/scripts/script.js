window.onscroll = function () { scrollFunction() };

document.getElementById("toggleScroll").addEventListener("click", function () {
    document.getElementById("scrollContainer").classList.toggle("active");
    document.getElementById("toggleScroll").classList.toggle("active");
    document.getElementById("home").classList.toggle("active");

});

document.getElementById("home").addEventListener("click", function () {
    document.getElementById("scrollContainer").classList.remove("active");
    document.getElementById("toggleScroll").classList.remove("active");
    document.getElementById("home").classList.add("active");

});

document.getElementById("toggleScrollOff").addEventListener("click", function () {
    document.getElementById("scrollContainer").classList.toggle("active");
    document.getElementById("toggleScroll").classList.toggle("active");
    document.getElementById("home").classList.toggle("active");
});

document.getElementById("toggleScroll").addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.click();
    }
});

document.getElementById("home").addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.click();
    }
});

