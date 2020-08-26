import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './oblique_strategies.js';

// set the deck
const deck = eno_strategies;

// return a random card
function pick(deck) {
    return deck[Math.floor(Math.random()*deck.length)];
}

// card events
Template.card.events = {
    'click #card': function(e) {
	e.preventDefault();

	if($("#card").hasClass("flipped")) {
	    console.log("flip front");
	    $("#card").toggleClass("flipped");
	    //$("#back").hide();	    
	} else {
	    console.log("flip back. reset card.");
	    $("#card").toggleClass("flipped");
	    $("#back_text").html(pick(deck));
	    //$("#back").show();
	}
    }
}
