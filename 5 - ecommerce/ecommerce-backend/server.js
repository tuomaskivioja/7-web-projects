const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // middleware to parse HTTP POST data

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We're connected to the database!");
});

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

// Product Model
const Product = mongoose.model('Product', productSchema);

// Routes
// Display all products
app.get('/', async (req, res) => {
    const products = await Product.find();
    res.render('index', { products });
});

// Add a product (form display)
app.get('/add-product', (req, res) => {
    res.render('add-product');
});

// Add a product (form submission)
app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/');
});

// Additional routes for updating and deleting would be similar
// Example placeholder for updating a product
app.get('/edit-product/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('edit-product', { product });
});

app.post('/update-product/:id', async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
});

// Example placeholder for deleting a product
app.post('/delete-product/:id', async (req, res) => {
    await Product.findByIdAndRemove(req.params.id);
    res.redirect('/');
});

// Start the server
app.listen(3000, () => console.log('Server started on http://localhost:5000'));
