// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );
// pool config
var config = {
  database: 'koalaHolla',
  host: 'localhost',
  port: 5432,
  max: 27
}; // end pool config
// create a pool that uses this config
var pool = new pg.Pool( config );

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
var port = 1234;

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); //end spin up server

// routes
// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url

app.get( '/koalas', function( req, res ){
  console.log( '/koalas get hit' );

  var allKoalas = [];
  // connect to db
  pool.connect( function( err, connection, done ){
    if( err ){
      console.log( err );
      res.send( 400 )
    } //end Error
    else{
      console.log( 'connected to db' );
      // send a query to get all the koalas
      var resultSet = connection.query( "SELECT * from koalas" );
      // translate the result set into an array
      resultSet.on( 'row', function( row ){
        allKoalas.push( row );
      }); //end on row
      resultSet.on( 'end', function(){
        // res.send the array back to client
        res.send( allKoalas );
      }); //end on end
    } // end no error
  }) // end pool connect
}); //end get koalas
