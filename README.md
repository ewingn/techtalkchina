Here’s a polished `README.md` you can drop at the root of your repo:

```markdown
# TechTalk China

A **React + Vite + Tailwind CSS** web app that curates the latest technology news from China — with pixel-perfect UI, category filtering (AI, EVs, Energy), live voting, and responsive design.  

## 🚀 Features
- **React 19 + Vite 7** for blazing-fast dev experience  
- **Tailwind CSS v4** with modern UI components  
- **Lucide Icons** for clean, scalable icons  
- **React Router** for category-based navigation (`/ai`, `/evs`, `/energy`)  
- **Responsive design**: desktop navigation + mobile hamburger menu  
- **Voting system**: upvote stories inline  
- **Search bar** with instant filtering  
- **Featured story** section with pulse indicator  

## 📂 Project Structure
```

src/
main.jsx         # App entry point
App.jsx          # Router + Layout
index.css        # Tailwind imports
context/         # Articles context (global state)
data/            # Mock articles + categories
utils/           # Time formatting helpers
components/      # Header, Nav, Cards, Featured, etc.
pages/           # Home + Category views

````

## 🛠️ Getting Started

Clone the repo:
```bash
git clone https://github.com/ewingn/techtalkchina.git
cd techtalkchina
````

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📦 Dependencies

* [React](https://react.dev) `^19.1.1`
* [Vite](https://vitejs.dev) `^7.1.2`
* [Tailwind CSS](https://tailwindcss.com) `^4.1.13`
* [Lucide React](https://lucide.dev)
* [React Router DOM](https://reactrouter.com)

## 🖼️ Screenshots

*(Add screenshots of Home, AI, EVs pages here once deployed!)*

## 📜 License

MIT License © 2025 Nathan Ewing

```

---

Do you want me to also include a **deployment section** (Netlify/Vercel) so that anyone can preview it live after cloning, or keep it simple for now?
```
