---
layout: page
title: Tags
permalink: /tags/
---

{% for tag in site.tags %}
  {% assign tag_name = tag[0] %}
  {% assign tag_posts = tag[1] %}
  <h3><a href="{{ site.baseurl }}/tags/{{ tag_name }}/">{{ tag_name }}</a> <small>({{ tag_posts.size }})</small></h3>
  <ul>
    {% for post in tag_posts %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
