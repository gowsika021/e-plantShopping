// 1. Calculate total amount for all products in the cart
const calculateTotalAmount = () => {
  return cart.reduce((total, item) => {
    const costNum = parseFloat(item.cost.replace('$', ''));
    return total + costNum * item.quantity;
  }, 0);
};

// 2. Continue shopping handler
const handleContinueShopping = (e) => {
  if (onContinueShopping) {
    onContinueShopping(e);
  }
};

// 3. Checkout handler
const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};

// 4. Increment quantity handler
const handleIncrement = (item) => {
  dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
};

// 5. Decrement quantity handler
const handleDecrement = (item) => {
  if (item.quantity > 1) {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  } else {
    dispatch(removeItem(item.name));
  }
};

// 6. Remove item handler
const handleRemove = (item) => {
  dispatch(removeItem(item.name));
};

// 7. Calculate subtotal for an individual item
const calculateTotalCost = (item) => {
  const costNum = parseFloat(item.cost.replace('$', ''));
  return costNum * item.quantity;
};
