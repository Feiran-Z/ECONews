---
layout: default
title: Home
---

<div class="home-content">
  <section class="hero">
    <h2>Welcome to ECONews</h2>
    <p>Your companion for analyzing current economic events through the lens of IB Economics.</p>
  </section>

  <section class="recent-news">
    <h3>Latest Economic News Analysis</h3>

    {% assign latest_posts = site.posts | limit: 5 %}
    {% if latest_posts.size > 0 %}
      <div class="news-grid">
        {% for post in latest_posts %}
          <article class="news-card">
            <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
            <div class="post-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
            </div>
            <div class="post-excerpt">
              {{ post.content | strip_html | truncatewords: 50 }}
            </div>
            <a href="{{ post.url | relative_url }}" class="read-more">Read Analysis →</a>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <p class="no-posts">No news articles yet. Check back soon for updates!</p>
    {% endif %}
  </section>

  <section class="about-preview">
    <h3>About This Project</h3>
    <p>ECONews is designed to help IB Economics students connect real-world economic events with the theories and frameworks covered in their syllabus. Each week, we select relevant news articles and provide analysis using IB Economics concepts.</p>
    <a href="{{ '/about/' | relative_url }}" class="learn-more">Learn More About ECONews →</a>
  </section>
</div>