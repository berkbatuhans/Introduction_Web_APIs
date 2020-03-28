var request = new XMLHttpRequest();

request.open('GET', 'http://hplussport.com/api/products');

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    
    
    for (const item in parsedData) {
        var name = parsedData[item].name;
        var products = document.createElement('li');
        products.innerHTML = name;
        document.body.appendChild(products);
    }

   
}

request.onerror = function() {
    console.log("There seems to be a problem");
}

request.send();