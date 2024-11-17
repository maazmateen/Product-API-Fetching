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
        <div class="card" style="width: 18rem;">
        <img src="${json.thumbnail}" class="card-img-top" alt="...">
        <hr />
        <div class="card-body">
        <h6 class="Item-category">${json.category}</h6>
          <h5 class="card-title">${json.title}</h5>
          <p class="card-discription">${json.description}</p>
          <h6>InStock : ${json.stock}</h6>
         <h6>Price : ${json.price} PKR</h6>
          
          
        </div>
      </div>`
        
    
    } catch (error) {
        console.log(error);
        
    }
}
GetData()