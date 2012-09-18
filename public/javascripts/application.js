MyApp = Ember.Application.create({
  VERSION: '1.0.0',
  name:'my ember application'
});
MyApp.ready = function() {
  alert('my ember application is ready to go');
  alert(MyApp.Mickey.get('fullName'));
  MyApp.Mickey.say();
  
  var tom = Person.create({
    name: "Tom Dale",
    helloWorld: function() {
      this.say("Hi my name is " + this.get('name'));
    }
  });
  
  tom.helloWorld();
  
  
  
  var view = Ember.View.create({
    templateName: 'say-hello',
    name: "Bob"
  });
  
  view.append();

}

MyApp.Mickey = Ember.Object.create({
  say: function() {
    alert('this is a method on the person object!');
  },
  firstName: 'mickey',
  lastName: 'yawn',
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  // Call this flag to mark the function as a property
  }.property()
});


Person = Ember.Object.extend({
  say: function(thing) {
    alert(thing);
 }
});







/*


App.Post = Ember.Object.extend({
});
App.PostController = Ember.ObjectController.extend({
  author: function() {
    return [this.get('salutation'), this.get('name')].join(' ');
  }.property('salutation', 'name')
});
App.PostView = Ember.View.extend({
  // the controller is the initial context for the template
  controller: null,
  template: Ember.Handlebars.compile("<h1>{{title}}</h1><h2>{{author}}</h2><div>{{body}}</div>")
});
var post = App.Post.create();
var postController = App.PostController.create({ content: post });
App.PostView.create({ controller: postController }).appendTo('body');
jQuery.getJSON("/posts/1", function(json) {
  post.setProperties(json);
});



*/