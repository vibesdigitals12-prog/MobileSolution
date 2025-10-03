# RK MOBILE Solution - E-Commerce Website

Premium mobile phones and accessories e-commerce website.

## 📱 Contact
- **Phone**: 8950386412
- **WhatsApp**: 8950386412

## 🚀 Deployment Instructions

### Deploy on Render (Recommended)

1. **Upload your code to GitHub** (create a new repository)
   
2. **Create a new Web Service on Render**:
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure Build Settings**:
   ```
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

4. **Environment Variables** (if needed):
   - Add any environment variables in Render dashboard

5. **Deploy!** - Your website will be live in a few minutes

### Deploy on Other Platforms

#### Vercel / Netlify (Static)
```bash
npm install
npm run build
```

#### Railway / Heroku
```bash
npm install
npm run build
npm start
```

## 💻 Local Development

1. **Install Dependencies**:
```bash
npm install
```

2. **Run Development Server**:
```bash
npm run dev
```

3. **Open**: http://localhost:5000

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS

## 📝 Important Notes

- Make sure to run `npm install` before deployment
- Always use `npm run build` to create production build
- CSS will only show correctly after running build command
- For static hosting, deploy the `dist/client` folder

## 🔧 Troubleshooting

**Problem**: Website shows black and white (no colors)
**Solution**: Run `npm run build` before deploying. The CSS needs to be compiled.

**Problem**: Server not starting
**Solution**: Make sure all dependencies are installed with `npm install`

---

© 2024 RK MOBILE Solution. All rights reserved.
