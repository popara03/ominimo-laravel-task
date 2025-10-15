# Ominimo - Laravel + React (Inertia.js) + TailwindCSS

Task: Create a Simple Blog Application in Laravel

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **PHP** >= 8.2
- **Composer**
- **Node.js** >= 18.x and **NPM**
- **MySQL**
- **Git**

## 🚀 Installation

Follow these steps to run the project locally. If you encounter any issues, don't hesitate to contact me.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ominimo.git
cd ominimo
```

### 2. Install PHP dependencies

```bash
composer install
```

### 3. Install JavaScript dependencies

```bash
npm install
```

### 4. Create `.env` file

```bash
cp .env.example .env
```

### 5. Generate application key

```bash
php artisan key:generate
```

### 6. Configure database

Open the `.env` file and modify the following lines:

```env
DB_DATABASE=ominimo
DB_USERNAME=root
DB_PASSWORD=
```

### 7. Create database

Run your local server, open MySQL terminal or phpMyAdmin, and execute:

```sql
CREATE DATABASE ominimo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 8. Run migrations and seed the database with test data

```bash
php artisan migrate:fresh --seed
```

### 9. Compile frontend assets

For production build:

```bash
npm run build
```

### 10. Start the application

```bash
php artisan serve
```

The application will be available at: **http://localhost:8000**

---

## 💻 Development Mode

To work in a development environment with hot reload functionality:

**Terminal 1** - Start Laravel server:
```bash
php artisan serve
```

**Terminal 2** - Start Vite dev server:
```bash
npm run dev
```

Visit **http://localhost:8000** in your browser.
