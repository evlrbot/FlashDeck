import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates.html';
import './routes.js';
import './oblique_strategies.js';

// set the deck
const deck = eno_strategies;

// return a random card
function pick(deck) {
    return deck[Math.floor(Math.random()*deck.length)];
}

// deck events
Template.deck.events = {
    'click #card': function(e) {
	e.preventDefault();

	if($("#card").hasClass("flipped")) {
	    $("#card").toggleClass("flipped");
	} else {
	    $("#card").toggleClass("flipped");
	    $("#back_text").html(pick(deck));
	}
    }
}

Template.nav.events({
    'click #nav .fa': function(){
	$("#nav").toggleClass("open");
	if($("#nav").hasClass("open")){
	    $("#nav i").removeClass("fa-arrow-up");
	    $("#nav i").addClass("fa-arrow-down");
	    $("#nav ul").css("display","block")
	} else {
	    $("#nav i").addClass("fa-arrow-up");
	    $("#nav i").removeClass("fa-arrow-down");
	    $("#nav ul").css("display","none")
	}
    },
    'click #nav a': function() {
	$("#nav").toggleClass("open");
	$("#nav i").addClass("fa-arrow-up");
	$("#nav i").removeClass("fa-arrow-down");
	$("#nav ul").css("display","none")
    }
});


