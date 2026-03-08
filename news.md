---
layout: default
title: Selected News
permalink: /news/
---

<div class="page-content">
  <section class="hero" aria-labelledby="news-hero-heading">
    <h2 id="news-hero-heading"><i class="fas fa-newspaper"></i> Selected News Analysis</h2>
    <p class="hero-subtitle">Weekly analysis of economic news using IB Economics frameworks and methodologies</p>
  </section>

  {% assign paginator.posts = site.posts %}
  {% if paginator.posts.size > 0 %}
    <section class="recent-news" aria-labelledby="news-heading">
      <h3 id="news-heading"><i class="fas fa-chart-line"></i> Latest Economic News Analysis</h3>

      <div class="news-grid">
        {% for post in paginator.posts %}
          <article class="news-card" aria-labelledby="post-{{ forloop.index }}">
            <h4 id="post-{{ forloop.index }}">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h4>
            <div class="post-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}" aria-label="Published on {{ post.date | date: '%B %d, %Y' }}">
                <i class="far fa-calendar"></i> {{ post.date | date: "%B %d, %Y" }}
              </time>
              {% if post.author %}
                <span class="post-author" aria-label="Author: {{ post.author }}">
                  <i class="fas fa-user"></i> {{ post.author }}
                </span>
              {% endif %}
            </div>
            <div class="post-excerpt">
              {% assign excerpt = post.content | strip_html %}
              {% assign lines = excerpt | split: '.' %}
              {% assign first_five_lines = '' %}
              {% for i in (0..4) %}
                {% if lines[i] %}
                  {% assign first_five_lines = first_five_lines | append: lines[i] | append: '.' %}
                {% endif %}
              {% endfor %}
              {{ first_five_lines | truncatewords: 100 }}
            </div>
            {% if post.tags %}
              <div class="post-tags">
                {% for tag in post.tags limit: 3 %}
                  <span class="tag" aria-label="Tag: {{ tag }}">{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
            <a href="{{ post.url | relative_url }}" class="read-more" aria-label="Read full analysis of {{ post.title }}">
              Read Analysis <i class="fas fa-arrow-right"></i>
            </a>
          </article>
        {% endfor %}
      </div>
    </section>

    <!-- Pagination -->
    {% if paginator.total_pages > 1 %}
      <nav class="pagination" aria-label="News pagination">
        <div class="pagination-content">
          {% if paginator.previous_page %}
            <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination-button previous" aria-label="Previous page">
              <i class="fas fa-chevron-left"></i> Previous
            </a>
          {% endif %}

          <div class="page-info">
            <span class="current-page" aria-label="Page {{ paginator.page }} of {{ paginator.total_pages }}">
              Page <strong>{{ paginator.page }}</strong> of {{ paginator.total_pages }}
            </span>
            <div class="page-indicator">
              {% for page in (1..paginator.total_pages) %}
                {% if page == paginator.page %}
                  <span class="page-dot active" aria-label="Current page {{ page }}"></span>
                {% else %}
                  <span class="page-dot" aria-label="Page {{ page }}"></span>
                {% endif %}
              {% endfor %}
            </div>
          </div>

          {% if paginator.next_page %}
            <a href="{{ paginator.next_page_path | relative_url }}" class="pagination-button next" aria-label="Next page">
              Next <i class="fas fa-chevron-right"></i>
            </a>
          {% endif %}
        </div>
      </nav>
    {% endif %}
  {% else %}
    <div class="no-posts" role="alert">
      <div class="no-posts-content">
        <i class="fas fa-newspaper"></i>
        <h3>No News Articles Yet</h3>
        <p>Check back soon for weekly economic news analysis updates!</p>
        <a href="{{ '/' | relative_url }}" class="back-home">
          <i class="fas fa-home"></i> Return to Home
        </a>
      </div>
    </div>
  {% endif %}
</div>