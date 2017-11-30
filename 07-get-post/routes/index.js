var express = require('express');
var router = express.Router();
// get grabs path, and then calls a function with a req, res
//
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});
// :ID calls for a get function to produce a number or label
router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id});
});
/* A post request does this::
*
* var id = req.body.id
* res.redirect('/test/' + id);
*
* */
router.post('/test/submit', function(req, res, next) {
  res.redirect('/test/...');
});

module.exports = router;
