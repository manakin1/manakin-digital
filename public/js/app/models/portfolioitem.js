define( [ 'underscore', 'backbone' ], function( _, Backbone ) {

    var PortfolioItem = Backbone.Model.extend( {

            defaults: {
                id: 0,
                title: '',
                client: '',
                short_desc: '',
                long_desc: '',
                category: 0,
                tags: '',
                thumbnails: '',
                images: '',
                url: '',
                date: new Date( ),
                filtered: false
            },

            toggle: function( ) {
                this.set( 'selected', !this.get( 'selected' ) ) ;
            }
     } ) ;

    return PortfolioItem ;

} ) ;


