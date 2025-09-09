# Upload Server

![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)
![Fastify](https://img.shields.io/badge/Fastify-4.x-purple.svg)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.x-orange.svg)
![Zod](https://img.shields.io/badge/Zod-3.x-red.svg)

A robust and efficient image upload server built with Node.js, Fastify, and TypeScript. This project provides a powerful backend solution for handling file uploads, focusing on performance, type safety, and maintainability. It leverages Drizzle ORM for seamless database interactions and Zod for robust environment variable validation.

---

## ✨ Features

-   **High-Performance File Uploads:** Optimized endpoints for fast and reliable image uploads.
-   **TypeScript-First Development:** Ensures type safety and improves code quality and maintainability.
-   **Fastify Framework:** Utilizes Fastify for its speed and low overhead, providing a highly performant API.
-   **Drizzle ORM Integration:** Modern, type-safe ORM for flexible and efficient database operations.
-   **Robust Environment Validation:** Secure handling of environment variables using Zod for schema validation.
-   **Docker & Docker Compose Support:** Easy setup and deployment with containerization.
-   **Database Migrations:** Managed database schema changes with Drizzle Kit.

---

## 🛠️ Technologies Used

-   **Node.js:** JavaScript runtime environment.
-   **Fastify:** High-performance web framework.
-   **TypeScript:** Superset of JavaScript that adds static typing.
-   **Drizzle ORM:** TypeScript ORM for SQL databases.
-   **Zod:** TypeScript-first schema validation library.
-   **PostgreSQL:** Relational database (via Docker).
-   **Docker & Docker Compose:** Containerization for development and deployment.
-   **pnpm:** Fast, disk space efficient package manager.

---

## 🚀 Getting Started

Follow these steps to get your development environment running:

### Prerequisites

Make sure you have the following installed:

-   Node.js (v18 or higher)
-   pnpm
-   Docker & Docker Compose

### 1. Clone the repository

```bash
git clone https://github.com/DaisyOli/upload-server.git
cd upload-server
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project based on `.env.example` (if provided, otherwise create one manually):

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/upload_server"
PORT=3333
```

### 4. Start the database with Docker Compose

```bash
docker-compose up -d --build
```

### 5. Run database migrations

```bash
pnpm drizzle-kit push:pg
```

### 6. Start the development server

```bash
pnpm dev
```

The server will be running on `http://localhost:3333`.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

-   **Your Name/GitHub Username:** DaisyOli
-   **Email:** [your_email@example.com] (Optional: Replace with your actual email)
-   **LinkedIn:** [Your LinkedIn Profile URL] (Optional)

---
