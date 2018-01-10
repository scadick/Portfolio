// JavaScript Document
(function() {
	"use strict";

	
	var top = document.querySelector("#btt");
	function backTop(){
		scroll=0;
		window.scrollTo(0, 0);
	
	}
	
	
	top.addEventListener("click", backTop, false);
	
	var media, demoreel, toggleButton, toggleButton;
		
	window.addEventListener("load", init, false);
	toggleButton.addEventListener("click", togglePlay, false);
	toggleB.addEventListener("click", toggleP, false);
	
	console.log("Fired");
	function init() {
		console.log("from init()");
		media = document.querySelector(".media");
		console.log(media.currentsrc);
		toggleButton = document.querySelector("#playVideo");
		console.log(toggleButton);
		toggleB = document.querySelector("#play");
	}
	function togglePlay(evt) {
		console.log("fired from togglePlay()");
		if(media.paused){
			media.play();
			evt.currentTarget.innerHTML = "Pause";
		}else{
			media.pause();
			evt.currentTarget.innerHTML = "Play";
		}
	}
	function toggleP(evt) {
		console.log("fired from togglePlay()");
		if(demoreel.paused){
			demoreel.play();
			evt.currentTarget.innerHTML = "Pause";
		}else{
			demoreel.pause();
			evt.currentTarget.innerHTML = "Play";
		}
	}	
})();