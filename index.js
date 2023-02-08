
document.getElementById("age").addEventListener("input", () => {
    let text = document.getElementById("r");
    let val = parseInt(document.getElementById("age").value);

    if (val < 18) {

        text.style.color = "red";
        text.innerHTML = "Sorry,your age is under 18";
    } else {
        text.innerHTML = ""
    }
});