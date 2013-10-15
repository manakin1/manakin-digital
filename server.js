// module dependencies

var application_root = __dirname,
	express = require( 'express' ),
	path = require( 'path' ),
	mongoose = require( 'mongoose' ),
	http = require( 'http' ),
	itemData = require( './public/js/items.json' ) ;




// create server

var app = express( ) ;

// configure server

app.configure( function( ) { 
	app.set( 'port', process.env.PORT || 4711 ) ;
	app.use( express.bodyParser( ) ) ;
	app.use( express.methodOverride( ) ) ;
	app.use( app.router ) ;
	app.use( express.static( path.join( application_root, 'public' ) ) ) ;
	app.use( express.errorHandler( { dumpExceptions: true, showStack: true } ) ) ;
} ) ;

// start server

/*
http.createServer( function ( req, res ) {
    res.writeHead( 200, {'Content-Type': 'text/plain'} ) ;
} ).listen( 8080 ) ; 

app.listen( 8080, function( ) { 
	
} ) ;
*/

http.createServer( app ).listen( app.get( 'port' ), function( ) {
  console.log( "Express server listening on port " + app.get( 'port' ) ) ;
} ) ;


// routes

app.get( '/api', function( req, res ) {
	//res.send( 'manakin API is running' ) ;
} ) ;

// connect to database

mongoose.connect( 'mongodb://nodejitsu_manakin:1cifhuq5uklaank9gt4niqj4pa@ds045998.mongolab.com:45998/nodejitsu_manakin_nodejitsudb844442590' ) ;


// schemas

var PortfolioItem = new mongoose.Schema( { 
	id: String,
	title: String,
	client: String,
	type: String,
	date: String,
	category: String,
	short_desc: String,
	long_desc: String,
	image_path: String,
	thumb: String,
	images: String,
	url: String,
	tags: String,
	technologies: String
} ) ;

// models

var PortfolioItemModel = mongoose.model( 'PortfolioItem', PortfolioItem ) ;




PortfolioItemModel.find( ).remove( ) ;

for( var i = 0 ; i < itemData.items.length ; i++ ) {
	console.log( 'Added ' + itemData.items[i].title ) ;
	new PortfolioItemModel( itemData.items[i] ).save( ) ; 
}



// get a list of all items

app.get( '/api/items', function( req, res ) {
	return PortfolioItemModel.find( function( err, items ) {
		if( !err ) {
			return res.send( items ) ;
		}
		else { 
			return console.log( err ) ;
		}
	} ) ;
} ) ;

