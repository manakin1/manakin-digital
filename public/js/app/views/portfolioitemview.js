
define( [ 'jquery', 'underscore', 'backbone' ], 

 function( $, _, Backbone ) { 

    var PortfolioItemView = Backbone.View.extend( {

        tagName: 'li',
        className: 'portfolio-item',
        template: $( '#portfolio-template' ).html( ),
        transitionSpeed: 300,

        events: {
            'click img' : 'showDetails'
        },

        initialize: function( ) {

        },

        render: function( ) {
            console.log( 'PortfolioItemView.render' ) ;
            var tmpl = _.template( this.template ) ; 
            this.$el.html( tmpl( this.model.toJSON( ) ) ) ;
            this.$el.fadeIn( this.transitionSpeed ) ;
      
            return this ;
        },

        remove: function( ) {
            this.$el.fadeOut( this.transitionSpeed ) ;
        },

        showDetails: function( ) {
            ApplicationView.showItemDetails( this.model ) ;
        }
		
    } ) ;

    return PortfolioItemView ;

} ) ;