---
layout: page
title: Artículos
---

** ARTÍCULOS
<! -- {% for post in site.posts %} -->

<hr size="5px" color="#268BD4" />
  * <strong>{{ post.date | date: "%-d/%-m/%Y" }}</strong> &raquo; [ {{ post.title }} ]({{ post.url }}) <br> <i>{{ post.content | strip_html | truncate: 150 }}</i>{
{% endfor %}

