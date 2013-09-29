
define( [ 'jquery', 'underscore', 'backbone' ], 

 function( $, _, Backbone ) { 

    var NavView = Backbone.View.extend( {

        el: $( 'nav' ),

        events: {
            'click li': 'clickHandler'
        },

        clickHandler: function( e ) {
            e.preventDefault( ) ;
            console.log( 'transitioning ' + ApplicationView.mainView.transitioning ) ;
            if( ApplicationView.mainView.transitioning ) return ;
            if( !e.target.text ) return ; 

            ApplicationView.mainRouter.navigate( e.target.text ) ;
            ApplicationView.mainView.navigateToView( e.target.text, true ) ;
        },

        activate: function( item ) {
            for( var i = 0 ; i < this.buttons.length ; i++ ) {

                var label = $( this.buttons[i] ).find( 'a' ).text( )  ;
                if( label == item ) {
                    $( this.buttons[i] ).addClass( 'active' ) ;
                }

                else { $( this.buttons[i] ).removeClass( 'active' ) ; }
            }
        },

        initialize: function( ) {
            console.log( 'NavView.initialize' ) ;
            this.buttons = this.$( 'li' ) ;

        },

        render: function( ) {
            return this ;
        }

    } ) ;

    return NavView ;

} ) ;