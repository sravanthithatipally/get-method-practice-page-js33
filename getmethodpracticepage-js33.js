let btnele = document.getElementById("sendGetRequestBtn");
let statusele = document.getElementById("requestStatus");
let bodyele = document.getElementById("httpResponse");

btnele.addEventListener("click", function togetoutput() {
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.status;
        })
        .then(function(status) {
            statusele.textContent = status;
        });

    fetch(url, options)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            bodyele.textContent = data;
        });

});