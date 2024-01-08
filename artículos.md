---
layout: page
title: Artículos
---
<hr size="5px" color="#268BD4" />
{% for post in site.posts %}
  * <strong>{{ post.date | date: "%-d/%-m/%Y" }}</strong> &raquo; [ {{ post.title }} ]({{ post.url }}) <br> <i>{{ post.content | strip_html | truncate: 120 }}</i> <a href="{{ site.url }}{{ post.url }}" title="Leer más"><i>Leer más...</i></a>
{% endfor %}

<hr size="5px" color="#268BD4" />
<<[Volver al Inicio](https://jrgarcia.es)


