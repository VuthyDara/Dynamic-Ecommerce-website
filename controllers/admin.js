exports.getHomePage = (req, res, next) => {
    res.render('homePage', {
        pageTitle: 'Home Page'
    })
}