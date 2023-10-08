/*global $, alert, console*/

$(document).ready(function () {
    
    "use strict";
	
	$("header").height($(window).height());

    var myHeader = $('header'),
        
        myInfo = $('.all');
	
	$("header").height($(window).height());

	$(window).resize(function () {
       
        myHeader.height($(window).height());
                
        myInfo.each(function () {

            $(this).css('margin-top', ($(window).height() - $('.all').height()) / 2);

        });
        
    });
		
    myInfo.each(function () {
       
        $(this).css('margin-top', ($(window).height() - $('.all').height()) / 2);
        
    });
});