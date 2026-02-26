# Deployment Guide

## Deploying to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## Deploying to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: None required for basic setup

## Deploying to Your Own Server

### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager

### Steps:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "noor-al-ilm" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx (Optional)**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

Currently, no environment variables are required for basic functionality.

For future features (authentication, database, etc.), create a `.env.local` file:

```env
# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key

# API Keys (if needed)
API_KEY=your_api_key
```

## Performance Optimization

1. **Enable Image Optimization**
   - Next.js automatically optimizes images
   - Use the `<Image>` component from `next/image`

2. **Enable Caching**
   - Configure CDN caching headers
   - Use ISR (Incremental Static Regeneration) for dynamic content

3. **Monitor Performance**
   - Use Vercel Analytics
   - Google Lighthouse for audits
   - Web Vitals monitoring

## Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **Content Security Policy**: Configure CSP headers
3. **Rate Limiting**: Implement for API routes
4. **Input Validation**: Validate all user inputs
5. **Regular Updates**: Keep dependencies updated

## Backup Strategy

1. **Database Backups**: Schedule regular backups
2. **Content Backups**: Version control all content
3. **Media Backups**: Use cloud storage with redundancy

## Monitoring

1. **Uptime Monitoring**: Use services like UptimeRobot
2. **Error Tracking**: Implement Sentry or similar
3. **Analytics**: Google Analytics or Plausible
4. **Performance**: Vercel Analytics or similar

## Scaling

For high traffic:
1. Use CDN for static assets
2. Implement database read replicas
3. Use Redis for caching
4. Consider serverless functions for API routes
5. Implement load balancing

---

May Allah accept this work and make it beneficial for the ummah.
