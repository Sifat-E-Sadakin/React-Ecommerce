import { getShoppingCart } from "../../../utilities/fakedb";

let loadCart = async()=>{
    let productInCart= await fetch('products.json');
    let products= await productInCart.json();

    let storedCart = getShoppingCart();
    // console.log(storedCart);
    let addedProducts=[]

    for (const id in storedCart) {

       let selectedProduct = products.find(product=> product.id==id );
       if(selectedProduct){
        let quantity= storedCart[id];
        selectedProduct.quantity= quantity;
        addedProducts.push(selectedProduct);
       }

        
    }
   

    return addedProducts;
}

export {loadCart}