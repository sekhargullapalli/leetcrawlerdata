!function(a,b,c){"use strict";function d(a){return isNaN(a)?a:a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function e(a){return null===a||void 0===a}function f(a){if(e(a)||!a.reputationPointsChange)return null;var b=a.reputationPointsChange.length,c=a.reputationPointsChange[Math.max(0,b-6)][1],d=a.reputationPoints;return Math.floor(100*d/c)-100}c.statsModel={create:function(){var a=b.observable({}),c=b.observable({}),e=b.observable({}),g=b.observable({}),h=b.observable(),i=b.observableArray(),j=b.observable(0);return{twitterStats:c,gitHubStats:e,stackOverflowStats:g,blogPosts:h,companyBlogPostCount:j,originCountries:i,ninjas:a,totalNinjas:b.computed(function(){var b=a();return b.length>0?b[b.length-1][1]:"~97"}),totalBlogPosts:b.computed(function(){return h()?h()+j():"~400"}),totalNationalities:b.computed(function(){var a=i();return a&&a.length?a.length:"~14"}),compositeTwitter:b.computed(function(){var a=c();if(a)return[{name:"DAYS ON THE TWITTERS",value:a.daysOnTwitter},{name:"TWEETS",value:a.tweets},{name:"PEOPLE USING IT",value:a.ninjas}]}),compositeGithub:b.computed(function(){var a=e();if(a)return[{name:"GITHUB REPOSITORIES",value:a.repositories},{name:"GISTS",value:a.gists},{name:"PEOPLE CONTRIBUTING",value:a.ninjas}]}),compositeStackOverflow:b.computed(function(){var a=g();if(a)return[{name:"REPUTATION POINTS",value:a.reputationPoints},{name:"REPUTATION INCREASE %, FIVE YEARS",value:f(a)},{name:"PEOPLE CONTRIBUTING",value:a.ninjas}]}),twitterPercentageOfNinjas:function(){var a="-",b=c();return b&&(a=Math.floor(b.percentageOfNinjas)),a},gitHubPercentageOfNinjas:function(){var a="-",b=e();return b&&(a=Math.floor(b.percentageOfNinjas)),a},stackOverflowPercentageOfNinjas:function(){var a="-",b=g();return b&&(a=Math.floor(b.percentageOfNinjas)),a},twitterTweets:function(){var a="-",b=c();return b&&(a=d(b.tweets)),a},gitHubNinjas:function(){var a="-",b=e();return b&&(a=b.ninjas),a},stackOverflowReputationPoints:function(){var a="-",b=g();return b&&(a=d(b.reputationPoints)),a}}}}}(window.jQuery,window.ko,window);