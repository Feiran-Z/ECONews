---
layout: default
title: Contact
---

<div class="contact-content">
  <section class="contact-header">
    <h2>Contact ECONews</h2>
    <p class="subtitle">Get in touch with suggestions, questions, or feedback</p>
  </section>

  <section class="contact-form-section">
    <h3>Send Us a Message</h3>
    <p>Have a news article you'd like us to analyze? Want to suggest improvements to the site? Use the form below to contact us.</p>

    <form class="contact-form" action="https://formspree.io/f/{{ site.email }}" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <select id="subject" name="subject" required>
          <option value="" disabled selected>Select a topic</option>
          <option value="news-suggestion">News Article Suggestion</option>
          <option value="feedback">Website Feedback</option>
          <option value="question">Question about IB Economics</option>
          <option value="collaboration">Collaboration Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>

      <div class="form-group">
        <label for="news-url">News Article URL (if applicable)</label>
        <input type="url" id="news-url" name="news-url" placeholder="https://example.com/news-article">
      </div>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </section>

  <section class="contact-info">
    <h3>Other Ways to Connect</h3>

    <div class="contact-methods">
      <div class="contact-method">
        <h4>GitHub Repository</h4>
        <p>This website is open source! Visit our GitHub repository to view the code, report issues, or contribute:</p>
        <p><a href="https://github.com/Feiran-Z/ECONews" target="_blank" rel="noopener noreferrer">github.com/Feiran-Z/ECONews</a></p>
      </div>

      <div class="contact-method">
        <h4>Email</h4>
        <p>For direct inquiries, you can email:</p>
        <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
      </div>

      <div class="contact-method">
        <h4>Follow Updates</h4>
        <p>Stay updated with new economic news analysis:</p>
        <p><a href="{{ '/feed.xml' | relative_url }}">Subscribe to RSS Feed</a></p>
      </div>
    </div>
  </section>

  <section class="faq">
    <h3>Frequently Asked Questions</h3>

    <div class="faq-item">
      <h4>How often is new content added?</h4>
      <p>We aim to publish new economic news analysis weekly. Each post analyzes a recent economic event using IB Economics frameworks.</p>
    </div>

    <div class="faq-item">
      <h4>Can I suggest news articles for analysis?</h4>
      <p>Absolutely! We welcome suggestions from students and teachers. Use the contact form above to submit news articles you'd like us to analyze.</p>
    </div>

    <div class="faq-item">
      <h4>How are articles selected for analysis?</h4>
      <p>We select articles that: 1) Illustrate key IB Economics concepts, 2) Are from reputable news sources, 3) Have clear connections to the syllabus, and 4) Are timely and relevant.</p>
    </div>

    <div class="faq-item">
      <h4>Can I use this content in my IB Internal Assessment?</h4>
      <p>Yes! Our analysis can provide inspiration and examples for your IA. Remember to properly cite any sources you reference.</p>
    </div>

    <div class="faq-item">
      <h4>Is this site affiliated with the IB Organization?</h4>
      <p>No, ECONews is an independent educational resource created to support IB Economics students and teachers. It is not affiliated with or endorsed by the International Baccalaureate Organization.</p>
    </div>
  </section>
</div>