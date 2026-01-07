# Deploying to Render.com (Free Tier)

## Your Website

- **Frontend:** https://www.properties4creations.com (GitHub Pages)
- **Backend:** Deploy to Render.com (follow steps below)

## Prerequisites

1. GitHub account with this repository
2. Render.com account (free sign up at https://render.com)
3. Google Gemini API Key (get from https://makersuite.google.com/app/apikey)

## Deployment Steps

### Step 1: Deploy Backend to Render.com

1. **Go to Render Dashboard:**
   - Visit: https://dashboard.render.com
   - Click "New +" → "Web Service"

2. **Connect GitHub:**
   - Click "Connect your GitHub repository"
   - Select this repository (`properties-4-creation/Website`)
   - Click "Connect"

3. **Configure Service:**
   | Setting | Value |
   |---------|-------|
   | Name | `p4c-backend` |
   | Environment | `Node` |
   | Build Command | `npm install` |
   | Start Command | `node server/index.js` |
   | Plan | `Free` |

4. **Add Environment Variables:**
   Click "Advanced" → "Add Environment Variables":

   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   NODE_ENV=production
   PORT=10000
   ALLOWED_ORIGINS=https://www.properties4creations.com,https://properties4creations.com,http://localhost:3000
   ```

5. **Deploy:**
   - Click "Create Web Service"
   - Wait 2-3 minutes for build and deployment
   - Look for green "Live" status

6. **Copy Your Backend URL:**
   - Found at top of dashboard: `https://p4c-backend.onrender.com`

### Step 2: Update Frontend

1. **Edit `.env.local`:**
   Replace `YOUR_BACKEND_URL` with your Render URL:

   ```
   VITE_API_URL=https://p4c-backend.onrender.com/api
   ```

2. **Push Changes:**

   ```bash
   git add .
   git commit -m "Connect chatbot to Render backend"
   git push
   ```

3. **GitHub Pages will auto-deploy** with the new backend URL

### Step 3: Test Everything

1. **Test Backend Health:**
   Visit: `https://YOUR_RENDER_APP.onrender.com/api/health`

   Expected response:

   ```json
   {
     "status": "healthy",
     "services": { "api": true }
   }
   ```

2. **Test Chatbot:**
   Visit https://www.properties4creations.com and try the AI chatbot

## Troubleshooting

### CORS Errors

If chatbot shows "trouble connecting":

- Check that `ALLOWED_ORIGINS` includes `https://www.properties4creations.com`
- Update Render env vars and redeploy

### API Key Missing

- Verify `GEMINI_API_KEY` is set in Render dashboard
- Get a new key from: https://makersuite.google.com/app/apikey

### Free Tier Limitations

- Service sleeps after 15 min of inactivity
- First request after sleep: ~30-60 second delay
- Monthly limit: 750 hours free

## Cost

| Tier | Monthly Cost          |
| ---- | --------------------- |
| Free | $0                    |
| Paid | ~$7/month (always-on) |

## Architecture

```
┌─────────────────────────────────────────────────────┐
│  User's Browser                                     │
│  (www.properties4creations.com)                     │
└──────────────┬──────────────────────────────────────┘
               │ HTTPS Request
               ▼
┌─────────────────────────────────────────────────────┐
│  Render.com Backend                                 │
│  (p4c-backend.onrender.com)                         │
│  - Express.js server                                │
│  - Google Gemini API integration                    │
│  - Secure API key storage                           │
└──────────────┬──────────────────────────────────────┘
               │ HTTPS Request to Google
               ▼
┌─────────────────────────────────────────────────────┐
│  Google Gemini AI                                   │
│  (generativelanguage.googleapis.com)                │
└─────────────────────────────────────────────────────┘
```
