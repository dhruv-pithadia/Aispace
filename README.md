# Aispace
A modern course platform for learning AI and machine learning, built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, responsive UI with space-themed design
- 🌙 Dark mode optimized
- 🔍 Course search and filtering
- 📝 Course submission form for instructors
- 🎯 Detailed course pages with curriculum
- ✨ Interactive animations and effects
- 📱 Mobile-friendly design

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/aispaces-courses.git
   cd aispaces-courses
   \`\`\`

### Detailed Installation Steps

1. Create a new Next.js project:
\`\`\`
npx create-next-app@latest aispaces-courses
\`\`\`

Select the following options when prompted:
\`\`\`bash
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use `src/` directory? No
✔ Would you like to use App Router? Yes
✔ Would you like to customize the default import alias? No
\`\`\`

2. Install and initialize shadcn/ui:
\`\`\`bash
# Navigate to project directory
cd aispaces-courses

# Install and initialize shadcn/ui
npx shadcn-ui@latest init
\`\`\`

Select the following options when prompted:
\`\`\`bash
✔ Would you like to use TypeScript (recommended)? yes
✔ Which style would you like to use? Default
✔ Which color would you like to use as base color? Slate
✔ Where is your global CSS file? app/globals.css
✔ Would you like to use CSS variables for colors? yes
✔ Where is your tailwind.config.js located? tailwind.config.js
✔ Configure the import alias for components? @/components
✔ Configure the import alias for utils? @/lib/utils
✔ Are you using React Server Components? yes
\`\`\`

3. Install required shadcn/ui components:
\`\`\`bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add select
npx shadcn-ui@latest add textarea
\`\`\`

4. Install additional dependencies:
\`\`\`bash
npm install lucide-react
\`\`\`

5. Start the development server:
\`\`\`bash
npm run dev
\`\`\`


### Troubleshooting

If you encounter any issues during installation:

1. Clear npm cache:
\`\`\`bash
npm cache clean --force
\`\`\`

2. Delete node_modules and reinstall:
\`\`\`bash
rm -rf node_modules
rm package-lock.json
npm install
\`\`\`

3. Ensure you have the correct Node.js version:
\`\`\`bash
node --version  # Should be 18.17.0 or higher
\`\`\`

4. If you encounter TypeScript errors, try:
\`\`\`bash
npm install --save-dev @types/react @types/react-dom
\`\`\`

