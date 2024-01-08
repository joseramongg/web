---
layout: page
title: Artículos
---

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }}) <br> <i>{{ post.content | strip_html | truncate: 150 }}</i>{
{% endfor %}



{% for post in site.posts limit: 4 %}
    a(href="{{post.url}}" target="_blank" style="background-image: url(assets/img/posts/lesplannen/thumbnails/{{post.thumbnail}})").lesplan-thumb
      .article-meta
        .name {{post.title}}
        .date {{ post.date | date: "%b %d, %Y" }}
    {% endfor %}

