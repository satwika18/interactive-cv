// File: backend/index.js  
const express = require('express');  
const cors = require('cors');  
const { sql } = require('@vercel/postgres'); 
const app = express();
const PORT = process.env.PORT || 3000; // Pakai env di Vercel, default 3000 di local
  
app.use(cors());  
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Putu satwika Dewi Adnyani');
});

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.get('/api/cv', (req, res) => {
  res.json({ name: 'Satwika', role: 'Frontend Developer' });
});

// Endpoint API yang akan mengambil data dari Database  
app.get('/api/education', async (req, res) => {  
  try {   
    const { rows } = await sql`SELECT * FROM education ORDER BY period  DESC;`;   
    res.status(200).json(rows);  
  } catch (error) {  
    res.status(500).json({ error: 'Gagal mengambil data pendidikan' });  
  }  
});  
app.get('/api/skills', async (req, res) => {  
  try {   
    const { rows } = await sql`SELECT * FROM skills;`;   
    res.status(200).json(rows);  
  } catch (error) {  
    res.status(500).json({ error: 'Gagal mengambil data skill' }); 
 }  
});  
app.get('/api/projects', async (req, res) => {  
  try {  
    const { rows } = await sql`SELECT * FROM projects;`;   
    res.status(200).json(rows);   
  } catch (error) {  
    res.status(500).json({ error: 'Gagal mengambil data proyek' });  
  }  
});  
// Wajib ada agar Vercel bisa menjalankan backend  
module.exports = app;  

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});