# Quick Start Guide - ការចាប់ផ្តើមលឿន

## ១. ការដំឡើង Dependencies

```bash
npm install
```

## ២. ចាប់ផ្តើមលេខលើក

```bash
npm start
```

## ៣. ចូលប្រើប្រាស់

- **ទំព័របូលរល**: http://localhost:5000
- **ផ្ទាំងគ្រប់គ្រង**: http://localhost:5000/admin.html

---

## 🎯 ឯកសារថ្នល់

### ក្តុតក្ដារមូលដ្ឋាន (Main Pages)
1. **index.html** - ទំព័របូលរលលើលេខលើក
2. **admin.html** - ផ្ទាំងគ្រប់គ្រងប្រតិថ្ងៃ
3. **brochure.html** - សន្លឹកព័ត៌មាន

### API Routes
- `GET /api/students` - សិស្សទាំងអស់
- `POST /api/students` - បន្ថែមសិស្ស
- `GET /api/coaches` - គ្រូទាំងអស់
- `POST /api/coaches` - បន្ថែមគ្រូ
- `GET /api/classes` - ក្រុមទាំងអស់
- `GET /api/payments` - គណនាទាំងអស់
- `POST /api/payments` - បន្ថែមលុយ

---

## 📱 ម៉ូបាល់ដ៏ល្អ

ប្រព័ន្ធគាំទ្នលើលេខលើក:
- 📱 ហ្វូលផូន (Mobile)
- 💻 តាលែត (Tablet)
- 🖥️ ម៉ាក់ (Desktop)

---

## ❓ ក្រឹប្យពិសាស

### Q: តើខ្ញុំបង្កើតមូលដ្ឋានទិន្នន័យថ្មីបានដោយរបៀបណា?
**A:** មូលដ្ឋានទិន្នន័យត្រូវបានបង្កើតដោយស្វయ័ត នៅពេលលេខលើកលើកដំបូង។

### Q: តើហ្វូលផូនដែលលូតលាស់ដោយរបៀបណា?
**A:** កែប្រែឯកសារ CSS នៅក្នុង `public/styles.css` និង `public/admin-styles.css`

### Q: តើខ្ញុំផ្សាយលើលេខលើកបានដោយរបៀបណា?
**A:** លើលេខលើក server នៅលើលេខលើកលើ ឬលើលេខលើក hosting service ដូចជា Heroku

---

**Happy Coding! 🎉**
