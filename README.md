
# 🍽️ Restaurant Web Application

A complete **Restaurant Management System** built using **Next.js (Client + Admin Panel)** and **Laravel (Backend API)**.
Customers can browse foods, manage their cart, place orders, and track deliveries — while administrators manage everything through a powerful dashboard.

---

## 📦 Project Structure
```

/client      → Next.js Client Website (Users)
/admin       → Next.js Admin Panel
/backend     → Laravel Backend API

````

---

## 🚀 Technologies Used

### **Frontend — Next.js**
- ⚛️ React
- ▲ Next.js
- 🎨 Bootstrap (optional)
- 🗺️ Leaflet
- 📊 React-Chart

Includes:
1. **Client Website**
2. **Admin Panel**

### **Backend — Laravel**
- Laravel 10+
- RESTful API
- Authentication & Authorization
- Modules: Foods, Categories, Offers, Users, Transactions

---

## 🛠️ Installation & Setup

### **1️⃣ Clone Repository**
```bash
git clone https://github.com/danialmousavi/resturant-project.git
cd <repo>
````

### **▶️ Run Client (User Website)**

```bash
cd next-resturant-project
npm install
npm run dev
```

### **▶️ Run Admin Panel**

```bash
cd admin-panel
npm install
npm run dev
```

### **🔐 Admin Credentials**

```
Email:    admin@gmail.com
Password: 123456789
```

### **▶️ Run Backend (Laravel API)**

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

---

# 🍔 Client Features (User Side)

### **🍱 Food Browsing**

* View all foods
* Search & filter
* Detailed food pages

### **🛒 Cart**

* Add items
* Update quantity
* Remove items
* Checkout

### **👤 User Dashboard**

* Edit profile
* View order history
* Track current orders

---

# 🛠️ Admin Panel Features

### **🥘 Foods Management**

* Create / edit / delete foods
* Upload images
* Assign categories

### **📂 Category Management**

* Add / edit / delete categories

### **🏷️ Offers Management**

* Create new offers
* Edit or delete offers

### **👥 Users Management**

* View all users
* Edit user information

### **💳 Transactions / Orders**

* View all orders
* Update order status
* Review purchase history

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss your proposed changes.

