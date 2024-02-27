//router.Method('/route', handler)
const getHomepage = (req, res) => {
    res.send('Hello world! QuocNhu fullstack serverside rendering')
}

const renderEjs = (req,res) => {
    res.render('sample.ejs')
}

const helloWorld = (req, res) => {
    res.send('Hello man!')
}
module.exports = {
    getHomepage,
    renderEjs,
    helloWorld
}