const profilePlayer = require('./profile_player');

let data = process.argv.slice(2);

data.map(tag => {
      profilePlayer.get(tag);
});