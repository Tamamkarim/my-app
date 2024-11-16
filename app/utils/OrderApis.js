
const createOrder = async (orderDetails) => {
  console.log('Order object before post:', orderDetails);
  try {
    const response = await someService.post('/orders', orderDetails);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
  }
};


