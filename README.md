# 📊 GTS Client Stats Dashboard

A responsive and filterable dashboard built for the GTS Service Platform to visualize client statistics.  
This component helps GTS administrators and stakeholders gain insights into client engagement and industry trends.

---

## 🚀 Features

- ✅ Total and active client metrics  
- ✅ Industry distribution pie chart  
- ✅ Filters by industry, location, subscription tier  
- ✅ Search clients by name  
- ✅ Responsive layout (mobile-friendly)  
- ✅ Horizontal scroll-safe table  
- ✅ Dark mode support (auto)  
- ✅ SQL schema + insights  

---

## 📂 Folder Structure

```
gts-client-dashboard/
├── public/
├── src/
│   ├── components/
│   ├── redux/
│   ├── App.jsx
│   └── index.js
├── clients.sql         # SQL schema + queries
├── README.md
└── package.json
```

---

## 🛠️ Setup

Install dependencies and run the development server:

```bash
npm install
npm run dev       # or: npm start
```

Build for production and preview:

```bash
npm run build
npx serve -s build
```

---

## 🧠 Business Impact

- Builds employer trust by showcasing client growth  
- Helps GTS admins make data-driven decisions  
- Increases job seeker confidence in GTS’s market presence  

---

## 🗃️ SQL (`clients.sql`)

Includes:

- `CREATE TABLE` schema for `clients`  
- Query to get client count per industry  
- Query to get signup trends and active/inactive breakdown 
- Query to analyze monthly client growth using `signup_date`

---