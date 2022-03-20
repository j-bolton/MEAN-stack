const index = (req, res) => {
    res.render('index', {title: 'Home - Travlr Getaways'});
};

module.exports = {
    index
};