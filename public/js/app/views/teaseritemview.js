
define( [ 'jquery', 'underscore', 'backbone' ], 

 function( $, _, Backbone ) { 

    var TeaserItemView = Backbone.View.extend( {

        tagName: 'li',
        className: 'portfolio-item col-md-4 col-lg-4 col-sm-4',
        template: $( '#teaser-template' ).html( ),

        events: {
            'click img' : 'showDetails'
        },

        initialize: function( ) {

        },

        render: function( ) {
            console.log( 'TeaserItemView.render' ) ;
            var tmpl = _.template( this.template ) ; 
            this.$el.html( tmpl( this.model.toJSON( ) ) ) ;
      
            return this ;
        },

        showDetails: function( ) {
            ApplicationView.showItemDetails( this.model ) ;
        }
		
    } ) ;

    return TeaserItemView ;

} ) ;