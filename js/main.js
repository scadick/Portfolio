// JavaScript Document
(function() {
	"use strict";
	
	var top = document.querySelector("#btt");
	function backTop(){
		scroll=0;
		window.scrollTo(0, 0);
	
	}
	
	
	top.addEventListener("click", backTop, false);
	
})();
