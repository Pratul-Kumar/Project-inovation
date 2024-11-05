
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route

//home route
app.get('/', (req, res) => {
  res.render('student council', { title: 'Home Page' });
});

//member routes
app.get('/members', (req, res) => {
  res.render('OurTeam', { title: 'Member Page' });
});

//facauty routes

app.get('/faculty', (req, res) => {
  res.render('FaculityPage', { title: 'Faculty Page' });
});

//gallary routes

app.get('/gallery', (req, res) => {
  res.render('Gallery', { title: 'Gallery Page' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
