---
title: All Content
layout: archive
---

<div class="entries-list">
  {% for post in site.posts %}
    <section class="taxonomy__section">
      {% include archive-simple.html type="list" %}
    </section>
  {% endfor %}
</div>
