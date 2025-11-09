// app_server/controllers/main.js

const index = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways'
  });
};

module.exports = {
  index
};
