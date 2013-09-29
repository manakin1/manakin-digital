
define( [ 'jquery', 'jquery_animate', 'underscore', 'backbone', 'app/models/portfolioitem', 'app/collections/portfolio' ], 

 function( $, animate, _, Backbone, PortfolioItem, PortfolioS ) { 

    var MainContentView = Backbone.View.extend( {

        transitioning: false,
        transitionSpeed: 200,
        currentView: null,
        newView: null,

        // create the view from an existing element
        el: $( '#main' ),

        initialize: function( ) {
        
            console.log( 'MainContentView.initialize' ) ;
            this.pages = $( 'ul.pages' ) ;

        },

        render: function( ) {

            return this ;
        },

        navigateToView: function( view, animate ) {
            console.log( 'MainContentView.navigateToView: ' + view + ' ' + animate ) ;
            this.switchView( view, animate ) ;
        },

        switchView: function( view, animate ) {
            if( view == ApplicationView.currentView ) return ;

            console.log( 'MainContentView.switchView: ' + view + ' ' + animate ) ;
            var current_page = this.pages.find( 'li.page.active' ) ;
            var new_page = this.pages.find( 'li#' + view ) ;

            if( animate == true ) {
                console.log( 'animating' ) ;
                this.transitioning = true ;
                var that = this ;

                $( current_page ).fadeOut( that.transitionSpeed, function( ) {
                    $( new_page ).fadeIn( that.transitionSpeed, function( ) {
                       that.transitioning = false ;
                       $( current_page ).removeClass( 'active' ) ;
                       $( new_page ).addClass( 'active' ) ;
                    } ) ;
                } ) ;
                
            }

            else {
                if( current_page ) $( current_page ).removeClass( 'active' ) ;
                //$( new_page ).css( { 'left' : '0px' } ) ;
                $( new_page ).addClass( 'active' ) ;
            }

            ApplicationView.currentView = view ;
            ApplicationView.navView.activate( view ) ;
        }

    } ) ;

    return MainContentView ;

} ) ;