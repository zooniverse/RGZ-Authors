Footer = window.zooniverse.controllers.Footer
(new Footer).el.appendTo 'body > .footer > .container'

AUTHOR_LIST_LOCATION = 'http://zooniverse-static.s3.amazonaws.com/radio.galaxyzoo.org/rgzauthors.json'

$ ->
	$.getJSON AUTHOR_LIST_LOCATION, ({ rgz_authors }) ->
		authorList = rgz_authors.join ', '
		document.querySelector('#author-list').insertAdjacentHTML 'beforeBegin', authorList