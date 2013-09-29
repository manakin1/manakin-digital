
define( [ 'jquery', 'underscore', 'backbone', 'app/models/portfolioitem', 'app/views/portfolioitemview', 'app/collections/portfolio' ], 

 function( $, _, Backbone, PortfolioItem, PortfolioItemView, Portfolio ) { 

    var PortfolioView = Backbone.View.extend( {

        el : $( '#portfolio-list' ),
        items : null,
        defaultCategory: 'web',

        initialize: function( ) {
            this.items = this.collection ;
            this.collection = this.items.filterByCategory( this.defaultCategory ) ;
            this.render( ) ;
        },

        render: function( ) { 
            var that = this ;
            this.$el.empty( ) ;

            _.each( this.collection.models, function( item ) {
                that.renderItem( item ) ;
            }, this ) ;

            return this ;
        },

        renderItem: function( item ) {
            var portfolioItemView = new PortfolioItemView( {
                model: item
            } ) ;

            this.$el.prepend( portfolioItemView.render( ).el ) ;
        },

        filterByCategory: function( cat ) {
           this.collection = this.items.filterByCategory( cat ) ;
           console.log( 'before ' + this.collection.models[0].get( 'id' ) ) ;
           
           console.log( 'after ' + this.collection.models[0].get( 'id' ) ) ;
           this.render( ) ;
        }

    } ) ;

    return PortfolioView ;

} ) ;