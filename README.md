# JBSS Education - Learning Management System (LMS)

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Payments-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)

A production-ready, full-stack Learning Management System designed to empower students and educators. Built with the latest web technologies, featuring a modern SaaS aesthetic, AI-powered support, and robust content delivery.

## 🚀 Key Features

- **📚 Course Management**: Create, publish, and manage rich multimedia courses with chapters and attachments.
- **🤖 AI Chatbot**: Integrated **Google Gemini AI** for real-time, context-aware student support and Q&A.
- **🔐 Secure Authentication**: Role-Based Access Control (RBAC) via **Clerk** (Student & Teacher modes).
- **💳 Payments**: Seamless course enrollment and payment processing with **Stripe**.
- **📹 Video Streaming**: High-performance video hosting and streaming powered by **Mux**.
- **📂 File Management**: Drag-and-drop file uploads using **UploadThing**.
- **📊 Analytics**: Comprehensive dashboards for teachers to track revenue and student progress using **Recharts**.
- **🎨 Modern UI/UX**: Responsive, animated interface built with **Tailwind CSS 4** and **Framer Motion**.
- **🌗 Dark Mode**: Fully supported dark/light theme toggling.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via [NeonDB](https://neon.tech/))
- **ORM**: [Prisma](https://www.prisma.io/)
- **Auth**: [Clerk](https://clerk.com/)
- **Payments**: [Stripe](https://stripe.com/)
- **Video**: [Mux](https://www.mux.com/)
- **AI**: [Google Gemini API](https://ai.google.dev/)

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud like Neon)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/jbss-lms.git
    cd jbss-lms
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add the following:

    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

    DATABASE_URL=

    UPLOADTHING_SECRET=
    UPLOADTHING_APP_ID=

    MUX_TOKEN_ID=
    MUX_TOKEN_SECRET=

    STRIPE_API_KEY=
    STRIPE_WEBHOOK_SECRET=

    NEXT_PUBLIC_APP_URL=http://localhost:3000

    GEMINI_API_KEY=
    ```

4.  **Setup Database**
    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
