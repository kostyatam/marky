var React = require('react'),
	reflux = require('reflux'),
	actions = require('./actions'),
	images = [];

module.exports = reflux.createStore({
		listenables: [actions],

		addImage: function (image) {
			images.push(image);
			console.log('image added')
		},
		toMarkdown: function () {
			images.map(function (image) {
				React.unmountComponentAtNode(image.container);
			});
			images = [];
		}
	})