$(document).ready(function () {
    var bar = $('.progress-color');
    var width = window.innerWidth;
    
    $(document).on("scroll", function() {
    	var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        bar.width(width*scrollpercent);
    });

});