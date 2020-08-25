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


Template.card.onCreated(function() {
    // alert('created');
    $("#card").html(pick(deck));
});

Template.card.helpers({
    card : function(){
	return pick(deck);
    }
});

// card events
Template.card.events = {
    'click #flip': function(e) {
	e.preventDefault();

	if($(".flip-container").hasClass("hover")) {
	    $("#card").hide();
	    $("#card").html(pick(deck));
	    //Template.instance().card.set(pick(deck));
	} else {
	    $("#card").show();
	}
	$(".flip-container").toggleClass("hover");
    }
}
