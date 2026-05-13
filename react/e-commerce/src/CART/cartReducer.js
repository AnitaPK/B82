export const cartInitialState = {
    cart: [],
    discount: 5,
    platformFee: 100,
    deliveryCharges: 50,
    totalAmount: 0,
    len:0
}
function calculateAmount(uCart, dis, platFee, delCharge) {

    const tAmount = uCart.reduce((tamt, p) => {
        return tamt += p.productPRICE * p.productQuantity
    }, 0)

    let disAmt = tAmount - (tAmount * (dis / 100))

    let totAMT = disAmt + platFee + delCharge
    console.log(uCart,"in cartreducer calculate function")
    return {
        cart: uCart,
        discount: dis,
        platformFee: platFee,
        deliveryCharges: delCharge,
        totalAmount: totAMT,
        len:uCart.length
    }

}

export function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            console.log(action.payload,"action.payload")
            const indexOfCartProd = state.cart.findIndex(e => e.productID == action.payload.id)
            let updatedCart
            if (indexOfCartProd == -1) {
                const updatedCartProd = {
                    id: Date.now(),
                    productID: action.payload.id,
                    productNAME: action.payload.title,
                    productPRICE: action.payload.price,
                    productQuantity: 1
                }
                updatedCart = [...state.cart, updatedCartProd]
            }else{
                updatedCart = state.cart.map((e,i)=>{
                    if(e.productID == action.payload.id){
                        console.log(e,"While adding same product")
                        return {...e, productQuantity:e.productQuantity+1}
                    }
                    return e
                })
                console.log(updatedCart,"updatedCart after adding SAME")
            }
            return calculateAmount(updatedCart, state.discount, state.platformFee, state.deliveryCharges)
        }
        case "REMOVE_FROM_CART": { }
        case "QUANTITY_INCREASE": { }
        case "QUANTITY_DECREASE": { }
        case "EMPTY_CART": { }
        default:
            return state
    }
}





// { id: 1, productID: 3456, productNAME: "", productPRICE: 4567, productQuantity: 1 },
//         { id: 2, productID: 3456, productNAME: "", productPRICE: 4567, productQuantity: 2 },
   
