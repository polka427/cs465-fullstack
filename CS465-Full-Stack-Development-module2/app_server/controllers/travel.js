// app_server/controllers/travel.js
const fs = require('fs');

let trips = [];
try {
  trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
} catch (e) {
  trips = [];
}

const travel = (req, res) => {
  res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = { travel };
