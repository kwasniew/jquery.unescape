jquery.unescape
===============

jquery plugin to programatically unescape HTML code



Given:  
`<div class="escaped">&lt;a href="http://www.example1.com"&gt;link1&lt;a/&gt;</div>` 
`<div class="escaped">&lt;a href="http://www.example2.com"&gt;link2&lt;a/&gt;</div>` 

When:   
`$(".escaped").unescape();`   

Produces:   
`<div class="escaped"><a href="http://www.example1.com">link1</a></div>`  
`<div class="escaped"><a href="http://www.example2.com">link2</a></div>`  

