!function(a,b,c,d){"use strict";var e={invalidResponse:c.observable(!1),isLoadingFeedPosts:c.observable(!0),feedPosts:c.observableArray()};d.getBlogPosts(3).done(function(a){e.feedPosts(a),e.isLoadingFeedPosts(!1)}).fail(function(){e.invalidResponse(!0),e.isLoadingFeedPosts(!1)}),c.applyBindings(e,document.getElementById("ninjaBlogs"))}(window.jQuery,window._,window.ko,window.blogApi);