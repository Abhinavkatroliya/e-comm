//for Add Items to Cart

export const addCart = (product) => {
    return {
        type : "ADDITEM",
    payload : product
    }
}

// for Delete Item from Cart
export const delCart = (product) => {
    return {
        type : "DELITEM" ,
    payload : product
    }
}