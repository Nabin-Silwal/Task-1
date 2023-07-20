const express = require('express');
const products = require('../productsData');

const router = express.Router();


// GET all products
router.get('/products', (req, res) => {
    res.json(products);
  });
  
  // GET a single product by ID
  router.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
  
// POST a new product
router.post('/products/add', (req, res) => {
  const { id, name, price } = req.body;

  if (!id || !name || !price) {
    res.status(400).json({ message: 'Invalid product data' });
  } else {
    const newProduct = { id, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  }
});

  
  // PUT (update) an existing product by ID
  router.put('/products/:id', express.json(), (req, res) => {
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;
    const index = products.findIndex((p) => p.id === id);
  
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      res.json(products[index]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
  
 
 // DELETE a product by ID
router.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});


module.exports = router;
