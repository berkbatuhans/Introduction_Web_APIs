var request = new XMLHttpRequest();

request.open('GET', 'http://hplussport.com/api/products');

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    var description = parsedData[0].description;
    console.log(description);
}

request.send();