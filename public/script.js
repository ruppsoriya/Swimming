// API Base URL
const API_URL = 'http://localhost:5000/api';

// Sample data - will be replaced with API calls
const samplePackages = [
    {
        id: 1,
        name: 'ដើម',
        price: '$50',
        duration: '1 ខែ',
        classes: '1 ក្រុម/សប្តាហ៍',
        features: ['សមាជិកលើកម្មវិធី', 'បង្រៀនក្នុងក្រុម', 'វិភាគលក្ខណៈ']
    },
    {
        id: 2,
        name: 'ស្តង់ដារ',
        price: '$120',
        duration: '3 ខែ',
        classes: '2 ក្រុម/សប្តាហ៍',
        features: ['សមាជិកលើកម្មវិធី', 'បង្រៀនក្នុងក្រុម', 'វិភាគលក្ខណៈ', 'ដោះស្រាយលក្ខណៈ']
    },
    {
        id: 3,
        name: 'ឌីមប្រតិបត្តិ',
        price: '$250',
        duration: '6 ខែ',
        classes: '4 ក្រុម/សប្តាហ៍',
        features: ['សមាជិកលើកម្មវិធី', 'បង្រៀនក្នុងក្រុម', 'វិភាគលក្ខណៈ', 'ដោះស្រាយលក្ខណៈ', 'សិក្សាលម្អិត']
    }
];

const sampleCoaches = [
    {
        id: 1,
        name: 'សម្រាច់ម៉ាង',
        specialization: 'អ្នកក្រឹប៉ាន់កម្រិតនិង',
        experience: '៧ ឆ្នាំ',
        image: 'https://via.placeholder.com/250'
    },
    {
        id: 2,
        name: 'វាន សម្រាច់',
        specialization: 'ក្នុងក្រុមលំហាត់',
        experience: '៥ ឆ្នាំ',
        image: 'https://via.placeholder.com/250'
    },
    {
        id: 3,
        name: 'លី រលឹម',
        specialization: 'គ្រូក្នុងក្រុម',
        experience: '៦ ឆ្នាំ',
        image: 'https://via.placeholder.com/250'
    }
];

const samplePrograms = [
    {
        id: 1,
        name: 'ក្រុមក្រូម',
        description: 'សម្រាប់អ្នកចាប់ផ្តើម',
        level: 'សាលាប្រាថ្មិក'
    },
    {
        id: 2,
        name: 'ក្រុមលម្អិត',
        description: 'សម្រាប់អ្នកប្រឹក្សាយោបល់',
        level: 'កម្រិតមន្ត្រីរ'
    },
    {
        id: 3,
        name: 'ក្រុមឯកគណៈ',
        description: 'សម្រាប់អ្នកឈានមុខគ្នា',
        level: 'កម្រិតខ្ពស់'
    }
];

// Load packages
function loadPackages() {
    const packagesContainer = document.getElementById('packages-container');
    
    samplePackages.forEach(pkg => {
        const packageCard = document.createElement('div');
        packageCard.className = 'package-card';
        packageCard.innerHTML = `
            <h3>${pkg.name}</h3>
            <div class="price">${pkg.price}</div>
            <p><strong>រយៈពេល:</strong> ${pkg.duration}</p>
            <p><strong>ក្រុម:</strong> ${pkg.classes}</p>
            <ul>
                ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn-primary" onclick="enrollPackage(${pkg.id})">ចុះឈ្មោះឥឡូវនេះ</button>
        `;
        packagesContainer.appendChild(packageCard);
    });
}

// Load coaches
function loadCoaches() {
    const coachesContainer = document.getElementById('coaches-container');
    
    sampleCoaches.forEach(coach => {
        const coachCard = document.createElement('div');
        coachCard.className = 'coach-card';
        coachCard.innerHTML = `
            <img src="${coach.image}" alt="${coach.name}">
            <div class="coach-card-content">
                <h3>${coach.name}</h3>
                <p class="specialization">${coach.specialization}</p>
                <p><strong>បទពិសោធន៍:</strong> ${coach.experience}</p>
            </div>
        `;
        coachesContainer.appendChild(coachCard);
    });
}

// Load programs
function loadPrograms() {
    const programsContainer = document.getElementById('programs-container');
    
    samplePrograms.forEach(program => {
        const programCard = document.createElement('div');
        programCard.className = 'program-card';
        programCard.innerHTML = `
            <h3>${program.name}</h3>
            <p>${program.description}</p>
            <span class="level">${program.level}</span>
        `;
        programsContainer.appendChild(programCard);
    });
}

// Load schedule
function loadSchedule() {
    const scheduleContainer = document.getElementById('schedule-container');
    
    const schedule = `
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>ម៉ោង</th>
                    <th>ច័ន្ទ</th>
                    <th>អង្គារ</th>
                    <th>ពុធ</th>
                    <th>ព្រហស្បតി</th>
                    <th>សុក្រ</th>
                    <th>សៅរ៍</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>៦:០០ – ៧:៣០</strong></td>
                    <td class="schedule-time-slot">ក្រុមក្រូម</td>
                    <td class="schedule-time-slot">ក្រុមក្រូម</td>
                    <td></td>
                    <td class="schedule-time-slot">ក្រុមក្រូម</td>
                    <td></td>
                    <td class="schedule-time-slot">ក្រុមក្រូម</td>
                </tr>
                <tr>
                    <td><strong>១៨:០០ – ១៩:៣០</strong></td>
                    <td></td>
                    <td class="schedule-time-slot">ក្រុមលម្អិត</td>
                    <td class="schedule-time-slot">ក្រុមលម្អិត</td>
                    <td></td>
                    <td class="schedule-time-slot">ក្រុមលម្អិត</td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>១៉ាង់ – ២០:៣០</strong></td>
                    <td class="schedule-time-slot">ក្រុមឯកគណៈ</td>
                    <td></td>
                    <td class="schedule-time-slot">ក្រុមឯកគណៈ</td>
                    <td class="schedule-time-slot">ក្រុមឯកគណៈ</td>
                    <td></td>
                    <td class="schedule-time-slot">ក្រុមឯកគណៈ</td>
                </tr>
            </tbody>
        </table>
    `;
    
    scheduleContainer.innerHTML = schedule;
}

// Load finance stats
function loadFinanceStats() {
    const financeStats = document.getElementById('finance-stats');
    
    const stats = `
        <div class="stat">
            <h4>សរុបលុយខែនេះ</h4>
            <p style="color: var(--secondary-color); font-size: 1.5rem; font-weight: bold;">$২,៤៥០</p>
        </div>
        <div class="stat">
            <h4>លុយដែលមាន</h4>
            <p style="color: var(--primary-color); font-size: 1.5rem; font-weight: bold;">$១,២០០</p>
        </div>
        <div class="stat">
            <h4>លុយឆ្ងាយ</h4>
            <p style="color: var(--accent-color); font-size: 1.5rem; font-weight: bold;">$១,២៥០</p>
        </div>
    `;
    
    financeStats.innerHTML = stats;
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Enroll in package
function enrollPackage(packageId) {
    alert(`ថ្ងៃនេះអ្នកបានចុះឈ្មោះនឹងក្រុម ${samplePackages.find(p => p.id === packageId).name}!`);
    // TODO: Implement actual enrollment logic
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// Close menu when link is clicked
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPackages();
    loadCoaches();
    loadPrograms();
    loadSchedule();
    loadFinanceStats();
});

// Smooth scroll offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for sticky header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
