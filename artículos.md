---
layout: page
title: Artículos
---

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }}) <br> {{ post.content | strip_html | truncate: 150 }}
{% endfor %}


