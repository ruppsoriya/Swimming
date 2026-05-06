// Admin JavaScript
const API_URL = 'http://localhost:5000/api';

// Show tab
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
        
        // Update menu
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => item.classList.remove('active'));
        event.target.closest('.menu-item').classList.add('active');

        // Load data
        switch(tabName) {
            case 'students':
                loadStudents();
                break;
            case 'coaches':
                loadCoaches();
                break;
            case 'classes':
                loadClasses();
                break;
            case 'payments':
                loadPayments();
                break;
            case 'dashboard':
                loadDashboardStats();
                break;
        }
    }
}

// Load dashboard stats
function loadDashboardStats() {
    fetch(`${API_URL}/students`)
        .then(r => r.json())
        .then(data => {
            document.getElementById('total-students').textContent = data.length;
        })
        .catch(e => console.error('Error loading students:', e));

    fetch(`${API_URL}/coaches`)
        .then(r => r.json())
        .then(data => {
            document.getElementById('total-coaches').textContent = data.length;
        })
        .catch(e => console.error('Error loading coaches:', e));

    fetch(`${API_URL}/classes`)
        .then(r => r.json())
        .then(data => {
            document.getElementById('total-classes').textContent = data.length;
        })
        .catch(e => console.error('Error loading classes:', e));

    fetch(`${API_URL}/payments`)
        .then(r => r.json())
        .then(data => {
            const total = data.reduce((sum, p) => sum + p.amount, 0);
            document.getElementById('total-revenue').textContent = `$${total.toFixed(2)}`;
        })
        .catch(e => console.error('Error loading payments:', e));
}

// Load students
function loadStudents() {
    fetch(`${API_URL}/students`)
        .then(r => r.json())
        .then(data => {
            const tbody = document.getElementById('students-tbody');
            tbody.innerHTML = '';
            
            data.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.age || '-'}</td>
                    <td>${student.email || '-'}</td>
                    <td>${student.phone || '-'}</td>
                    <td>${student.parent_name || '-'}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn-edit" onclick="editStudent(${student.id})">កែប្រែ</button>
                            <button class="btn-danger" onclick="deleteStudent(${student.id})">លុប</button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(e => console.error('Error loading students:', e));
}

// Load coaches
function loadCoaches() {
    fetch(`${API_URL}/coaches`)
        .then(r => r.json())
        .then(data => {
            const tbody = document.getElementById('coaches-tbody');
            tbody.innerHTML = '';
            
            data.forEach(coach => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${coach.name}</td>
                    <td>${coach.specialization || '-'}</td>
                    <td>${coach.experience_years || '-'}</td>
                    <td>${coach.email || '-'}</td>
                    <td>${coach.phone || '-'}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn-edit" onclick="editCoach(${coach.id})">កែប្រែ</button>
                            <button class="btn-danger" onclick="deleteCoach(${coach.id})">លុប</button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(e => console.error('Error loading coaches:', e));
}

// Load classes
function loadClasses() {
    fetch(`${API_URL}/classes`)
        .then(r => r.json())
        .then(data => {
            const tbody = document.getElementById('classes-tbody');
            tbody.innerHTML = '';
            
            data.forEach(cls => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${cls.name}</td>
                    <td>${cls.coach_name || '-'}</td>
                    <td>${cls.level || '-'}</td>
                    <td>${cls.time || '-'}</td>
                    <td>${cls.day || '-'}</td>
                    <td>${cls.current_students}/${cls.capacity}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(e => console.error('Error loading classes:', e));
}

// Load payments
function loadPayments() {
    fetch(`${API_URL}/payments`)
        .then(r => r.json())
        .then(data => {
            const tbody = document.getElementById('payments-tbody');
            tbody.innerHTML = '';
            
            data.forEach(payment => {
                const row = document.createElement('tr');
                const date = new Date(payment.payment_date).toLocaleDateString('km-KH');
                row.innerHTML = `
                    <td>${payment.student_name}</td>
                    <td>$${payment.amount.toFixed(2)}</td>
                    <td>${payment.payment_type}</td>
                    <td>${date}</td>
                    <td><span style="color: green;">${payment.status}</span></td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(e => console.error('Error loading payments:', e));
}

// Show add student form
function showAddStudentForm() {
    const form = document.getElementById('student-form');
    form.style.display = 'block';
    
    const form_element = form.querySelector('form') || form;
    form_element.onsubmit = function(e) {
        e.preventDefault();
        addStudent();
    };
}

// Add student
function addStudent() {
    const data = {
        name: document.getElementById('student-name').value,
        age: parseInt(document.getElementById('student-age').value),
        email: document.getElementById('student-email').value,
        phone: document.getElementById('student-phone').value,
        parent_name: document.getElementById('parent-name').value,
        parent_phone: document.getElementById('parent-phone').value
    };

    fetch(`${API_URL}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(result => {
        alert('សិស្សបានបន្ថែមដោយជោគជ័យ');
        hideForm('student-form');
        loadStudents();
    })
    .catch(e => console.error('Error adding student:', e));
}

// Show add coach form
function showAddCoachForm() {
    const form = document.getElementById('coach-form');
    form.style.display = 'block';
    
    const form_element = form.querySelector('form') || form;
    form_element.onsubmit = function(e) {
        e.preventDefault();
        addCoach();
    };
}

// Add coach
function addCoach() {
    const data = {
        name: document.getElementById('coach-name').value,
        specialization: document.getElementById('coach-specialization').value,
        experience_years: parseInt(document.getElementById('coach-experience').value),
        email: document.getElementById('coach-email').value,
        phone: document.getElementById('coach-phone').value
    };

    fetch(`${API_URL}/coaches`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(result => {
        alert('គ្រូបានបន្ថែមដោយជោគជ័យ');
        hideForm('coach-form');
        loadCoaches();
    })
    .catch(e => console.error('Error adding coach:', e));
}

// Hide form
function hideForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = 'none';
    form.reset();
}

// Delete student
function deleteStudent(id) {
    if (confirm('តើអ្នកប្រាកដថាចង់លុបនេះ?')) {
        // TODO: Implement delete via API
        alert('លុបសិស្ស ID: ' + id);
    }
}

// Delete coach
function deleteCoach(id) {
    if (confirm('តើអ្នកប្រាកដថាចង់លុបនេះ?')) {
        // TODO: Implement delete via API
        alert('លុបគ្រូ ID: ' + id);
    }
}

// Edit student
function editStudent(id) {
    alert('កែប្រែសិស្ស ID: ' + id);
}

// Edit coach
function editCoach(id) {
    alert('កែប្រែគ្រូ ID: ' + id);
}

// Logout
function logout() {
    if (confirm('តើអ្នកប្រាកដថាចង់ចាកចេញ?')) {
        window.location.href = 'index.html';
    }
}

// Initialize - Load dashboard on page load
document.addEventListener('DOMContentLoaded', () => {
    loadDashboardStats();
    
    // Handle form submissions
    const studentForm = document.getElementById('student-form');
    if (studentForm) {
        studentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            addStudent();
        });
    }

    const coachForm = document.getElementById('coach-form');
    if (coachForm) {
        coachForm.addEventListener('submit', (e) => {
            e.preventDefault();
            addCoach();
        });
    }
});
