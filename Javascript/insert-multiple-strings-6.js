//https://www.codewars.com/kata/52f3eeb274c7e693a600288e

function insert_at_indexes(phrase,word,indexes){
  for(var i=0;i<indexes.length;i++){

    indexes[i] = indexes[i] + word.length*i
    phrase=phrase.slice(0,indexes[i]) + word + phrase.slice(indexes[i]);

  }
  return phrase;
}
