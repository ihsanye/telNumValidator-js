const telNumber = document.getElementById("user-input");
const checker = document.getElementById("check-btn");
const clearer = document.getElementById("clear-btn");
const sonuc = document.getElementById("results-div");

checker.addEventListener("click", () => {

    if (telNumber.value === "") {
        alert("Please provide a phone number");
    } else {
        const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/g;
        if (regex.test(telNumber.value)) {
            sonuc.innerText = `Valid US number: ${telNumber.value}`;
        } else {
            sonuc.innerText = `Invalid US number: ${telNumber.value}`;
        }
    }
})

clearer.addEventListener("click", () => {
    sonuc.innerText = "";
})