!function(a,b,c){"use strict";function d(b){if(b&&0!==b.length){var c=a(b);a("html, body").animate({scrollTop:c.offset().top},1e3)}}function e(a,b){return a.title<b.title?-1:a.title>b.title?1:0}var f={isFetchingData:b.observable(!1),isInvalidResponse:b.observable(!1),isShowingJobPost:b.observable(!1),shownJobPostContent:b.observable({}),openPositionsLundSE:b.observableArray([]),openPositionsStocSE:b.observableArray([]),openPositionsHelsSE:b.observableArray([]),openPositionsBorlSE:b.observableArray([]),openPositionsLjubSI:b.observableArray([]),openPositionsOpenApp:b.observableArray([]),additionalPerksAreShown:b.observable(!1),worldMap:{isInvalidResponse:b.observable(!1),originCountries:b.observableArray(),animateWorldMap:function(a){a.selectAll("#"+f.worldMap.originCountries().join(",#")).transition().delay(function(a,b){return 100*b}).attr("class","fill")}},sortByLocation:function(a){var b=[];b.Lund=[],b.Stockholm=[],b.Helsingborg=[],b["Borlänge"]=[],b.Ljubljana=[];for(var c=0,d=a.length;c<d;c++){var g=a[c];null===g.city&&(g.city="");for(var h=g.city.split(/&\s*/),i=0,j=h.length;i<j;i++){var k=h[i].trim();if("Open application"!==g.title)if(""===k)for(var l=Object.keys(b),m=0,n=l.length;m<n;m++)b[l[m]].push(g);else b.hasOwnProperty(k)||(b[k]=[]),b[k].push(g);else f.openPositionsOpenApp(g)}}f.openPositionsLundSE(b.Lund.sort(e)),f.openPositionsStocSE(b.Stockholm.sort(e)),f.openPositionsHelsSE(b.Helsingborg.sort(e)),f.openPositionsBorlSE(b["Borlänge"].sort(e)),f.openPositionsLjubSI(b.Ljubljana.sort(e))},showJobDetails:function(b,c){window.location.hash=b.id,a("body").addClass("no-overlow"),f.isShowingJobPost(!0),b.clickedFromLocation="",""!==c&&(b.clickedFromLocation=" in "+c),f.shownJobPostContent([b])},checkDirectUrl:function(){var b=location.hash;if(""!==b){var c=a(b);c.length&&a("span",c.get()).trigger("click")}},hideJobDetails:function(){history.pushState("",document.title,window.location.pathname+window.location.search),a("body").removeClass("no-overlow"),d("#join"),f.isShowingJobPost(!1),setTimeout(function(){f.shownJobPostContent([])},300)},fetchData:function(){f.isFetchingData(!0),f.isInvalidResponse(!1),a.getJSON("//web-api.tretton37.com/external/resumator").done(function(a){f.sortByLocation(a),f.isFetchingData(!1),d(window.location.hash),f.checkDirectUrl()}).fail(function(){f.isFetchingData(!1),f.isInvalidResponse(!0)}),a.getJSON("//web-api.tretton37.com/statistics").done(function(a){f.worldMap.originCountries(a.originCountries),c.initialize()}).fail(function(){f.worldMap.isInvalidResponse(!0)})}};f.fetchData(),b.applyBindings(f),window.location.hash&&d("#join")}(window.jQuery,window.ko,window.chartRenderingService);