---
title: "Blog"
layout: "base.njk"
---

## All Posts

<ul>
{% for post in collections.post %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>

{% include "postlist.njk" %}


[//]: # (https://egghead.io/lessons/11ty-define-an-eleventy-11ty-collection-to-create-a-blog)