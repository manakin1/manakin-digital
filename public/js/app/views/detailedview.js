
define( [ 'jquery', 'underscore', 'backbone' ], 

 function( $, _, Backbone ) { 

    var DetailedView = Backbone.View.extend( {

        tagName: 'div',
        transitionSpeed: 500,

        template: $( '#details-template' ).html( ),

        events: {
            'click .button-close' : 'close'
        },

        initialize: function( ) {
        },

        render: function( ) {
            console.log( 'DetailedView.render' ) ;
            var tmpl = _.template( this.template ) ; 
            this.$el.html( tmpl( this.model.toJSON( ) ) ) ;

            this.$( 'overlay' ).css( { 'height' : $( document ).height( ) + 'px' } ) ;
            this.$el.fadeIn( this.transitionSpeed ) ;

            this.$el.find( '.flexslider' ).flexslider( {
                animation: "slide"
            } ) ;
         
            return this ;
        },

        close: function( e ) {
            e.preventDefault( ) ;
            this.undelegateEvents( ) ;
            var that = this ;

            this.$el.fadeOut( this.transitionSpeed, function( ) { 
                this.removeData( ).unbind( ) ; 
                that.remove( ) ;  
                Backbone.View.prototype.remove.call( that ) ;
            } ) ; 
        }

    } ) ;

    return DetailedView ;

} ) ;