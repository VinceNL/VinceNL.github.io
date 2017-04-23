(function () {
      var requestURL = 'http://vincenl.github.io./chatTest.json';
      var request = new XMLHttpRequest();

      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();

      request.onload = function() {
          chatStatus = request.response;
           (chatStatus["BrandLoyalty_Chat"] === "True") ? chat = "False" : chat = "True";   
      }
    })();
