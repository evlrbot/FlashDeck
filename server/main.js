import { Meteor } from 'meteor/meteor';

Meteor.startup(function(){
    decks = new Mongo.Collection('decks');
    decks.update(
	{
	    'name': 'Oblique Strategies'
	},
	{
	    'name':'Oblique Strategies',
	    'cards': [
		'hello',
		'test',
		'goodbye'
	    ],
	    'public': true
	}, {
	    'upsert': true
	}
    );

    decks.update(
	{
	    'name': 'Maths'
	},
	{
	    'name':'Maths',
	    'cards': [
		["Q", "A"],
		["q", "a"],
		["X", "Y"],
	    ],
	    'public': true
	}, {
	    'upsert': true
	}
    );
});

Meteor.publish('decks', function() {
    return decks.find({'public':true});
});
