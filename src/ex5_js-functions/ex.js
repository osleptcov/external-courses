var MyModule = (function() {
    var name = 'Habrahabr';
    function sayPreved() {
       console.log('PREVED ' + name.toUpperCase());
    }
    return {
       sayPrevedToHabrahabr: function() {
          sayPreved(name);
       },
       sayPrevedToHabrahabr1: function() {
           name+='1'
        sayPreved(name);
     }
    }
 })();
 MyModule.sayPrevedToHabrahabr();
 MyModule.sayPrevedToHabrahabr1();
 MyModule.sayPrevedToHabrahabr();
 