import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
  name: 'Deck',
  action(params, queryParams) {
      BlazeLayout.render('layout', {main: 'deck'});
  }
});

FlowRouter.route('/about', {
  name: 'About',
  action(params, queryParams) {
      BlazeLayout.render('layout', {main: 'about'});
  }
});

FlowRouter.route('/decks', {
  name: 'Decks',
  action(params, queryParams) {
      BlazeLayout.render('layout', {main: 'decks'});
  }
});
