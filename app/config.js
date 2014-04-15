require.config({
    paths: {
        "underscore": "../libraries/lodash.underscore",
        "jquery": "../libraries/jquery",
        "backbone": "../libraries/backbone",
		'text' : '../libraries/text',
		'i18n' : '../libraries/i18n'
    },
	shim: {
		'jquery' : {
			exports: '$'
		},
		'underscore' : {
			exports: '_'
		},
		'backbone' : {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
    }
});
