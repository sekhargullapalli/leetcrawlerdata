!function(a,b,c,d,e){"use strict";function f(){var a=h.events();h.events(a.concat(i())),h.completedEventsLoaded(!0)}function g(){return i().length||h.events().length}var h={hasError:a.observable(!1),events:a.observableArray(),hasEvents:g,completedEventsLoaded:a.observable(!1),loadCompletedEvents:f,hasUpcomingEvents:a.observable(!0)},i=a.observableArray();d.when(b.getEvents(),c.getEvents()).done(function(a,b){if(!a)return void h.hasError(!0);var c=a.concat(b);c=e.sortBy(c,function(a){return a.startDate.toDate()});var d=e.groupBy(c,"upcoming");h.events(d.true||[]),i(d.false.reverse()||[]),h.hasUpcomingEvents(d.true);var f=window.location.hash.substring(1);if(f){document.getElementById(f).scrollIntoView()}}).fail(function(){h.hasError(!0)}),a.applyBindings(h)}(window.ko,window.eventApi,window.eventPosts,window.jQuery,window._);