!function(a,b){"use strict";function c(a){var b;return a?(b=document.createElement("div"),b.innerHTML=a,b.childNodes[0].nodeValue):""}function d(a){return a.blogPosts}function e(a){return function(b){return b.slice(0,a)}}function f(a){return a.map(g)}function g(a){return{url:a.permaUrl,originBlogUrl:a.originBlog.url,title:a.title,summary:c(a.summary),author:a.author.name,publishDate:b.moment(a.publishDate,"MM/DD/YYYY").format("YYYY-MM-DD")}}b.blogApi={getBlogPosts:function(b){return a.getJSON("//web-api.tretton37.com/feed/").then(d).then(e(b)).then(f)}}}(window.jQuery,window);