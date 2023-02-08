function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color;
}

let ele = document.getElementById("ele1")
pintar(ele);

ele.addEventListener("click", function () {
    pintar(ele, "yellow");
})
