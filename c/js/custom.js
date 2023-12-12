function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
    console.log(currentYear);
}

getCurrentYear();