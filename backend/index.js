// File: backend/index.js
const express = require('express');
const cors = require('cors');
const { sql } = require('@vercel/postgres'); // Gunakan jika konek database
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Static test route
app.get('/', (req, res) => {
  res.send('Putu Satwika Dewi Adnyani');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

// Static CV route
app.get('/api/cv', (req, res) => {
  res.json({ name: 'Satwika', role: 'Frontend Developer' });
});

// Dummy Education Data (tanpa DB dulu)
app.get('/api/education', (req, res) => {
  res.json([
    { school: "Universitas Amikom Yogyakarta", major: "Informatika", period: "2023 - Sekarang" },
    { school: "SMA Negeri 1 Kabupaten Sorong", major: "IPA", period: "2021 - 2023" },
    { school: "SMP Negeri 1 Kabupaten Sorong", period: "2018 - 2021" },
    { school: "SD Negeri 1 Kabupaten Blora", period: "2015 - 2016" },
    { school: "SD Impres 13 Kabupaten Sorong", period: "2011 - 2017" },
    { school: "TK Santo Bernadus Kabupaten Sorong", period: "2009 - 2011" }
  ]);
});

// Dummy Skills
app.get('/api/skills', (req, res) => {
  res.json([
    "HTML", "CSS", "JavaScript",
    "Tailwind", "Bootstrap", 
    "ReactJS", "Laravel",
    "Figma", "MySQL", "Firebase"
  ]);
});

// Dummy Projects
app.get('/api/projects', (req, res) => {
  res.json([
    { name: "Portofolio Website", tech: ["HTML", "Tailwind", "JS"] },
    { name: "Login System", tech: ["Laravel", "MySQL"] },
  ]);
});

// Run server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});