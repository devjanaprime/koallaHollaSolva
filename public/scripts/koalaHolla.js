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
      console.log( 'back with:', response );
      // receive list of koalas
      // update DOM
    } // end success
  }); //end ajax
} // ed func
