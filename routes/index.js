var express = require('express');
var router = express.Router();

const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/entities/filter', function(req, res, next) {
  //res.send('respond with a resource');
  axios.get("https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/2")
      .then((data) => {
        console.log(data.data)
      })
      .catch(err => res.secn(err));
  res.json({mensaje: "jla"})
});

module.exports = router;
