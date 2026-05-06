const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Database initialization
const db = new sqlite3.Database('./data/swimming_school.db', (err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  db.serialize(() => {
    // Students table
    db.run(`CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      age INTEGER,
      email TEXT,
      phone TEXT,
      parent_name TEXT,
      parent_phone TEXT,
      enrollment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'active'
    )`);

    // Coaches table
    db.run(`CREATE TABLE IF NOT EXISTS coaches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      specialization TEXT,
      experience_years INTEGER,
      email TEXT,
      phone TEXT,
      hire_date DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Classes table
    db.run(`CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      coach_id INTEGER,
      level TEXT,
      time TEXT,
      day TEXT,
      capacity INTEGER,
      current_students INTEGER DEFAULT 0,
      FOREIGN KEY(coach_id) REFERENCES coaches(id)
    )`);

    // Attendance table
    db.run(`CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER,
      class_id INTEGER,
      attendance_date DATE,
      status TEXT,
      FOREIGN KEY(student_id) REFERENCES students(id),
      FOREIGN KEY(class_id) REFERENCES classes(id)
    )`);

    // Payments table
    db.run(`CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER,
      amount REAL,
      payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      payment_type TEXT,
      status TEXT DEFAULT 'completed',
      FOREIGN KEY(student_id) REFERENCES students(id)
    )`);

    // Programs/Packages table
    db.run(`CREATE TABLE IF NOT EXISTS programs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL,
      duration_months INTEGER,
      classes_per_week INTEGER,
      level TEXT
    )`);
  });
}

// API Routes

// GET all students
app.get('/api/students', (req, res) => {
  db.all('SELECT * FROM students', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST new student
app.post('/api/students', (req, res) => {
  const { name, age, email, phone, parent_name, parent_phone } = req.body;
  db.run(
    'INSERT INTO students (name, age, email, phone, parent_name, parent_phone) VALUES (?, ?, ?, ?, ?, ?)',
    [name, age, email, phone, parent_name, parent_phone],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Student added successfully' });
    }
  );
});

// GET all coaches
app.get('/api/coaches', (req, res) => {
  db.all('SELECT * FROM coaches', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST new coach
app.post('/api/coaches', (req, res) => {
  const { name, specialization, experience_years, email, phone } = req.body;
  db.run(
    'INSERT INTO coaches (name, specialization, experience_years, email, phone) VALUES (?, ?, ?, ?, ?)',
    [name, specialization, experience_years, email, phone],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Coach added successfully' });
    }
  );
});

// GET all classes
app.get('/api/classes', (req, res) => {
  db.all('SELECT c.*, co.name as coach_name FROM classes c LEFT JOIN coaches co ON c.coach_id = co.id', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// GET all programs/packages
app.get('/api/programs', (req, res) => {
  db.all('SELECT * FROM programs', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// GET all payments
app.get('/api/payments', (req, res) => {
  db.all('SELECT p.*, s.name as student_name FROM payments p LEFT JOIN students s ON p.student_id = s.id', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST new payment
app.post('/api/payments', (req, res) => {
  const { student_id, amount, payment_type } = req.body;
  db.run(
    'INSERT INTO payments (student_id, amount, payment_type) VALUES (?, ?, ?)',
    [student_id, amount, payment_type],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, message: 'Payment recorded successfully' });
    }
  );
});

// Serve static files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Swimming School Management Server running on port ${PORT}`);
});
