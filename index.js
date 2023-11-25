import React, { useState } from 'react';

const NewOrderForm = () => {
  const [supplier, setSupplier] = useState('');
  const [shippingDate, setShippingDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('Pending');
  const [products, setProducts] = useState([]);

  const handleSupplierChange = (event) => {
    setSupplier(event.target.value);
  };

  const handleShippingDateChange = (event) => {
    setShippingDate(event.target.value);
  };

  const handleTotalPriceChange = (event) => {
    setTotalPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleProductChange = (event) => {
    const product = {
      name: event.target.name,
      brand: event.target.brand,
      price: event.target.price,
      quantity: event.target.quantity,
      total: event.target.total,
    };

    setProducts([...products, product]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      supplier,
      shippingDate,
      totalPrice,
      category,
      department,
      status,
      products,
    };

    try {
      // Submit the new order to the API
      fetch('https://api.example.com/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Order created successfully:', data);
        });
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Supplier:</label>
      <input type="text" name="supplier" value={supplier} onChange={handleSupplierChange} required />

      <label>Shipping Date:</label>
      <input type="date" name="shippingDate" value={shippingDate} onChange={handleShippingDateChange} required />

      <label>Total Price:</label>
      <input type="number" name="totalPrice" value={totalPrice} onChange={handleTotalPriceChange} required />

      <label>Category:</label>
      <select name="category" value={category} onChange={handleCategoryChange} required>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="homeGoods">Home Goods</option>
      </select>

      <label>Department:</label>
      <select name="department" value={department} onChange={handleDepartmentChange} required>
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
        <option value="engineering">Engineering</option>
      </select>

      <label>Status:</label>
      <select name="status" value={status} onChange={handleStatusChange} required>
        <option value="pending">Pending</option>
        <option value="inProgress">In Progress</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>

      <label>Products:</label>
      {products.map((product) => (
        <div key={product.name}>
          <label>Product Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleProductChange} required />

          <label>Brand:</label>
          <input type="text"
