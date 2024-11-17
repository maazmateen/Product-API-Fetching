let div2 = document.querySelector(".Product")

// console.log(newProduct);

async function GetData(params) {
    
    try {
        const newProduct = localStorage.getItem("Id");
        console.log(newProduct);
        
        const response =  await fetch(`https://dummyjson.com/products/${newProduct}`)
    // console.log(Promise1);
    const json = await response.json();
    console.log(json);
    
     div2.innerHTML =`
        <div class="card" style="width: 25rem;">
        <img src="${json.thumbnail}" class="card-img-top" alt="Products">
        <hr />
        <div class="card-body">
        <h6 class="Item-category">${json.category}</h6>
        <h5 class="card-title">${json.title}</h5>
        <P>More About This Product</P><div class="Icon-Box">
        <i class="fa-solid fa-arrow-turn-down"></i></div>
          <p class="card-discription2">${json.description}</p>
          <h6>Warranty : ${json.warrantyInformation}</h6>
          <h6>InStock : ${json.stock} Piecies</h6>
         <h6>Price : ${json.price}$</h6>
         <h6>Discount : ${json.discountPercentage}%</h6>
         <h6>Shipping Information : ${json.shippingInformation}</h6>
          
          
        </div>
      </div>`
        
    
    } catch (error) {
        console.log(error);
        
    }
}
GetData()