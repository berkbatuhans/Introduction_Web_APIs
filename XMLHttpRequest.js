var request = new XMLHttpRequest();

request.open('GET', 'http://hplussport.com/api/products');

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    var name = parsedData[0].name;

    var products = document.createElement('li');
    products.innerHTML = name;
    document.body.appendChild(products);
}

request.send();