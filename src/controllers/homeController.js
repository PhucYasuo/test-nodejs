const getHomepage = (req, res) => {
    return res.render('home.ejs');
};

const getABCpage = (req, res) => {
    res.render('sample.ejs')
};

module.exports = {
    getHomepage,
    getABCpage
};