var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req,res){
  db.article.findAll().then(function(articles){
    res.render('articles/index', {results: articles});
  });
});

router.post('/', function(req,res){
  db.article.create(req.body).then(function(createdArticle){
    res.redirect('/articles/' + createdArticle.id);
  }).catch(function(err){
    res.send('uh oh!', err);
  });
  // res.send(req.body);
});

router.delete('/:id', function(req,res){
  console.log('Delete route. ID = ', req.params.id);
  db.article.destroy({ cxd
    where: { id: req.params.id }
  }).then(function(deleted){
    console.log('deleted = ', deleted);
    res.send('success');
  }).catch(function(err){
    console.log('An error happened', err);
    res.send('fail');
  });
  // res.send('Delete Route Works!')
});

router.get('/new', function(req,res){
  res.render('articles/new');
});

router.get('/:id', function(req,res){
  db.article.findById(req.params.id).then(function(article){
      res.render('articles/show', { result: article });
  });
});


// db.article.create({
//   title: 'Test Title', OR req.body.title
//   content: 'this is a word for you to read',
//   author: 'M.E.'
// });

module.exports = router;
