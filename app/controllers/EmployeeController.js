const Employee = require('../models/Employee');

// Fungsi untuk membuat data karyawan baru
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Gagal membuat data karyawan' });
  }
};

// Fungsi untuk mendapatkan semua data karyawan
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data karyawan' });
  }
};