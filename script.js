document.getElementById("bg-color").addEventListener("change", function () {
    document.getElementById("banner").style.backgroundColor = this.value;
});

document.getElementById("text-input").addEventListener("input", function () {
    document.getElementById("banner-text").textContent = this.value;
});

document.getElementById("image-input").addEventListener("input", function () {
    let newSrc = this.value;
    document.getElementById("banner-image").src = newSrc;
});

