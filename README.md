# Jijith B - Personal Portfolio

A stunning, modern personal portfolio website built with React.js, Bootstrap 5, and jQuery. Features a dark blue and black glassmorphism theme with smooth animations and recruiter-friendly sections.

## 🚀 Features

- **Modern Design**: Dark blue and black glassmorphism theme
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: AOS animations and smooth scrolling
- **Interactive Elements**: Hover effects and dynamic content
- **Theme Toggle**: Dark/light mode support
- **Contact Form**: EmailJS integration with validation
- **SEO Optimized**: Meta tags and proper structure
- **Performance**: Optimized images and lazy loading

## 📋 Sections

1. **Hero** - Animated typing effect with profile and call-to-action
2. **About** - Personal introduction and background
3. **Skills** - Technical skills with icons and categories
4. **Projects** - Portfolio projects with images and links
5. **Blog** - Technical articles and thought leadership
6. **Experience** - Professional timeline
7. **Education** - Academic background
8. **Freelance** - Services and expertise
9. **Testimonials** - Client feedback and reviews
10. **Contact** - Contact form with social links

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Bootstrap 5** - CSS framework
- **jQuery** - DOM manipulation
- **AOS** - Scroll animations
- **EmailJS** - Contact form functionality
- **React Icons** - Icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (Optional)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the service, template, and user IDs in `src/components/Contact.jsx`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### EmailJS Setup
Update the following in `src/components/Contact.jsx`:
```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your service ID
  'YOUR_TEMPLATE_ID',     // Replace with your template ID
  formData,
  'YOUR_USER_ID'          // Replace with your user ID
);
```

### Customization
- Update personal information in each component
- Replace images in the `public` folder
- Modify colors and styling in CSS files
- Add/remove sections as needed

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Freelance.jsx
│   ├── Hero.jsx
│   ├── LoadingSpinner.jsx
│   ├── Navbar.jsx
│   ├── ProgressBar.jsx
│   ├── Projects.jsx
│   ├── ScrollToTop.jsx
│   ├── Skills.jsx
│   ├── Testimonials.jsx
│   └── ThemeContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization

### Colors
The main color scheme uses:
- Primary: `#0dcaf0` (Cyan)
- Secondary: `#0d6efd` (Blue)
- Background: Dark gradients
- Text: White/Light colors

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link in `Navbar.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 576px
- Tablet: 576px - 992px
- Desktop: > 992px

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: jijith2k2@gmail.com
- **Phone**: +91 7795639345
- **LinkedIn**: [Jijith B](https://linkedin.com/in/jijith-b)
- **GitHub**: [jijith2k2](https://github.com/jijith2k2)

---

Made with ❤️ by Jijith B
