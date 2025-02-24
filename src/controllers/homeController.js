const getHomepage = (req, res) => {
    res.send('Hello World! Phuc')
};

const getABCpage = (req, res) => {
    res.render('sample.ejs')
};

module.exports = {
    getHomepage,
    getABCpage
};