//  CASOS DE USO:

// Criar item com subtotal certo
const createItem = async(name, price, quantity) => {
    return{
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;