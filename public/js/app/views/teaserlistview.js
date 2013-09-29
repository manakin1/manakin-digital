
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

			_.each( this.collection.models, function( item ) {
				if( count >= that.maxItems ) return ;
				that.renderItem( item ) ;
				count++ ;
			}, this ) ;

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