//Code Your Solution Below
window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let testNameInput = document.querySelector("input[name=testName]");
        let testDateInput = document.querySelector("input[name=testDate]");
        let rocketTypeInput = document.querySelector("input[name=rocketType]");
        let boosterCountInput = document.querySelector("input[name=boosterCount]");
        let windRatingInput = document.querySelector("input[name=windRating]");
        let checkboxInput = document.querySelector("input[name=checkbox]");
        if (testNameInput.value === "" || testDateInput.value === "" || rocketTypeInput === "" || boosterCountInput === "" || windRatingInput === "" || checkboxInput === "") {
            alert("All fields are required!");
            event.preventDefault();
        }
    })





});