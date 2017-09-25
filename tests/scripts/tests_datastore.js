//Tests for the datastore

(function() {
    console.log("Testing DataStore");
    var ds = new DataStore();
    console.log(ds.add('m@bond.com', 'tea'));
    console.log(ds.add('james@bond.com', 'eshpressho'));
    console.log(ds.getAll());
    console.log(ds.remove('james@bond.com'));
    console.log(ds.getAll());
    console.log(ds.get('m@bond.com'));
    console.log(ds.get('james@bond.com'));
  })();
