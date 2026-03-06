# Deployment Guide for ECONews Website

This guide explains how to deploy the ECONews website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. The repository set up at `https://github.com/Feiran-Z/ECONews`
3. Git installed on your local machine

## Deployment Steps

### Option 1: Automatic Deployment via GitHub Actions (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial ECONews website deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main

3. **Monitor Deployment:**
   - Go to the "Actions" tab in your repository
   - You should see a workflow running called "Deploy Jekyll site to Pages"
   - Wait for it to complete (usually 2-3 minutes)

4. **Access Your Site:**
   - Once deployed, your site will be available at:
     `https://Feiran-Z.github.io/ECONews/`

### Option 2: Manual Deployment

If GitHub Actions doesn't work, you can deploy manually:

1. **Build the site locally:**
   ```bash
   bundle exec jekyll build
   ```
   This creates a `_site` directory with the built website.

2. **Push to `gh-pages` branch:**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r _site/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   git checkout main
   ```

3. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose branch: `gh-pages`
   - Folder: `/ (root)`

## Custom Domain Setup (Optional)

If you want to use a custom domain like `econews.example.com`:

1. **Configure DNS:**
   - Add a CNAME record pointing to `Feiran-Z.github.io`
   - Or add A records pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

2. **Configure in GitHub:**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter your domain
   - Check "Enforce HTTPS"

3. **Update `_config.yml`:**
   ```yaml
   baseurl: "" # Remove or set to empty
   url: "https://yourdomain.com"
   ```

## Adding New Content

### Blog Posts
1. Create a new Markdown file in `_posts/` with filename format: `YYYY-MM-DD-title.md`
2. Follow the template in existing posts
3. Commit and push to GitHub
4. GitHub Actions will automatically rebuild and deploy

### Pages
1. Create a new `.md` file in the root directory
2. Add front matter:
   ```yaml
   ---
   layout: default
   title: Your Page Title
   ---
   ```
3. Add your content in Markdown
4. Commit and push

## Troubleshooting

### Common Issues

1. **Build fails on GitHub Actions:**
   - Check the Actions tab for error details
   - Ensure `Gemfile.lock` is committed
   - Verify Ruby version compatibility

2. **Site not updating:**
   - Clear browser cache
   - Check GitHub Actions workflow status
   - Wait a few minutes for CDN propagation

3. **CSS/JS not loading:**
   - Check relative URLs in templates
   - Verify asset paths are correct
   - Ensure `baseurl` is set correctly in `_config.yml`

4. **404 errors:**
   - Check permalink settings
   - Verify file names and extensions
   - Ensure files are in correct directories

### Local Testing

To test locally before deploying:

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Open http://localhost:4000/ECONews/
```

## Maintenance

### Regular Updates
- Add new blog posts weekly
- Update dependencies periodically
- Monitor site analytics
- Backup content regularly

### Security
- Keep dependencies updated
- Use HTTPS (enforced by GitHub Pages)
- Regular security audits

### Performance
- Optimize images before uploading
- Minimize custom JavaScript
- Use efficient CSS selectors

## Support

For issues with deployment:
1. Check GitHub Actions logs
2. Review Jekyll documentation
3. Check GitHub Pages status: https://www.githubstatus.com/

For content issues:
1. Review Markdown formatting
2. Check front matter syntax
3. Validate URLs and links