---
layout: page
title: Artículos
---

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}


{% for post in site.posts %}

{{ post.title }}({{ post.url }}) &raquo; {{ post.date | date_to_string }}
{{ post.content | strip_html | truncate: 150 }}

{% endfor %}
