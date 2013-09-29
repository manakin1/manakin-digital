define( [ 'jquery', 'underscore', 'backbone', 'bootstrap', 'app/views/maincontentview', 'app/views/teaserlistview', 'app/collections/portfolio', 
          'app/views/portfolioview', 'app/views/navview', 'app/views/detailedview', 'app/views/categoryfilterview', 'routers/router' ], 
    function( $, _, Backbone, Bootstrap, MainContentView, TeaserListView, Portfolio, PortfolioView, NavView, DetailedView, CategoryFilterView, MainRouter ) { 


    var App = {

        initialize: function( ) {

            console.log( 'Initializing' ) ;

            this.mainView = new MainContentView( ) ;
            this.navView = new NavView( ) ;
            this.mainRouter = new MainRouter( ) ;
            this.detailedView = null ;
            this.portfolioView = null ;
            this.currentView = '' ;

            var portfolio = new Portfolio( ) ;

            portfolio.fetch( { success: function( ) { 
                App.portfolioView = new PortfolioView( { collection: portfolio } ) ; 
                var teaserListView = new TeaserListView( { collection: portfolio } ) ;   
                var categoryFilterView = new CategoryFilterView( { collection: portfolio } ) ;
                }
            } ) ;

            this.showItemDetails = function( item ) {
                console.log( 'ApplicationView.showDetails: ' + item.get( 'title' ) ) ;
                var detailedView = new DetailedView( { model: item } ) ;
                $( 'body' ).append( detailedView.render( ).el ) ;

                 $( '.carousel' ).carousel( {
                     interval: 6000
                } ) ;
   
            } ;

            Backbone.history.start( ) ;

            var view = window.location.hash.replace( '#', '' ) ;
            
            if( !view ) this.mainView.switchView( 'home', false ) ;

        }

    } ;
    
    return App ;
	
} ) ;




