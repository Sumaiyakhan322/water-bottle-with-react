

const getStoreCart=()=>{
 const storeCartString=  localStorage.getItem('cart')
 if(storeCartString){
    return JSON.parse(storeCartString)
 }
 return []

}
const safetolc=(cart)=>{
    const cartString=JSON.stringify(cart)
    localStorage.setItem('cart',cartString)
}
const addCart=(id)=>{
    const cart=getStoreCart()
    cart.push(id)
  safetolc(cart);
    
}
export{addCart,getStoreCart}