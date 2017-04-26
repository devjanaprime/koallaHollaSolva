$( document ).ready( function(){
  console.log( 'JQ' );
  getKoalas();
});

function getKoalas(){
  // make ajax call to server
  $.ajax({
    url: '/koalas',
    type: 'GET',
    success: function( response ){
      // receive list of koalas
      console.log( 'back with:', response );
      // update DOM
      $( '#outputDiv' ).empty();
      for (var i = 0; i < response.length; i++) {
        $( '#outputDiv' ).append( '<p>' + response[i].name + '</p>' );
      } // end for
    } // end success
  }); //end ajax
} // ed func
