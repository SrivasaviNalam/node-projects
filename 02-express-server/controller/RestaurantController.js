const restaurantList = require('../model/restaurants.json');

const RestaurantController = {
  getHomePage: (req,res) => {
    res.render("index.pug");
  },
  getRestaurantList : (req,res) => {
    let sendData = {
      restaurantList,
      length: restaurantList.length,
      status: true,
    }
    res.send(sendData);
  },
  getSingleRestaurant : (req,res) => {
    let { city }= req.params;
    let filteredData = restaurantList.filter((value) => value.location === city);
    if (filteredData.length === 0) {
      res.send({status: false});
    }else{
      res.send({status:true, result:filteredData});
    }
  }
};

module.exports = RestaurantController;