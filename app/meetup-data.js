const fs = require('fs');
const request = require('request-promise');
const API_URL = 'https://api.meetup.com/2/';
const MEETUP_API_KEY = fs.readFileSync(__dirname + '/data/KEY').toString().trim();

var past = request({
  uri: API_URL + "events/",
  method: "GET",
  qs: {
    "group_urlname": "bostondatavis",
    "key": MEETUP_API_KEY,
    "status": "past"
  }
});

var upcoming = request({
  uri: API_URL + "events/",
  method: "GET",
  qs: {
    "group_urlname": "bostondatavis",
    "key": MEETUP_API_KEY,
    "status": "upcoming"
  }
});


past.then(function(resp) {
  console.log("past", resp);
}).catch(console.error);


upcoming.then(function(resp) {
  console.log("upcoming", resp);
}).catch(console.error);

module.exports = {
  upcoming: upcoming,
  past: past
};
