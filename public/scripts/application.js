// Generated by CoffeeScript 1.6.3
(function() {
  var AUTHOR_LIST_LOCATION, Footer;

  Footer = window.zooniverse.controllers.Footer;

  (new Footer).el.appendTo('body > .footer > .container');

  AUTHOR_LIST_LOCATION = 'http://zooniverse-static.s3.amazonaws.com/radio.galaxyzoo.org/rgzauthors.json';

  $(function() {
    return $.getJSON(AUTHOR_LIST_LOCATION, function(_arg) {
      var authorList, rgz_authors;
      rgz_authors = _arg.rgz_authors;
      authorList = rgz_authors.join(', ');
      return document.querySelector('#author-list').insertAdjacentHTML('beforeBegin', authorList);
    });
  });

}).call(this);