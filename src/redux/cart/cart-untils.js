export const addItemCart= (cart, product)=>{
    const exsists=cart.find(item=> item.id === product.id)
    if (exsists){
        return cart.map(item=>item.id === exsists.id ? {
            ...item,
            quantity: item.quantity +1,
        }: item);
    }
    return [...cart, {...product, quantity: 1}]
}