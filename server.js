// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );

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

  //// REPLACE WITH DATABASE STUFF LATER
  var tempKoala = {
    name: 'Anjeli',
    sex: 'f',
    age: 3,
    transfer : true,
    notes: 'likes good music'
  }; // just a test
  allKoalas.push( tempKoala );
  /////

  res.send( allKoalas );
}); //end get koalas
