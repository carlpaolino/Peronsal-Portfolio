# Carl Paolino - Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio closely mimics the design of [trentconley.com](https://www.trentconley.com/) while showcasing Carl Paolino's unique professional profile.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging interactions
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Easy Content Management**: JSON-based content system
- **Contact Form**: EmailJS integration for direct communication
- **Performance Optimized**: Lighthouse scores >90
- **SEO Ready**: Proper meta tags and semantic HTML
- **Deployment Ready**: Vercel configuration included

## 🏗️ Project Structure

```
├── data/                 # Content management
│   ├── profile.json     # Personal information
│   ├── projects.json    # Project showcase data
│   └── links.json       # Contact and social links
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main application
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json          # Deployment config
```

## 🛠️ Setup & Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📝 Content Management

### Editing Your Information

All content is managed through JSON files in the `data/` directory:

#### `data/profile.json`
```json
{
  "name": "Your Name",
  "tagline": "Your Professional Title",
  "bio": "Your bio description...",
  "interests": ["Interest 1", "Interest 2"],
  "lookingFor": ["What you're seeking..."],
  "profileImage": "/images/profile.jpg",
  "location": "Your Location",
  "status": "Your Status"
}
```

#### `data/projects.json`
Add your projects to the array:
```json
[
  {
    "id": "unique-project-id",
    "title": "Project Title",
    "blurb": "Short description...",
    "descriptionMD": "Full markdown description...",
    "tech": ["React", "Node.js", "MongoDB"],
    "image": "/images/project-image.jpg",
    "liveUrl": "https://project-demo.com",
    "githubUrl": "https://github.com/username/repo"
  }
]
```

#### `data/links.json`
Update your contact information:
```json
{
  "email": "your@email.com",
  "phone": "+1 (555) 123-4567",
  "linkedin": "https://linkedin.com/in/username",
  "github": "https://github.com/username",
  "resumeURL": "/documents/Your_Resume.pdf"
}
```

### Adding Images

1. Place images in the `public/images/` directory
2. Reference them in JSON files using `/images/filename.jpg`
3. For best performance, optimize images before adding them

### Adding Your Resume

1. Place your resume PDF in `public/documents/`
2. Update the `resumeURL` in `data/links.json`

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  'navy': '#0A192F',        // Background
  'green': '#64FFDA',       // Accent color
  'lightest-slate': '#CCD6F6', // Primary text
  // ... more colors
}
```

### Fonts
Update font imports in `index.html` and `tailwind.config.js`:
```js
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'],
  'heading': ['Space Grotesk', 'system-ui', 'sans-serif'],
}
```

## 📧 EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your configuration to `src/components/Contact.tsx`:
   ```typescript
   await emailjs.sendForm(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     form,
     'YOUR_PUBLIC_KEY'
   )
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Custom Domain

1. Add your domain in Vercel dashboard
2. Update DNS settings as instructed
3. SSL certificates are handled automatically

### Other Platforms

The built files in `dist/` can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run test` - Run tests (when implemented)

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## 🎯 Performance Features

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: Lazy loading and responsive images
- **Caching**: Service worker ready
- **Minification**: Built-in with Vite
- **Tree Shaking**: Unused code elimination

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data ready
- Sitemap generation ready
- Robot.txt ready

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions, please open an issue!

## 📞 Support

If you need help setting up or customizing this portfolio:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Happy coding!** 🎉