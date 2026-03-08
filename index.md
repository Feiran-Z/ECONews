---
layout: default
title: Home
---

<div class="home-content">
  <section class="hero" aria-labelledby="hero-heading">
    <h2 id="hero-heading">Welcome to ECONews</h2>
    <p>Your companion for real-world examples connecting to IB Economics syllabus.</p>
  </section>

  <section class="recent-news" aria-labelledby="news-heading">
    <h3 id="news-heading"><i class="fas fa-chart-line"></i> Latest Economic News</h3>

    {% assign latest_posts = site.posts | limit: 4 %}
    {% if latest_posts.size > 0 %}
      <div class="news-grid">
        {% for post in latest_posts %}
          <article class="news-card" aria-labelledby="post-{{ forloop.index }}">
            <h4 id="post-{{ forloop.index }}">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h4>
            <div class="post-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}" aria-label="Published on {{ post.date | date: '%B %d, %Y' }}">
                {{ post.date | date: "%B %d, %Y" }}
              </time>
              {% if post.author %}
                <span class="post-author" aria-label="Author: {{ post.author }}">
                  <i class="fas fa-user"></i> {{ post.author }}
                </span>
              {% endif %}
              {% if post.tags %}
                <span class="post-tags">
                  {% for tag in post.tags limit: 3 %}
                    <span class="tag" aria-label="Tag: {{ tag }}">{{ tag }}</span>
                  {% endfor %}
                </span>
              {% endif %}
            </div>
            {% assign full_text = post.content | strip_html %}
            {% assign trigger = "News Summary" %}
            {% if full_text contains trigger %}
              {% assign parts = full_text | split: trigger %}
              {% assign text_after = parts[1] | strip %}   <!-- text after the FIRST occurrence -->
            {% else %}
              {% assign text_after = full_text %}
            {% endif %}
            <div class="post-excerpt">
              {{ text_after | truncatewords: 60 }}
            </div>
            <a href="{{ post.url | relative_url }}" class="read-more" aria-label="Read more of {{ post.title }}">
              Read more <i class="fas fa-arrow-right"></i>
            </a>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <div class="no-posts" role="alert">
        <p><i class="fas fa-newspaper"></i> No news articles yet. Check back soon for updates!</p>
      </div>
    {% endif %}
  </section>

  <section class="about-preview" aria-labelledby="about-heading">
    <h3 id="about-heading"><i class="fas fa-book-open"></i> About This Project</h3>
    <p>ECONews is designed to help IB Economics students connect real-world economic events with the theories and frameworks covered in their syllabus. Each week, we select relevant news articles and provide possible connections with IB Economics concepts, models, and theories.</p>
    <p>Our mission is to make economics accessible, relevant, and engaging for students preparing for their IB examinations.</p>
    <a href="{{ '/about/' | relative_url }}" class="learn-more" aria-label="Learn more about ECONews">
      Learn More About ECONews <i class="fas fa-arrow-right"></i>
    </a>
  </section>
</div>