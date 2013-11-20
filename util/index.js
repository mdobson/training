var json = require('./dat/detroit.json');

var clean = [];

json.forEach(function (v) {
  var c = {};
  c.location = {};
  c.address = v.location.address;
  c.city = v.location.city;
  c.location.latitude = v.location.lat;
  c.location.longitude = v.location.lng;
  c.museum = v.name;
  clean.push(c);
});

console.log(JSON.stringify(clean, null, 2));
