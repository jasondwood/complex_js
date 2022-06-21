import {  products} from "../products.js"

// read info on ONE product, by its ID

export function getProductById(id) {
    var product_match = false;
    for(let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            product_match= true;
            return products[i];
        }
    }
    if(!product_match){
        return "No ID found";
    }
}

export function removeProductId(id) {
    let product_match = false;
    for(let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            product_match=true;
            products.splice(i, 1);
            console.log("Removed user ID " + id)
            break;
        }
    
    }
    console.log(products);
}


// read info on ALL products