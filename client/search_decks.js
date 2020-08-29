import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.decks.onCreated(function(){
    // subscribe to decks
    var handle = Meteor.subscribe('decks');
    Tracker.autorun(function() {
	const isReady = handle.ready();
    });
});

Template.decks.helpers({
    'get_decks' : function() {
	return decks.find().fetch();
    }
});

Template.decks.events({
    'click' : function() {
	Session.set('deck',this.name);
	FlowRouter.go('Deck');
    }
});
