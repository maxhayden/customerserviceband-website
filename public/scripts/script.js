window.onscroll = function() {scrollFunction()};

document.getElementById("toggleScroll").addEventListener("click", function () {
        document.getElementById("scrollContainer").classList.toggle("active");
        document.getElementById("toggleScroll").classList.toggle("active");
        document.getElementById("home").classList.toggle("active");
        document.getElementById("main-content").classList.toggle("opacity-50");
    });
    

document.getElementById("toggleScrollOff").addEventListener("click", function () {
  document.getElementById("scrollContainer").classList.toggle("active");
  document.getElementById("toggleScroll").classList.toggle("active");
  document.getElementById("home").classList.toggle("active");
  document.getElementById("main-content").classList.toggle("opacity-50");
});

document.getElementById("toggleScroll").addEventListener("keydown", function(event) {
  if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); 
      this.click();
  }
});
