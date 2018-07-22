var pokemon = require('../data/friends');

module.exports = {
  pokemon: function (req, res) {
    return res.json(pokemon);
  },

  survey: function (req, res) {
    var data = req.body;
    var matchDifference;
    var matchPokemon;

    console.log('')

    //check which pokemon has the closest value to choices from survey
    pokemon.forEach((pokemon) => {
      var score = 0;

      //get sum of absolute value of score differences
      for (var i = 0; i < data.answers.length; i++) {
        var difference = Math.abs(data.answers[i] - pokemon.answers[i]);
        score += difference;
      }
      console.log(`${pokemon.name} score: ${score}`);

      //set default pokemon
      if (matchDifference === undefined) {
        matchDifference = score;
        matchPokemon = pokemon.name;

        //check if next pokemon is a better match
      } else if (matchDifference > score) {
        matchPokemon = pokemon.name;
      }
    })

    //get matched pokemon object data
    matchPokemon = pokemon.filter(obj => {
      return obj.name === matchPokemon;
    })
    console.log(`\nMatch pokemon: ${matchPokemon[0].name}`);
    console.log('\n----------------------------')

    //send it
    res.send(matchPokemon);
  }
};