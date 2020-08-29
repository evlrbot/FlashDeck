let deck = [];
Meteor.startup(function() {
    Session.set('deck','Oblique Strategies');
});

// return a random card from the deck
function pick(deck) {
    return deck[Math.floor(Math.random()*deck.length)];
}

// when the deck UI is created, 
// get the current deck, 
// then pick a card
Template.deck.onCreated(function(){
    const handle = Meteor.subscribe('decks');
    Tracker.autorun(function() {
	const isReady = handle.ready();
	if(isReady) {
	    // get the current deck
	    console.log(Session.get('deck'));
	    deck = decks.findOne({'name':Session.get('deck')});
	    console.log(deck);

	    // pick a card
	    let card = pick(deck.cards);
	    console.log(card, deck.name);

	    // if card is length 1 show index 0 for back
	    // if card is length 2 show index 1 for front
	    // update card UI 
	    if(card.length == 2 ) {
		$("#back_text").html(card[1]);
		$("#front_text").html(card[0]);
	    } 
	    else {
		$("#back_text").html(card);
		$("#front_text").html(deck.name);	    
	    }
	}
    });
});

// deck events
Template.deck.events = {
    // flip the card over
    'click #card': function(e) {
	Session.set('foo','bar');
	if($("#card").hasClass("flipped")) {
            $("#card").toggleClass("flipped");
	    //$("#front_text").html(pick(deck)[0]);
	} else {
	    $("#card").toggleClass("flipped");
	    //$("#back_text").html(pick(deck)[1]);
	}

	/*
	  $("#card").toggleClass("flipped");
	  card = pick(deck);
	  $("#back_text").html(card[1]);
	  $("#front_text").html(card[0]);
	*/
	
    }
    // swipe left; previous card
    // swipe right; next card
    // keep a history of cards?
    // UI for random order or history order
}
