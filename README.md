# Nutri Dry Fruits

Welcome to the **Nutri Dry Fruits** web application! This project is a modern, responsive marketing and e-commerce platform built for a premium dry fruits brand.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB (Mongoose)
- **UI Components**: React Slick

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up your environment variables. Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🗂️ Project Structure

- `/app`: Next.js App Router pages and API routes (`/api`).
- `/components`: Reusable UI components.
  - `/global`: Contains global layout components like `Navbar` and `Footer`.
  - `/pages`: Contains page-specific sections and UI elements.
- `/backend`: Contains Mongoose models for database interaction.
- `/public`: Static assets (images, logos, etc).

## 🌍 Code Quality & Formatting

This project uses Prettier for code formatting.

- Format code manually:
```bash
npx prettier --write .
```

## 🌍 Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

Copyright © Nutri Dry Fruits. All Rights Reserved.
