
define( [ 'jquery', 'underscore', 'backbone', 'app/collections/portfolio', 'app/models/portfolioitem', 'app/views/teaseritemview' ], 

 function( $, _, Backbone, Portfolio, PortfolioItem, TeaserItemView ) { 

    var TeaserListView = Backbone.View.extend( {

    	maxItems: 3,
    	el: $( '#teaser-list' ),

        initialize: function( ) {
        	this.collection.on( "reset", this.render, this ) ;
        	this.render( ) ;
        },

        render: function( ) { 
        	var that = this ;
        	var count = 0 ;

        	// render the first three items

            var len = this.collection.length ;

            for( var i = len - 1 ; i >= len - that.maxItems ; i-- ) {
                var item = this.collection.get( { 'id' : i } ) ;
                that.renderItem( item ) ;
            }

            return this ;
        },

        renderItem: function( item ) {
			var teaserView = new TeaserItemView( {
				model: item
			} ) ;

			this.$el.append( teaserView.render( ).el ) ;
		}

    } ) ;

    return TeaserListView ;

} ) ;