# Website Monitoring Setup

## Monitoring Requirements for ECONews

### 1. Uptime Monitoring
- **Tool**: UptimeRobot (free tier: 50 monitors, 5-minute checks)
- **URL**: https://Feiran-Z.github.io/ECONews/
- **Check Frequency**: 5 minutes
- **Alert Channels**: Email, Slack (if configured)
- **Response Time Monitoring**: Yes

### 2. Performance Monitoring
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: Basic free analysis
- **WebPageTest**: Free tier for performance testing

### 3. Analytics
- **Google Analytics 4**: Already configured in website
- **GitHub Pages Analytics**: Basic traffic stats from GitHub

### 4. Content Monitoring
- **Broken Link Checker**: Weekly scans
- **SEO Health Checks**: Monthly audits
- **Content Freshness**: Track last update dates

## Setup Instructions

### UptimeRobot Setup
1. Create free account at https://uptimerobot.com/
2. Add new monitor:
   - Monitor Type: HTTP(s)
   - Friendly Name: ECONews Website
   - URL: https://Feiran-Z.github.io/ECONews/
   - Monitoring Interval: 5 minutes
   - Alert Contacts: Add email
3. Configure alerts for:
   - Downtime (any)
   - Slow response (>3 seconds)
   - SSL certificate expiration

### Performance Monitoring Schedule
- Weekly: PageSpeed Insights check
- Monthly: Full performance audit
- Quarterly: User experience review

### Maintenance Tasks
- Weekly: Check GitHub Actions workflow status
- Monthly: Update dependencies (Gemfile)
- Quarterly: Review analytics and user feedback

## Alert Configuration
- **Critical**: Site down > 5 minutes
- **Warning**: Slow response > 3 seconds
- **Info**: SSL certificate expiring in 30 days

## Integration Options
- Slack webhook for team notifications
- Email alerts for critical issues
- GitHub Issues for tracking problems