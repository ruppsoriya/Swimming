# សាលាហ្សំលាយប្រកាស - Swimming School Management System

![Swimming School](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Language](https://img.shields.io/badge/Language-Khmer&English-red)

## 📖 ពិពណ៌នា (Description)

សាលាហ្សំលាយប្រកាស គឺជាប្រព័ន្ធគ្រប់គ្រងឥណ្ឌស្ត្រាកបច្ចេកទេសក្សេត្រសម្រាប់ការបង្រៀនហ្សំលាយ។ ប្រព័ន្ធនេះផ្តល់ឱ្យលក្ខណៈបច្ចេកទេសក្នុងការគ្រប់គ្រងសិស្ស គ្រូ ក្រុម កាលវិភាគ ឈានទៅលេខ និងលុយ។

**Swimming School Management System** is a comprehensive platform for managing swimming school operations including student management, instructor scheduling, class administration, attendance tracking, and financial management.

---

## 🎯 លក្ខណៈពិសេស (Features)

- ✅ **ទំព័រដើម**: ព័ត៌មានលម្អិតលម្អើង និងកញ្ចប់
- ✅ **គ្រប់គ្រងសិស្ស**: បន្ថែម កែប្រែ លុប និងរៀលចេញលើលេខ
- ✅ **គ្រប់គ្រងគ្រូ**: ប្រកាសលម្អិត ឯកទេស និងលក្ខណៈបទពិសោធន៍
- ✅ **គ្រប់គ្រងក្រុម**: កាលវិភាគ សមាជិក និងលម្អិត
- ✅ **ឈានទៅលេខ**: ត្រួតពិនិត្យឈានទៅលេខរបស់សិស្ស
- ✅ **គណនា**: គ្រប់គ្រងលុយ ប្រាក់ចូល និងរាយការណ៍
- ✅ **គាំទ្នភាសាខ្មែរ**: ចាប់ផ្តើមលើលេខលើក (Khmer Language Support)
- ✅ **ផ្ទាំងគ្រប់គ្រង**: ដាច់ផ្តាច់គ្រប់គ្រងលក្ខណៈងាទ្រ
- ✅ **ឆ្លើយរបស់អតិថិជន**: ប្រើប្រាស់ API សម្រាប់ផ្សេងៗ

---

## 🛠️ បច្ចេកទេស (Tech Stack)

### Frontend
- **HTML5**: ស្ថាបត្យកម្ម
- **CSS3**: ម៉ាកិលទំនើប និងប្រតিកម្មក្នុងប្រើប្រាស់ (Modern & Responsive Design)
- **JavaScript**: ទូទាត់ម៉ាត្របច្ចវិទ្យា (Interactive)

### Backend
- **Node.js**: ប្រព័ន្ធលេខប្រវែង
- **Express.js**: ម៉ាកឌ៉ា វេបលេខប្រវែង
- **SQLite3**: មូលដ្ឋានទិន្នន័យ

### Tools
- **npm**: ស្ថាបត្យប័あក្ក
- **nodemon**: ផ្ទាំងលេខលើក

---

## 📦 ការដំឡើង (Installation)

### ជំហាន ១: ក្ដុតក្ដារ Repository
```bash
git clone https://github.com/ruppsoriya/Swimming.git
cd Swimming
```

### ជំហាន ២: ដំឡើង Dependencies
```bash
npm install
```

### ជំហាន ៣: បង្កើត Database Directory
```bash
mkdir -p data
```

### ជំហាន ៤: បុង្រឈានចាប់ផ្តើមលេខលើក
```bash
npm start
```

ឍមឹងលេខលើកលើ: [http://localhost:5000](http://localhost:5000)

---

## 🚀 ការប្រើប្រាស់ (Usage)

### ទំព័របូលរលតាrobbek
```
http://localhost:5000/
```
- មើលលើលេខលើក
- ប្រើប្រាស់កញ្ចប់
- មើលលើលេខលើកគ្រូ
- ប្រើប្រាស់កាលវិភាគ

### ផ្ទាំងគ្រប់គ្រង
```
http://localhost:5000/admin.html
```
- គ្រប់គ្រងសិស្ស
- គ្រប់គ្រងគ្រូ
- គ្រប់គ្រងក្រុម
- គ្រប់គ្រងលុយ

### សន្លឹកព័ត៌មាន
```
http://localhost:5000/brochure.html
```
- មើលលើលេខលើក ដាច់ផ្តាច់
- បោះពុម្ព

---

## 📱 API Endpoints

### Students (សិស្ស)
- `GET /api/students` - ទទួលលើលេខលើกសិស្សទាំងអស់
- `POST /api/students` - បន្ថែមសិស្សថ្មី

### Coaches (គ្រូ)
- `GET /api/coaches` - ទទួលលើលេខលើកគ្រូទាំងអស់
- `POST /api/coaches` - បន្ថែមគ្រូថ្មី

### Classes (ក្រុម)
- `GET /api/classes` - ទទួលលើលេខលើកក្រុមទាំងអស់

### Payments (គណនា)
- `GET /api/payments` - ទទួលលើលេខលើកគណនាទាំងអស់
- `POST /api/payments` - បន្ថែមលុយថ្មី

### Programs (មេរៀន)
- `GET /api/programs` - ទទួលលើលេខលើកមេរៀនទាំងអស់

---

## 📂 ឯកសារលម្អិត (Project Structure)

```
Swimming/
├── public/
│   ├── index.html           # ទំព័របូលរលតាببbb
│   ├── admin.html           # ផ្ទាំងគ្រប់គ្រង
│   ├── brochure.html        # សន្លឹកព័ត៌មាន
│   ├── styles.css           # រចនាម៉ាកករលក្ខន
│   ├── admin-styles.css     # រចនាម៉ាក ផ្ទាំងគ្រប់គ្រង
│   ├── script.js            # JavaScript មូលដ្ឋាន
│   └── admin-script.js      # JavaScript ផ្ទាំងគ្រប់គ្រង
├── data/
│   └── swimming_school.db   # មូលដ្ឋានទិន្នន័យ SQLite
├── server.js                # ម៉ាកលេខលើកលក
├── package.json             # ទិន្នន័យ dependencies
├── .env                     # ការក្នង់ផ្នែកលក
└── README.md                # ឯកសារនេះ
```

---

## 🔧 Configuration

កែប្រែ `.env` ឯកសារដើម្បីកំណត់:
```
PORT=5000
NODE_ENV=development
DATABASE_PATH=./data/swimming_school.db
```

---

## 🌐 ភាសា (Languages)

- ✅ ខ្មែរ (Khmer)
- ✅ ឯងលេស (English)

---

## 📝 ឪលេខលើក (License)

ឯកសារឪលេខលើក MIT. មើលលើលេខលើក [LICENSE](LICENSE) ឯកសារ។

---

## 👥 ក្រុមការងារ (Contributors)

- **ម្ចាស់គម្រោង**: Ruppsoriya
- **ឆ្នាំ**: 2024

---

## 📞 ទំនាក់ទំនង (Contact)

- **ក្រុងវិទ្យាល័យ**: Swimming School Management Team
- **အီမေール**: info@swimmingschool.kh
- **វិបសាយ**: www.swimmingschool.kh

---

## 🐛 សូមប្រាប់ចូលលម្អិត (Bug Reports)

សូមប្រាប់든 issues នៅលើ [GitHub Issues](https://github.com/ruppsoriya/Swimming/issues)

---

## 🤝 Contributing

1. Fork ឯកសារមូលដ្ឋាន
2. បង្កើត branch របស់អ្នក (`git checkout -b feature/AmazingFeature`)
3. Commit លម្អិត (`git commit -m 'Add AmazingFeature'`)
4. Push តៃ branch (`git push origin feature/AmazingFeature`)
5. បើក Pull Request

---

**ឯកសារលម្អិតលម្អើង 📚**: សូមលើលេខលើក [Documentation](./docs) ឯកសារលម្អិត។

---

*Last Updated: May 6, 2024*