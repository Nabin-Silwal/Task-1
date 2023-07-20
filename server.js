const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', require('./routes/productRoutes'));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// let products = [
//   { id: 1, name: 'Product 1', price: 10.99 },
//   { id: 2, name: 'Product 2', price: 19.99 },
// ];

// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// app.get('/api/products/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const product = products.find((p) => p.id === id);

//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ message: 'Product not found' });
//   }
// });

// app.post('/api/products', (req, res) => {
//   const newProduct = req.body;
//   products.push(newProduct);
//   res.status(201).json(newProduct);
// });

// app.put('/api/products/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const updatedProduct = req.body;
//   const index = products.findIndex((p) => p.id === id);

//   if (index !== -1) {
//     products[index] = { ...products[index], ...updatedProduct };
//     res.json(products[index]);
//   } else {
//     res.status(404).json({ message: 'Product not found' });
//   }
// });

// app.delete('/api/products/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   products = products.filter((p) => p.id !== id);
//   res.json({ message: 'Product deleted successfully' });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
