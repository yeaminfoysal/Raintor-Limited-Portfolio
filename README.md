# Raintor Limited Portfolio

A modern, high-performance portfolio site built using **TypeScript**, **Next.js**, **React 19**, and **Tailwind CSS 4**. This project utilizes the latest web development technologies and leverages **Turbopack** for a blazing-fast development experience.

---

## 🚀 Setup Instructions

Follow the steps below to get the project up and running locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/raintor-limited-portfolio.git
cd raintor-limited-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
This will start the app in development mode using Turbopack.


### 5. Start the Production Server
```bash
npm run start
```


## 🛠 Frameworks & Tools Used
| Tool                                                      | Description                         |
| --------------------------------------------------------- | ----------------------------------- |
| [Next.js 15](https://nextjs.org/)                         | React framework for production      |
| [React 19](https://react.dev/)                            | Frontend UI library                 |
| [Tailwind CSS 4](https://tailwindcss.com/)                | Utility-first CSS framework         |
| [PostCSS](https://postcss.org/)                           | CSS processing tool                 |
| [Turbopack](https://turbo.build/pack)                     | Next-gen build tool from Vercel     |
| [TypeScript](https://www.typescriptlang.org/)             | Static type checking for JavaScript |
| [ESLint](https://eslint.org/)                             | JavaScript linter                   |
| [React Icons](https://react-icons.github.io/react-icons/) | Popular icon packs for React        |

## ⚠️ Limitations / Tradeoffs

- Turbopack is still under active development; occasional instability or unexpected behavior may occur.

- Tailwind CSS v4+ and React 19 are in relatively early adoption stages; some libraries and tools may have limited support or compatibility issues.

- This project currently uses minimal styling plugins and external packages to maintain performance, but this limits out-of-the-box UI components.

- Server-side rendering and API routes are not implemented in this version — it’s focused on frontend presentation.


## 📂 Project Structure
```bash
src/
├── app/                     # App entry point (Next.js App Router)
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles
│
├── components/              # Reusable UI components
│   ├── ExperianceCard.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ScheduleBtn.tsx
│   ├── sectionIcon.tsx
│   ├── skillCrad.tsx
│   └── workProcessCard.tsx
│
├── hooks/                   # Custom React hooks (currently empty or for future use)
│
├── sections/                # Page sections (modularized)
│   ├── about.tsx
│   ├── contact.tsx
│   ├── hero.tsx
│   ├── skill.tsx
│   └── workProcess.tsx
│
├── types/                   # Type definitions

```