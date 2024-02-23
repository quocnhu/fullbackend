//router.Method('/route', handler)
const getHomepage = (req, res) => {
    res.send('Hello world! QuocNhu fullstack serverside rendering')
}

module.exports = {
    getHomepage
}