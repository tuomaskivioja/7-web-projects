const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// In-memory array of blog posts
const blogPosts = [
    { id: 1, title: 'First Blog Post', description: 'This is the description of the first post. It provides an overview of the content.' },
    { id: 2, title: 'Second Blog Post', description: 'The second post offers more detailed insights into a specific topic.' },
    { id: 3, title: 'Third Blog Post', description: 'The third post explores advanced concepts in a clear, approachable manner.' }
];

app.use(express.static('public'));

// Serve the index page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Endpoint to get blog posts
app.get('/posts', (req, res) => {
    res.json(blogPosts);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
