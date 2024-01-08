---
layout: page
title: Artículos
---

{% for post in site.posts %}

  * <strong>{{ post.date | date: "%-d/%-m/%Y" }}</strong> &raquo; [ {{ post.title }} ]({{ post.url }}) <br> <i>{{ post.content | strip_html | truncate: 150 }}</i>{
{% endfor %}

