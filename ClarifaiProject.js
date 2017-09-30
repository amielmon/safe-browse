// Require the client
const Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your api key.
const app = new Clarifai.App({
 apiKey: 'dfa262a9ad124130a905536534fdcdb5'
});

var url = "https://naldzgraphics.net/wp-content/uploads/2013/01/11-movement-beach.jpg";

app.models.predict("e9576d86d2004ed1a38ba0cf39ecb4b1", url).then(
    function(response) {
      var str = JSON.stringify(response);
      var SFWindex = str.indexOf('"sfw","value');
      var NSFWindex = str.indexOf('"nsfw","value');
      console.log(str);
      console.log(str.substring(NSFWindex, (NSFWindex+23)));
      console.log(str.substring(SFWindex, (SFWindex+22)));
    },
    function(err) {
       console.log(err)
    }
 );
