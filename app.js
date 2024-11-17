console.log("hello world");
let div = document.querySelector(".container")
// let button = document.querySelector("#button")
// console.log(button);

async function GetData(params) {
    
    try {
        const response =  await fetch("https://dummyjson.com/products")
    // console.log(Promise1);
    const json = await response.json();
    console.log(json.products);
    json.products.map((item)=>{
        return div.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <img src="${item.thumbnail}" class="card-img-top" alt="...">
        <hr />
        <div class="card-body">
        <h6 class="Item-category">${item.category}</h6>
          <h5 class="card-title">${item.title}</h5>
          <p class="card-discription">${item.description}</p>
          <h6>InStock : ${item.stock}</h6>
         <h6>Price : ${item.price} PKR</h6><hr>
         <div class="card-inside"><button class="btn" onclick="seeMore(${item.id})">See More</button></div>
          
          
        </div>
    
      </div>`
        
    })
    // <button>${item.category}</button>
    
    } catch (error) {
        console.log(error);
        
    }
}
GetData()






function seeMore(id){
    // console.log(id);
    window.location="new.html"
    
    if (localStorage.getItem("Id",id)){
        localStorage.removeItem("Id",id)
        localStorage.setItem("Id",id)

    }else{
        localStorage.setItem("Id",id)
    }
    
    // if(localStorage.getItem("id",id))
    
}










