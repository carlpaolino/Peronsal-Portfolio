# Quick Setup Guide for Carl Paolino's Portfolio

## 🚀 Getting Started

Your portfolio is ready to go! Here's what you need to do to make it yours:

## 1. Update Your Information

### Edit `data/profile.json`:
```json
{
  "name": "Carl Paolino",
  "tagline": "Your Professional Title Here", // Update this
  "bio": "Write your personal bio here...", // Update this
  "interests": [
    "Add your interests here",
    "Replace these with your actual interests"
  ],
  "lookingFor": [
    "What type of opportunities are you seeking?",
    "Remote work? Full-time? Specific technologies?"
  ],
  "location": "Your Location", // Update this
  "status": "Available for Work" // Update this
}
```

### Edit `data/links.json`:
```json
{
  "email": "your-actual-email@gmail.com", // Update this
  "phone": "+1 (555) 123-4567", // Update this
  "linkedin": "https://linkedin.com/in/your-username", // Update this
  "github": "https://github.com/your-username", // Update this
  "resumeURL": "/documents/Carl_Paolino_Resume.pdf"
}
```

## 2. Add Your Projects

Edit `data/projects.json` and replace the sample projects with your own:

```json
[
  {
    "id": "your-project-id",
    "title": "Your Project Name",
    "blurb": "Short description for the card",
    "descriptionMD": "## Full Project Description\n\nDetailed description with markdown formatting...",
    "tech": ["React", "Node.js", "Your", "Tech", "Stack"],
    "image": "/images/your-project-image.jpg",
    "liveUrl": "https://your-live-demo.com", // Optional
    "githubUrl": "https://github.com/you/your-project"
  }
]
```

## 3. Add Your Resume

1. Save your resume as a PDF
2. Name it `Carl_Paolino_Resume.pdf`
3. Replace the placeholder file in `public/documents/`

## 4. Add Project Images (Optional)

1. Add project screenshots to `public/images/`
2. Update the `image` field in your projects
3. Recommended size: 1280x720px for best results

## 5. Customize Colors (Optional)

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  'navy': '#0A192F',        // Dark background
  'green': '#64FFDA',       // Accent color (currently teal)
  'lightest-slate': '#CCD6F6', // Light text
  // Change these to your preferred colors
}
```

## 6. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 7. Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically!

## 8. Set Up Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Domains" tab
3. Add your custom domain (e.g., carlpaolino.com)
4. Follow DNS setup instructions

## 9. Enable Contact Form (Optional)

To make the contact form work:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Uncomment and configure EmailJS in `src/components/Contact.tsx`

## 🎯 What's Already Done

✅ Modern, responsive design
✅ Smooth animations
✅ Mobile-friendly
✅ SEO optimized
✅ Performance optimized
✅ Easy content management
✅ Deployment ready

## 📞 Need Help?

- Check the main README.md for detailed documentation
- All code is commented for easy understanding
- The design closely matches trentconley.com as requested

## 🚀 You're Ready!

Your portfolio is professional, modern, and ready to impress recruiters. Just update the content with your information and deploy!

**Time to get that dream job!** 💪 