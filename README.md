##The apigee training app

Ever curious what museums are in your area? Well Apigee will help you build that with our mBaaS solution!

##Quickstart
```javascript
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <title>Museums</title>
  <script src="js/apigee.js"></script>
  <script>
    var apigee = new Apigee.Client({
      orgName:"mtraining",
      appName:"sandbox"
    });

    var museums = new Apigee.Collection({
      type:"museums",
      client:apigee
    });

    museums.fetch(function(err, result) {
      if(err) {
        alert("Read failed!");
      } else {
        while(museums.hasNextEntity()) {
          var museum = museums.getNextEntity();
          var name = museum.get("museum");
          alert(name);
        }
      }
    });

    //Uncomment to add data to your store!
    // museum = {"museum":"Detroit Institute of Art"};
    // museums.addEntity(museum, function(error, response) {
    //  if (error) { alert("write failed"); }
    //  else { alert("succeeded!"); }
    // });
  </script>
</head>
<body>
</body>
</html>
```

- index.html -> Our template that we begin with
- index-fetch.html -> Let's fetch some data, and alert it to the screen
- index-list.html -> Let's list all the data onto the screen!
- index-storage.html -> What happens when we're offline?
- index-filter.html -> Filtering what data is on the screen.
- index-geo.html -> Let's use geolocation to find museums near us


