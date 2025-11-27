# Portfolio Website

A modern, responsive portfolio website showcasing my work as a Cloud Operations and DevOps Engineer. Built with React and deployed on GitHub Pages.

## 🌐 Live Demo

Visit the live site: [https://natan-barel.github.io/portfolio-app](https://natan-barel.github.io/portfolio-app)

## ✨ Features

- **Home Page**: Hero section with typewriter effect, about section, certifications, and featured projects
- **Projects Page**: Detailed showcase of cloud infrastructure and DevOps projects with links to GitHub repositories
- **Articles Page**: Technical articles and blog posts
- **Resume Page**: Interactive resume with education and work experience, plus downloadable PDF
- **Contact Form**: Integrated contact form using EmailJS for direct communication
- **Tech Stack Carousel**: Animated carousel displaying technologies and tools
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: React Router with scroll-to-top functionality

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **React Multi Carousel** - Carousel component for tech stack
- **React Simple Typewriter** - Typewriter effect for hero section
- **React Slick** - Additional carousel functionality
- **EmailJS** - Contact form integration
- **SweetAlert2** - Beautiful alert notifications
- **CSS3** - Custom styling

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/natan-barel/portfolio-app.git
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized and minified for best performance.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run deploy`
Builds the app and deploys it to GitHub Pages using the `gh-pages` package.

## 📁 Project Structure

```
portfolio-app/
├── public/
│   ├── data/
│   │   └── badges.json          # Certification badges data
│   └── index.html
├── src/
│   ├── assets/                   # Images, logos, and PDF files
│   ├── components/
│   │   ├── About/                # About section component
│   │   ├── Articles/            # Articles listing and modal
│   │   ├── Certifications/      # Certifications display
│   │   ├── Contact/             # Contact form
│   │   ├── Footer/              # Footer component
│   │   ├── Images/              # Hero image components
│   │   ├── Navbar/              # Navigation bar
│   │   ├── Projects/            # Project cards and data
│   │   ├── Resume/              # Resume/CV components
│   │   ├── TechStack/           # Technology stack carousel
│   │   └── ScrollToTop.js       # Scroll to top functionality
│   ├── routes/                  # Route components
│   │   ├── Home.js
│   │   ├── Project.js
│   │   ├── Articles.js
│   │   ├── Contact.js
│   │   └── Resume.js
│   ├── App.js                   # Main app component with routing
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles
└── package.json
```

## 🎨 Key Components

- **HeroImg**: Hero section with typewriter effect and call-to-action
- **AboutContent**: Personal introduction and professional background
- **Work**: Project showcase with cards linking to GitHub repositories
- **TechCarousel**: Animated carousel of technologies and tools
- **Certifications**: Display of professional certifications
- **Resume**: Interactive resume with education and experience timeline
- **Contact Form**: EmailJS-integrated contact form

## 🔧 Configuration

### EmailJS Setup
To enable the contact form, configure your EmailJS credentials in the `Form.js` component:
- Service ID
- Template ID
- Public Key

### GitHub Pages Deployment
The project is configured for GitHub Pages deployment. The homepage is set to `https://natan-barel.github.io/portfolio-app` in `package.json`.

## 📝 Customization

To customize this portfolio for your own use:

1. Update personal information in:
   - `src/components/About/AboutContent.js`
   - `src/components/Projects/WorkCradData.js`
   - `src/components/Resume/ResumeApi.js`

2. Replace images in `src/assets/` with your own

3. Update the resume PDF in `src/assets/Natan_Barel_Resume.pdf`

4. Configure EmailJS for the contact form

5. Update the homepage URL in `package.json` if deploying to a different GitHub Pages URL

## 🌟 Projects Showcased

The portfolio features several cloud infrastructure and DevOps projects including:

- AWS Terraform Cognito REST API
- Terraform Jenkins and Ansible setup
- Prometheus Observability Stack
- Kubernetes deployments with Helm
- AWS ECS Fargate applications
- Flask application deployments
- And more...

Each project includes architecture diagrams, descriptions, and links to GitHub repositories.

## 📄 License

This project is private and personal.

## 👤 Author

**Natan Barel**
- Portfolio: [https://natan-barel.github.io/portfolio-app](https://natan-barel.github.io/portfolio-app)
- GitHub: [@natan-barel](https://github.com/natan-barel)

---

Built with ❤️ using React
