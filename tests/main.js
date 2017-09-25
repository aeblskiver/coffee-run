//Initializes testing values and runs test scripts

eval(require('fs').readFileSync('tests/scripts/datastore.js', 'utf8'));
eval(require('fs').readFileSync('tests/scripts/truck.js', 'utf8'));

var Truck = Truck;
var DataStore = DataStore;
var myTruck = new Truck('ncc-1701', new DataStore());

eval(require('fs').readFileSync('tests/scripts/tests_datastore.js', 'utf8'));
eval(require('fs').readFileSync('tests/scripts/tests_truck.js', 'utf8'));
