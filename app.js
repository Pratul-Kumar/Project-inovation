
const express = require('express');
const path = require('path');
const { title } = require('process');

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

//clubs routes

app.get('/clubs', (req, res) => {
  res.render('Ourclubs', { title: 'Clubs Page' });
});



//gallary routes

app.get('/gallery', (req, res) => {
  res.render('Gallery', { title: 'Gallery Page' });
});

//coding club route

app.get('/coding', (req, res) => {
  res.render('Coding club', { title: 'Coding Club Page' });
});

//drone club route
app.get('/drone',(req, res) => {
  res.render('drone club', { title: 'Drone Club Page' });
});

//media fussion route
app.get('/media',(req,res)=>{
  res.render('mediafusion', { title: 'Media Fusion Page' });
})

//cultrual club route
app.get('/Cultrul',(req,res)=>{
  res.render('Cultrul', { title: 'Media Fusion Page' });
})

//robotic club route
app.get('/Robotics',(req,res)=>{
  res.render('Robotics', { title: 'Media Fusion Page' });
})

//entrepreneurship club route
app.get('/entrepreneurship',(req,res)=>{
  res.render('entrepreneurship club', { title: 'Entrepreneurship Club Page' });
})

///Literary club  route
app.get('/Literary',(req,res)=>{
  res.render('Literary club', { title: 'Literary Club Page' });
})

//Renewable energy route
app.get('/Renewable',(req,res)=>{
  res.render('Renewable energy', { title: 'Renewable Energy Page' });
})

// Start the server


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
