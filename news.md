---
layout: default
title: Selected News
permalink: /news/
---

<div class="news-content">
  <section class="news-header">
    <h2>Selected News Analysis</h2>
    <p class="subtitle">Weekly analysis of economic news using IB Economics frameworks</p>
  </section>

  {% if paginator.posts.size > 0 %}
    <div class="posts-list">
      {% for post in paginator.posts %}
        <article class="post-preview">
          <header class="post-header">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <div class="post-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
              {% if post.author %}
                <span class="post-author">by {{ post.author }}</span>
              {% endif %}
            </div>
          </header>

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

          <footer class="post-footer">
            {% if post.tags %}
              <div class="post-tags">
                {% for tag in post.tags limit: 3 %}
                  <span class="tag">{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}

            <a href="{{ post.url | relative_url }}" class="read-more">Read Full Analysis →</a>
          </footer>
        </article>
      {% endfor %}
    </div>

    <!-- Pagination -->
    {% if paginator.total_pages > 1 %}
      <nav class="pagination">
        {% if paginator.previous_page %}
          <a href="{{ paginator.previous_page_path | relative_url }}" class="previous">← Previous</a>
        {% endif %}

        <span class="page-number">
          Page {{ paginator.page }} of {{ paginator.total_pages }}
        </span>

        {% if paginator.next_page %}
          <a href="{{ paginator.next_page_path | relative_url }}" class="next">Next →</a>
        {% endif %}
      </nav>
    {% endif %}
  {% else %}
    <p class="no-posts">No news articles yet. Check back soon for updates!</p>
  {% endif %}
</div>