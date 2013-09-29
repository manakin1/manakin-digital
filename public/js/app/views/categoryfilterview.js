
define( [ 'jquery', 'underscore', 'backbone', 'app/models/portfolioitem', 'app/views/portfolioitemview', 'app/collections/portfolio' ], 

 function( $, _, Backbone, PortfolioItem, PortfolioItemView, Portfolio ) { 

    var CategoryFilterView = Backbone.View.extend( {

        el: $( '#category-filter' ),
        list: null,

        events: {
            'click a' : 'handleClick'
        },

         initialize: function( ) {
            this.render( ) ;
            this.list = $( this.el ).find( 'li' ) ;
        },

        render: function( ) { 
            // auto populate list
        },

        renderItem: function( item ) {
        },

        handleClick: function( e ) {
            e.preventDefault( ) ;
            var cat = e.target.text.toLowerCase( ) ;
            ApplicationView.portfolioView.filterByCategory( cat ) ;
            this.list.removeClass( 'active' ) ;
            $( e.currentTarget ).parent( ).addClass( 'active' ) ;
        }

    } ) ;

    return CategoryFilterView ;

} ) ;