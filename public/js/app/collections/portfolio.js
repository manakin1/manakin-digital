define([ 'underscore', 'backbone', 'app/models/portfolioitem' ], function( _, Backbone, PortfolioItem ) {

    var Portfolio = Backbone.Collection.extend( {

            // holds PortfolioItem model objects
            model: PortfolioItem,
            url: '/api/items',
            sort_key: 'id', 
    		
    		comparator: function( item ) {
       			return item.get (this.sort_key ) ;
    		},

    		sortByField: function( fieldName ) {
        		this.sort_key = fieldName ;
        		this.sort( ) ;
    		},

            filterByCategory: function( cat ) {
			    var filtered = this.filter( function( item ) {
			    	return item.get( 'category' ) == cat ;
			    } ) ;

			    return new Portfolio( filtered ) ;
			},

			filterByTags: function( tags ) {

			} 

	} ) ;

    return Portfolio ;

} ) ;


