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

// Define routes

// Home route
app.get('/', (req, res) => {
  res.render('student council', { title: 'Home Page' });
});

// Member routes
app.get('/members', (req, res) => {
  res.render('OurTeam', { title: 'Member Page' });
});

// Faculty route
app.get('/faculty', (req, res) => {
  res.render('FaculityPage', { title: 'Faculty Page' });
});

// Clubs route
app.get('/clubs', (req, res) => {
  res.render('Ourclubs', { title: 'Clubs Page' });
});

// Gallery route
app.get('/gallery', (req, res) => {
  res.render('Gallery', { title: 'Gallery Page' });
});

// Coding Club route
app.get('/coding', (req, res) => {
  res.render('Coding club', { title: 'Coding Club Page' });
});

// Drone Club route
app.get('/drone', (req, res) => {
  res.render('drone club', { title: 'Drone Club Page' });
});

// Media Fusion route
app.get('/media', (req, res) => {
  res.render('mediafusion', { title: 'Media Fusion Page' });
});

// Cultural Club route
app.get('/Cultrul', (req, res) => {
  res.render('Cultrul', { title: 'Cultural Club Page' });
});

// Robotics Club route
app.get('/Robotics', (req, res) => {
  res.render('Robotics', { title: 'Robotics Club Page' });
});

// Entrepreneurship Club route
app.get('/entrepreneurship', (req, res) => {
  res.render('entrepreneurship club', { title: 'Entrepreneurship Club Page' });
});

// Literary Club route
app.get('/Literary', (req, res) => {
  res.render('Literary club', { title: 'Literary Club Page' });
});

// Renewable Energy route
app.get('/Renewable', (req, res) => {
  res.render('Renewable energy', { title: 'Renewable Energy Page' });
});

// Discipline Club route
app.get('/Disipline', (req, res) => {
  res.render('Disipline club', { title: 'Discipline Club Page' });
});

// Alumni Relation Club route
app.get('/Alimni', (req, res) => {
  res.render('Alimni relation club', { title: 'Alumni Relation Club Page' });
});

// Tech Wizards route
app.get('/Tech', (req, res) => {
  res.render('Tech wizards', { title: 'Tech Wizards Club Page' });
});

// EV Club route
app.get('/EV', (req, res) => {
  res.render('EV', { title: 'EV Club Page' });
});

// Music Club route
app.get('/music', (req, res) => {
  res.render('music', { title: 'Music Club Page' });
});

// Dance Club route
app.get('/Dance', (req, res) => {
  res.render('Dance', { title: 'Dance Club Page' });
});

// IEEE Student Chapter route
app.get('/IEEE Student chapter', (req, res) => {
  res.render('IEEE Student chapter', { title: 'IEEE Student Chapter Page' });
});

// Developer route
app.get('/Dev', (req, res) => {
  res.render('Dev team', { title: 'Developer Page' });
});

// Form route
app.get('/form', (req, res) => {
  res.render('form', { title: 'Form Page' });
});

// Event details route
app.get('/event', (req, res) => {
  res.render('Event Details', { title: 'Event Page' });
});

// Event details route
app.get('/eventcoding', (req, res) => {
  res.render('Anwesha Event/codeclash', { title: 'Event Page' });
});

// Event details dance route

app.get('/eventdance', (req, res) => {
  res.render('Anwesha Event/flash clash', { title: 'Event Page' });
});

// Event details renewable route

// Blog route (placeholder)
app.get('/blog', (req, res) => {
  res.send('Blog page coming soon!');
});

// Catch-all route for undefined routes (404 errors)
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
