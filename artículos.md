---
layout: page
title: Artículos
---

{% for post in site.posts %}
<br>
  * {{ post.date | <input type="datetime-local"> }} &raquo; [ {{ post.title }} ]({{ post.url }}) <br> <i>{{ post.content | strip_html | truncate: 150 }}</i>{
{% endfor %}

