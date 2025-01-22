import React, { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(() => {
      alert('Product added!');
      setProduct({ name: '', price: '', description: '' }); // Reset form
    }).catch(err => console.error('Error adding product:', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={product.description} onChange={handleChange} required></textarea>
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
