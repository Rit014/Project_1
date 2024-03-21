let place_order = document.getElementById("place_order");
let name = document.getElementById("name");
let city = document.getElementById("city");
let number = document.getElementById("number");
let email = document.getElementById("email");
let address = document.getElementById("address");


function placeOrder(){
    if(name.value && city.value && number.value && email.value && address.value){
        alert("Place Order Successfully!!!");
        window.location.href = "index.html";
    }else{
        alert("Please Fill Out All Fields!!!");
    }
}
place_order.addEventListener("click", placeOrder);