const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Static profile data
const profile = {
  bio: "I'm Joe Greyson, a creative frontend developer passionate about building interactive user experiences.",
  skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design"],
  social: {
    github: "https://github.com/joe-greyson",
    insta: "https://instagram.com/joe.greyson",
    linkedin: "https://linkedin.com/in/joe-greyson"
  }
};

// API endpoints
app.get('/api/profile', (req, res) => res.json(profile));

app.post('/api/contact', (req, res) => {
  console.log("New message received:", req.body);
  res.status(200).send("Thank you for reaching out!");
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));