const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'grid'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'grid'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "grid"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}

// buttons


const add = document.getElementsByClassName("add");
const sub =document.getElementsByClassName("sub");

// increment value

for(var i =0; i < add.length; i++){
 var button =add[i];
 
 button.addEventListener("click",function(e){
      var btnclick = e.target;
    
      var input = btnclick.parentElement.children[5];
      console.log(input)
      var inputValue = input.value;
      var newVal = parseInt(inputValue) + 1;
      input.value = newVal;

 })
}

// decrement value 

for(var i =0; i < sub.length; i++){
    var button =sub[i];
    
    button.addEventListener("click",function(e){
         var btnclick = e.target;
         var input = btnclick.parentElement.children[5];
   
         var inputValue = input.value;
         var newVal = parseInt(inputValue) - 1;
       if(newVal >= 0){
        
        input.value = newVal
       }else{
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Quanity can not be less than zero!',
          
          })
           input.value = 0;
       }
   
    })
   }


 const addToCard = document.getElementsByClassName("addToCard")[0];
 console.log(addToCard)
addToCard.addEventListener("click",()=>{
   
    Swal.fire({
        icon:"info",
        position: 'top-end',
        title: 'Sorry',
        text: 'Your cart is empty',
        padding:"0",
        background:"#eee"
      })
})