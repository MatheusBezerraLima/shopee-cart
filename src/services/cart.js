// Assinaturas dos métodos

// CASOS DE USO:

// adicionar item do carrinho
const addItem = async(userCart, item) => {
    userCart.push(item)
}

// calcular o total do carrinho
const calculateTotal = async(userCart) => {
    console.log("\n 🛒 Shopee cart TOTAL IS: R$ " +
        userCart.reduce((total, item) => total + item.subtotal(), 0)
    );
}

// deletar item do carrinho
const deleteItem = async(userCart, nameItem) => {
    const index = userCart.findIndex((item) =>  item.name === nameItem)

    if (index != -1) {
        userCart.splice(index, 1)
    }
}
// remover um item - diminui um item do carrinho
const removeItem = async(userCart, item) =>{

    // 1. Encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    // 2. Caso nao encontre o item
    if(indexFound === -1){
        console.log("Item nao encontrado");
        return
    }

    // 3. item > 1 subtrai um item, item = 1 remove o item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        userCart[indexFound].subtotal = () => userCart[indexFound].price * userCart[indexFound].quantity;
        return
    }

    // Remove o item do carrinho
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1)
        return
    }
}

const addQuantityItem = async(userCart, item) => {
      // 1. Encontrar o indice do item
      const indexFound = userCart.findIndex((p) => p.name === item.name)

      // 2. Caso nao encontre o item
      if(indexFound === -1){
          console.log("Item nao encontrado");
          return
      }else{
        userCart[indexFound].subtotal = () => userCart[indexFound].price * userCart[indexFound].quantity;
        userCart[indexFound].quantity += 1
      }
  
}

const displayCart = async(userCart) => {
    console.log("\n 📃 Shopee cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`);
        
    })
    
}


export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart,
    addQuantityItem,
}