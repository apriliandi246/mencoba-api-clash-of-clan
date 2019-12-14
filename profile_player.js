const request = require('request');
require('dotenv').config();

let get = (playerTag) => {
      let options = {
            method: 'GET',
            url: `https://api.royaleapi.com/player/${playerTag}`,
            headers: {
                  auth: process.env.TOKEN
            }
      }

      let req = request(options, ((err, response, body) => {

            let profile = JSON.parse(body);

            if (response.statusCode === 200) {
                  let data = `Player tag : ${profile.tag}${"\n"}Player Name : ${profile.name}${"\n"}Trophies : ${profile.trophies}`;
                  let dataClan = `Clan name : ${profile.clan.name}${"\n"}Clan tag : ${profile.clan.tag}`;

                  console.log("-----------------------");
                  console.log(data + "\n" + dataClan);
                  console.log("-----------------------");

            } else {
                  console.log(`Player tag '${playerTag}' not found`);
                  console.log("\n");
            }

      }));
}

module.exports = {
      get
}