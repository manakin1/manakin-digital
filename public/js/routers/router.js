define( [ 'jquery', 'underscore', 'backbone' ], 

 function( $, _, Backbone ) { 

	var MainRouter = Backbone.Router.extend( { 

		routes: { 
			'home' : 'showHome',
			'about' : 'showAbout',
			'cv' : 'showCV',
			'work' : 'showWork'
		},

		showHome: function( param ) {
			ApplicationView.mainView.navigateToView( 'home', false ) ;
		},

		showAbout: function( param ) {
			ApplicationView.mainView.navigateToView( 'about', false ) ;
		},

		showCV: function( param ) {
			ApplicationView.mainView.navigateToView( 'cv', false ) ;
		},

		showWork: function( param ) {
			ApplicationView.mainView.navigateToView( 'work', false ) ;
		}

	} ) ;

	return MainRouter ;

} ) ; 
