Template.decks.onCreated(function(){
    // subscribe to decks
    var handle = Meteor.subscribe('decks');
    Tracker.autorun(function() {
	const isReady = handle.ready();
	console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);
    });
});

Template.decks.helpers({
    'get_decks' : function() {
	return decks.find().fetch();
    }
});
