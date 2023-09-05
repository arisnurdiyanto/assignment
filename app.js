const express = require('express');
const app = express();
const employeeRoutes = require('./app/routes/employeeRoutes');

app.use(express.json());

app.use('/api', employeeRoutes);

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});