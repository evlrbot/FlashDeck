let deck = [];

// return a random card from the deck
function pick(deck) {
    return deck[Math.floor(Math.random()*deck.length)];
}

// when the deck UI is created, get the current deck, then pick a card
Template.deck.onCreated(function(){
    const handle = Meteor.subscribe('decks');
    Tracker.autorun(function() {
	const isReady = handle.ready();
	console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);
	if(isReady) {
	    deck = decks.findOne({'name':'Oblique Strategies'});
	    deck = deck.cards;
	    $("#back_text").html(pick(deck));
	}
    });
});

// deck events
Template.deck.events = {
    // flip the card over
    'click #card': function(e) {
	$("#card").toggleClass("flipped");
    }
    // swipe left; previous card
    // swipe right; next card
    // keep a history of cards?
    // UI for random order or history order
}
