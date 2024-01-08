---
layout: page
title: Artículos
---

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}


{% for post in site.posts %}

[{{ post.title }}]({{ post.url }})
{{ post.date | date: "%B %d, %Y" }}
{{ post.content | strip_html | truncate: 250 }}

{% endfor %}
