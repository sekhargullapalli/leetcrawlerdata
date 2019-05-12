(function(_, moment, eventFactory, ns) {
  'use strict';

  var posts = [ 
    {
      html: '<p>A swenug event hosted at our office in Stockholm. The speaker is our very own <a href="http://tretton37.com/meet/karl-adriansson">Karl Adriansson</a></p><p>A prerequisite for building great software is that we first now what is expected. During this session we will cover how to find a common language to define our requirements Behavior-Driven Development (BDD). </p><p>When we have the requirements, we will look at how you, as a developer, can use these when implementing your code. Using the BDD scenarios as &quot;definition of done&quot; for your regression tests. </p><p><a href="http://www.swenug.se/events/sthlm-lat-oss-bygga-ratt-fran-borjan">Read more and sign up here!</a></p>',
      data: {"name":"Build it correctly from start","startDate":"2016-01-21 18:00","venue":"tretton37 Stockholm","salesEndDate":"2016-01-20 17:00","requiredProperties":"name, startDate, salesEndDate"}
    },
    {
      html: '<p>Devnull is the perfect mix between an awesome hackathon and a fierce competition where you, at any time, can see your progress in relation to the other teams.  </p><p>You can either sign up together as a team (1-3 persons) or you join one as you arrive - then it&#x27;s game on! You solve each individual task by guiding a character through a multi-user game filled with dungeons and monsters.</p><p>All tasks will involve asynchronous development, and a few of them also require that you figure out which algorithms you need to implement. The difficulty will - of course - increase as the game progresses. The dungeons are also filled with weapons, potions, rings and teleportation devices. One of the first steps will most likely be to get your character to survive...</p><p><img src&#x3D;"https://tretton37img.blob.core.windows.net/blog/devnull-1" alt&#x3D;"Devnull" class&#x3D;"center" /></p><p>You are free to choose whatever programming language you are most comfortable with - as long as it can send commands over HTTPS to the game server. Your solutions do not need to be pretty, good old ASCII logging is sufficient as long as the code works. :-)</p><p>The rules are quite simple. You win by being first to solve a certain task. The winning team will receive awesome prizes (we&#x27;re not talking t-shirts and lanyards here). During the whole experience we&#x27;ll provide food, drinks and a very unique development experience!</p><p><img src&#x3D;"https://tretton37img.blob.core.windows.net/blog/devnull-3" alt&#x3D;"Devnull" class&#x3D;"center" /></p><p>Intrigued? <a href="http://escapedevnull.com/instance/devnull-with-tretton37-malmolund">Sign up here</a> and we&#x27;ll see you February 13th.</p>',
      data: {"name":"Escape from Devnull","startDate":"2016-02-13 09:00","venue":"tretton37 Lund","salesEndDate":"2016-02-05 17:00","requiredProperties":"name, startDate, salesEndDate"}
    }
  ];
  var events = [];

  for (var i = posts.length - 1; i >= 0; i--) {
    //Check for required properties
    var postData = posts[i].data;
    if (!postData.hasOwnProperty('name') && !postData.hasOwnProperty('startDate') && !postData.hasOwnProperty('salesEndDate')) {
      continue;
    }

    var status = moment(postData.startDate).isAfter() ? 'not-started' : 'completed';
    var venue = postData.venue ? { name: postData.venue } : null;

    var vm = eventFactory.create(postData.name, postData.startDate, posts[i].html, venue, postData.salesEndDate, status);
    events.push(vm);
  };

  ns.eventPosts = {
    getEvents: function() { return events; }
  }

}(window._, window.moment, window.eventFactory, window));
