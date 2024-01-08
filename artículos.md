---
layout: page
title: Artículos
---

{% for post in site.posts %}

  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }}) <br> <i>{{ post.content | strip_html | truncate: 150 }}</i>{
{% endfor %}

