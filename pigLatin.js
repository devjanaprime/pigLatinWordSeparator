// our voewls
var vowels = [ 'a', 'e', 'i', 'o', 'u' ];

$( document ).ready( function(){
  $( '#checkButton' ).on( 'click', function(){
    // get user input word
    checkWord( $( '#wordIn' ).val() );
  }); // end button on click
});

var checkWord = function( word ){
  // an array to hold positions for the vowels
  var positions = [];
  // loop through word and give positions of each vowel
  for (var i = 0; i < vowels.length; i++) {
    positions[i] = word.indexOf( vowels[i] );
  }; //end for
  // -1 if not found
  console.log( positions );
  // find the lowest that is above -1
  var lowest = word.length;
  for (var i = 0; i < positions.length; i++) {
    if( positions[i] != -1 && positions[i] < lowest ){
      lowest = positions[i];
    } // end if
  } // end for
  console.log( 'first vowel at:', lowest );
  // split the word at that vowel
  var start = word.slice( 0, lowest );
  var end = word.slice( lowest, word.length );
  var pigLatinizedWord = end + start + 'ay';
  console.log( pigLatinizedWord );
  displayNewWord( word, pigLatinizedWord );
  return pigLatinizedWord;
} // end checkWord

var displayNewWord = function( originalWord, newWord ){
  // display on dom
  $( '#outputDiv' ).append( '</p>' + originalWord + ": " + newWord + '</p>')
} // end displayNewWord
