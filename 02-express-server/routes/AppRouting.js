const AppRouting = require('express').Router();
const RestaurantController = require('../controller/RestaurantController');

AppRouting.get('/',RestaurantController.getHomePage);
//API to send the restaurants list
AppRouting.get('/get-restaurant-list', RestaurantController.getRestaurantList);
AppRouting.get('/get-single-restaurant/:city', RestaurantController.getSingleRestaurant);

module.exports = AppRouting;