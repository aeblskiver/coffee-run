(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var RANGE_SELECTOR = '[data-coffee-range="range"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck('ncc-1701', new DataStore());

  //Exporting myTruck to the global mainspace
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);
  var rangeHandler = new FormHandler(RANGE_SELECTOR);

  //use myTruck's createOrder function for a callback
  //but you have to bind the function to myTruck because
  //the owner of the function changes inside the callback?
  //Thus it would be an error
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  rangeHandler.addRangeHandler(rangeHandler.changeRating);
  console.log(formHandler);

})(window);
