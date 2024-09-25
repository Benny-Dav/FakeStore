fetch("https://fakestoreapi.com/products") 
.then(function(response){
     return response.json();
})
.then(function(data) {
    console.table(data);
    for (const product of data){
        const productDiv = document.createElement("div");

        //creating img element and putting in div
        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.image);
        productImg.setAttribute("alt",product.title);
        productImg.classList.add("product-img")
        productDiv.appendChild(productImg);

        //creating h1 element and putting in div
        const productTitle = document.createElement("h1");
        productTitle.textContent = product.title;
        productDiv.appendChild(productTitle);

        //creating p element and putting in div
        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription); 

        //Putting whole img div into container div
        document.querySelector("#products").appendChild(productDiv);

    }
})