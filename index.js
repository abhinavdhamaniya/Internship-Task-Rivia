const axios = require('axios').default;
var express = require('express');
var app = express();
const jsStringify = require('js-stringify');

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');  //to use the pug engine

app.set('views', './views'); //views are avialable in views folder




app.get('/', function(req,res)
{
    var result;
    // Make a request for a user with a given ID
    axios.get('https://21823d1455a39718f9478e4af6e515ea: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@samplestorebyabhinavd.myshopify.com/admin/api/2020-10/orders.json?status=any')
    .then(function (response) {
      // handle success
      //console.log(response.data);
      result= response.data;
      res.render('homepage', {jsStringify, orders: result.orders});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

});
  


var server = app.listen(process.env.PORT || 555, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})