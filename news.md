---
layout: default
title: News Archive
permalink: /news/
---

<div class="page-content">
  <section class="hero" aria-labelledby="news-hero-heading">
    <h2 id="news-hero-heading"><i class="fas fa-newspaper"></i> News Archive</h2>
    <p class="hero-subtitle">Archive of selected economic news with explicit connections to IB syllabus</p>
  </section>

  {% if site.posts.size > 0 %}
    <section class="recent-news" aria-labelledby="news-heading">
      <h3 id="news-heading"><i class="fas fa-chart-line"></i> News Archive</h3>

      <div class="news-grid">
        {% for post in site.posts %}
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
              {% if post.tags %}
                <span class="post-tags">
                  {% for tag in post.tags limit: 5 %}
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
            <a href="{{ post.url | relative_url }}" class="read-more" aria-label="Read full analysis of {{ post.title }}">
              Read more <i class="fas fa-arrow-right"></i>
            </a>
          </article>
        {% endfor %}
      </div>
    </section>

  {% else %}
    <div class="no-posts" role="alert">
      <div class="no-posts-content">
        <i class="fas fa-newspaper"></i>
        <h3>No News Articles Yet</h3>
        <p>Check back soon for weekly economic news updates!</p>
        <a href="{{ '/' | relative_url }}" class="back-home">
          <i class="fas fa-home"></i> Return to Home
        </a>
      </div>
    </div>
  {% endif %}
</div>