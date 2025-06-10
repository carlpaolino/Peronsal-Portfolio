# Adding Your Profile Picture

Your portfolio is now set up to display your profile picture in both the Hero and About sections!

## 📸 Adding Your Profile Picture

### Step 1: Prepare Your Image
- **Format**: JPG or PNG
- **Size**: 400x400px (square format works best)
- **File size**: Keep under 500KB for fast loading
- **Quality**: Professional headshot with good lighting
- **Background**: Clean background preferred

### Step 2: Add the Image
1. Save your profile picture as `profile.jpg` or `profile.png`
2. Place it in the `public/images/` directory
3. Replace the existing placeholder file

### Step 3: Update the Path (if needed)
If you use a different filename, update `data/profile.json`:
```json
{
  "profileImage": "/images/your-image-name.jpg"
}
```

## ✨ What You'll See

**Hero Section (Home):**
- Large circular profile picture with animated border
- Automatic fallback to initials if image fails to load
- Rotating dashed border animation

**About Section:**
- Rectangular profile picture with rounded corners
- Status and location overlay at the bottom
- Subtle glow animation effect

## 🔧 Fallback System

Don't worry if you don't have a profile picture yet! The components include:
- **Automatic fallback** to your initials if the image doesn't load
- **Professional styling** even without an image
- **No broken images** - everything still looks great

## 📱 Responsive Design

Your profile picture will automatically:
- Scale appropriately on mobile devices
- Maintain aspect ratio
- Display beautifully on all screen sizes

## 🎯 Pro Tips

1. **Professional photos work best** - consider getting a headshot taken
2. **Good lighting is key** - natural light or professional lighting
3. **Smile naturally** - you want to appear approachable
4. **Clean background** - avoid distracting elements
5. **Square crop** - ensures it displays well in all sections

Ready to add your photo and make your portfolio more personal! 🚀 