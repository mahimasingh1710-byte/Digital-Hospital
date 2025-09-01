# Digital Hospital Digital India

A modern, full-stack hospital management system landing page that helps digitalize hospitals in just a few hours. This professional marketing website showcases our comprehensive healthcare technology solutions with integrated contact forms and demo requests.

## 🏥 Overview

Digital Hospital Digital India is a complete web application designed to attract and convert potential hospital clients. The system demonstrates our capabilities in hospital digitalization while providing an easy way for healthcare facilities to get in touch with our services.

## ✨ Features

### 🎯 Marketing Landing Page
- **Hero Section** - Compelling headline with call-to-action
- **Features Showcase** - Role-based access for receptionists, doctors, admins, and patients
- **Workflow Demonstration** - Step-by-step digitalization process
- **Benefits Overview** - Key advantages of going digital
- **Customer Testimonials** - Social proof and success stories
- **Pricing Plans** - Flexible monthly and yearly options
- **Final Call-to-Action** - Contact us section

### 💰 Pricing Structure
- **Starter Plan**: ₹3,000/month (₹10,800/year with 70% discount)
- **Hospital OPD**: ₹12,000/month (₹72,000/year with 70% discount)
- **Enterprise**: Custom pricing for large healthcare networks

### 📧 Contact System
- Contact forms with real-time validation
- Email notifications to mahimasinggh1710@gmail.com
- Demo request functionality
- Form submissions stored in database

### 🔧 Technical Features
- Responsive design for all devices
- Fast loading with optimized images
- Modern UI with shadcn/ui components
- Type-safe forms with validation
- Database integration with PostgreSQL
- Email service with Nodemailer

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **React Hook Form** with Zod validation
- **TanStack Query** for server state management
- **Wouter** for client-side routing
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** for database operations
- **PostgreSQL** database
- **Nodemailer** for email services
- **Zod** for runtime validation

### Development Tools
- **ESBuild** for production builds
- **PostCSS** with Tailwind CSS
- **TypeScript** strict configuration
- **Replit** deployment ready

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (optional for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahimasingh1710-byte/Digital-Hospital.git
   cd Digital-Hospital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   # Database (optional for development)
   DATABASE_URL=postgresql://username:password@localhost:5432/digital_hospital

   # Email Configuration
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password

   # Development
   NODE_ENV=development
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 📁 Project Structure

```
Digital-Hospital/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
│   └── index.html
├── server/                 # Backend Express.js application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── vite.ts            # Vite server integration
├── shared/                 # Shared TypeScript schemas
│   └── schema.ts          # Database and validation schemas
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── vite.config.ts         # Vite build configuration
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Database Setup (Optional)

The application works without a database for demonstration purposes. To enable full functionality:

1. Install PostgreSQL
2. Create a database named `digital_hospital`
3. Update the `DATABASE_URL` in your `.env` file
4. Run database migrations (if applicable)

### Email Configuration

To enable contact form emails:

1. Use a Gmail account
2. Generate an App Password in Google Account settings
3. Update `EMAIL_USER` and `EMAIL_PASS` in your `.env` file

## 🎨 Customization

### Branding
- Update colors in `client/src/index.css`
- Modify company name throughout the application
- Replace placeholder images with your own

### Content
- Edit text content in `client/src/pages/home.tsx`
- Update pricing plans in the pricing section
- Modify contact email in `server/routes.ts`

### Features
- Add new pages in `client/src/pages/`
- Create new API endpoints in `server/routes.ts`
- Extend database schema in `shared/schema.ts`

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🌟 Key Components

### Contact Modal
- Real-time form validation
- Phone number formatting
- Email notifications
- Loading states and error handling

### Pricing Cards
- Monthly/Yearly toggle
- Discount calculations
- Featured plan highlighting
- Call-to-action buttons

### Testimonials
- Customer feedback display
- Statistics overlay
- Professional layout

## 📧 Contact & Support

- **Email**: mahimasinggh1710@gmail.com
- **Phone**: +919999999999
- **Website**: Digital Hospital Digital India

## 📄 License

This project is proprietary software developed for Digital Hospital Digital India.

## 🚀 Deployment

The application is optimized for deployment on:
- Replit (ready-to-deploy)
- Vercel
- Netlify
- Railway
- Heroku

For production deployment, ensure:
- Environment variables are set
- Database is configured
- Email service is enabled
- Domain is connected

---

**Built with ❤️ for Digital Hospital Digital India**

*Digitalizing hospitals across India, one facility at a time.*