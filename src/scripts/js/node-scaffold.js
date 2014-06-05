$(function() {
  var gui = require('nw.gui');
  var win = gui.Window.get();
  $('.close-window').on('click', function() {
    win.close();
  });
  
  $('.min-window').on('click', function() {
    win.minimize();
  });
  
  $('.sign-in').on('click', function() {
    var home_win = gui.Window.get(
      window.open('home.html')
    );
    win.close();
  });
});
