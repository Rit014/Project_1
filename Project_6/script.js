
let renderData = document.querySelector(".data");
let renderCartData = document.querySelector(".renderCartData");
let cartValue = document.querySelector(".change-count");
let totalPrice = document.getElementById("total_price");
let tContainer = document.querySelector(".tContainer");
let line = document.querySelector(".line");
let emptyCart = document.querySelector(".emptyCart");
let cItems = document.querySelector(".cItems");
let emptyC = false;
let arr = [];
let calculateTotal = [];

// fetch data from api

async function getData(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);

    data.map((ele) => {
        let productMainDiv = document.createElement("div");
        let createImgEle = document.createElement("img");
        let createTitle = document.createElement("p");
        let createPriceEle = document.createElement("p");
        let btnEle = document.createElement("button");
        let btnText = document.createTextNode("Add to Cart");
        let createPriceText = document.createTextNode(`Price $4${ele.price}`);
        let createTextTitle = document.createTextNode(`${ele.title.slice(0,35)}...`);
        createImgEle.setAttribute("src", ele.image);
        renderData.appendChild(createImgEle);
        createImgEle.setAttribute("class", "myImages");
        productMainDiv.setAttribute("class", "box-main")
        createTitle.appendChild(createTextTitle);
        createPriceEle.setAttribute("class", "price-element");
        btnEle.setAttribute("class", "btn-element");
        createPriceEle.appendChild(createPriceText)
        createTitle.setAttribute("class", "productTitle")
        btnEle.appendChild(btnText);
        productMainDiv.appendChild(createImgEle)
        productMainDiv.appendChild(createTitle)
        productMainDiv.appendChild(createPriceEle)
        renderData.appendChild(productMainDiv)
        productMainDiv.appendChild(btnEle)

        function addToCart(img, price){
            arr.push({ii : img, pp : price});
            alert("Product Addded to Cart")
            cartValue.innerHTML++;
            emptyC = true;
            if(emptyC){
                cItems.style.display = "flex";
                emptyCart.style.display = "none";
            }
            let cartMainDiv = document.createElement("div");
            let cartImgEle = document.createElement("img");
            let cartTrashbBtn = document.createElement("i");
            cartTrashbBtn.setAttribute("class", "fa-solid fa-trash");
            tContainer.style.display = "flex";
            line.style.display = "block";
            function deleteItem(){
                cartMainDiv.remove();
                cartValue.innerHTML--;
            }
            cartTrashbBtn.addEventListener("click", deleteItem);
            cartImgEle.setAttribute("src", img);
            cartImgEle.setAttribute("class", "cartImgElement");
            cartMainDiv.setAttribute("class", "cart-styling");
            let cartPriceEle = document.createElement("p");
            let createPriceText = document.createTextNode(`$${price}`);
            cartPriceEle.setAttribute("class", "cart-price");
            cartPriceEle.appendChild(createPriceText);
            cartMainDiv.appendChild(cartImgEle);
            cartMainDiv.appendChild(cartPriceEle);
            cartMainDiv.appendChild(cartTrashbBtn);
            renderCartData.appendChild(cartMainDiv);
            calculateTotal.push(price);
            let myTotal = calculateTotal.reduce((accum, curVal) => {
                return accum + curVal;
            })

            totalPrice.innerHTML = `Totoal Price : $${myTotal}`
        }

        btnEle.addEventListener("click", () =>  addToCart(ele.image, ele.price));
    })
}

getData();