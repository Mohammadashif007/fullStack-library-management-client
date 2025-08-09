# 📚 Borrow Book – Frontend

A minimal **Library Management System** frontend built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**.  
This application allows users to **view books, manage inventory (CRUD), borrow books, and view borrow summaries**.

---

## 🚀 Project Overview
This is the **client-side** application that communicates with a RESTful API (Node.js + Express + MongoDB).  
It focuses on **clean UI, efficient state management, and core book management features** without authentication.

---

## ✨ Features

### 📖 Book Management
- View all books in a table with columns:
  - **Title**, **Author**, **Genre**, **ISBN**, **Copies**, **Availability**, **Actions**
- **Edit Book** ✏️ – Update existing details (auto-mark unavailable when copies = 0).
- **Delete Book** 🗑️ – With confirmation prompt.
- **Borrow Book** 📚 – Opens borrowing form.
- **Add New Book** ➕ – Create new books instantly.

### 📦 Borrow Book
- Borrow from the book list.
- Fields:
  - Quantity (≤ available copies)
  - Due Date
- Updates inventory automatically.
- Redirects to Borrow Summary.

### 📊 Borrow Summary
- Aggregated list of borrowed books.
- Shows:
  - Book Title
  - ISBN
  - Total Quantity Borrowed

---

## 🖼️ Screenshots
> _(Add screenshots or GIFs here for better visual documentation)_

---

🛠️ Tech Stack
Frontend Framework: React + TypeScript

State Management: Redux Toolkit Query (RTK Query)

Styling: Tailwind CSS

Backend API: Node.js, Express, MongoDB


⚙️ Installation & Setup

### Clone repository
git clone https://github.com/Mohammadashif007/fullStack-library-management-client.git

### Navigate into project
cd fullStack-library-management-client

### Install dependencies
npm install

### Run development server
npm run dev

