const HomePageRouter = require('express').Router();

HomePageRouter.get('/',(req,res) => {
    res.send("Hey this is from home page router module");
});

module.exports = HomePageRouter;