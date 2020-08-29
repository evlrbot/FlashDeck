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
		["1", "2"],
		["2 + 2", "4"],
		["<p style='font-size:0.4em !important; text-align:center; border:0px solid red; width:100%; display:block; '>“O Romeo, Romeo, wherefore art thou Romeo<br/>Deny thy father and refuse thy name<br/>Or if thou wilt not, be but sworn my love<br/>And I’ll no longer be a Capulet.”</p>","Romeo & Juliet<br/><span style='font-size:0.4em'>~ William Shakespeare</span>"],
		["<p style='font-size:0.4em !important; text-align:center; border:0px solid red; width:100%; display:block; '>“Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.”</p>","Genesis 1:2"]
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
