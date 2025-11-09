// app_server/controllers/travel.js

const travel = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    pageHeader: {
      title: 'Travel',
      strapline: 'Book your next trip'
    }
  });
};

module.exports = {
  travel
};
