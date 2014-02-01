//Generate script tag in header
var sjs = document.createElement('script');
sjs.type = 'text/javascript';
sjs.src = '//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js';
var head = document.getElementsByTagName('head')[0];
head.appendChild(sjs);
