require.config( { 

  paths: { 
	  jquery: 'lib/jquery/jquery.min', 
    jquery_animate: 'lib/jquery/jquery-animate-enhanced',
    flexslider : 'lib/flexslider/jquery.flexslider-min',
    underscore: 'lib/underscore/underscore.min',
	  backbone: 'lib/backbone/backbone.min',
    bootstrap: 'lib/bootstrap/bootstrap.min',
  },
  
  shim: {
    underscore: {
      exports: '_'
    },
	
    backbone: {
      deps: [ "underscore", "jquery" ], 
      exports: "Backbone"
    }
  }
  
} ) ;  


require( [ 
    'app', ], function( App ) { 
      ApplicationView = App ;
      ApplicationView.initialize( ) ; 
} ) ;
