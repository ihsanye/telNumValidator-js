const telNumber = document.getElementById("user-input");
const checker = document.getElementById("check-btn");
const clearer = document.getElementById("clear-btn");
const sonuc = document.getElementById("results-div");

checker.addEventListener("click", () => {

    if (telNumber.value === "") {
        alert("Please provide a phone number");
    }
})

clearer.addEventListener("click", () => {
    sonuc.innerText = "";
})