// Based on

'use strict'

const express = require('express');
const router = express.Router();

const Questions = require('./models/questions');
const Answers = require('./models/answers');
const Schemes = require('./models/schemes');
const Rules = require('./models/rules');

function checkHasAnswers(req, res, next) {
  if (req.session.data.answers === undefined) {
    res.redirect(req.baseUrl + '/');
  } else {
    next();
  }
}

// --------------------------------------------------
// Start
// --------------------------------------------------

router.get('/', (req, res) => {
  delete req.session.data;

  res.render('index', {
    actions: {
      start: req.baseUrl + '/'
    }
  });
});

// --------------------------------------------------
// Q:
// --------------------------------------------------
router.get('/question-slug', (req, res) => {

  if (req.session.data.answers === undefined) {
    req.session.data.answers = {};
  }

  res.render('question', {
    question: Questions.question('question-slug', req.session.data.answers['question-slug']),
    actions: {
      save: req.baseUrl + '/question-slug',
      back: req.baseUrl + '/',
      start: req.baseUrl + '/question-slug'
    }
  });
});

router.post('/question-slug', checkHasAnswers, (req, res) => {

  let errors = [];

  if (req.session.data.answers['question-slug'] === undefined) {
    let error = {};
    error.fieldName = 'question-slug';
    error.href = '#question-slug';
    error.text = 'Choose an answer';
    errors.push(error);
  }

  if (errors.length) {
    res.render('question', {
      question: Questions.question('question-slug', req.session.data.answers['question-slug']),
      errors: errors,
      actions: {
        save: req.baseUrl + '/question-slug',
        back: req.baseUrl + '/',
        start: req.baseUrl + '/'
      }
    });
  } else {
    res.redirect(req.baseUrl + '/next-question');
  }

});



// --------------------------------------------------
// results
// --------------------------------------------------
router.get('/results', checkHasAnswers, (req, res) => {

  res.render('results', {
    schemes: Schemes.find(),
    rules: Rules.find(req.session.data.answers),
    actions: {
      start: req.baseUrl + '/',
      back: req.baseUrl + '/question-slug'
    }
  });

});

// --------------------------------------------------
// change answers
// --------------------------------------------------
router.get('/change-answer', checkHasAnswers, (req, res) => {

  // remove answers from the object
  // we only want to keep answers from earlier questions
  req.session.data.answers = Answers.delete(req.query.question, req.session.data.answers);

  res.redirect(req.baseUrl + '/' + req.query.question);

});

// --------------------------------------------------
// Add routes above this line
// --------------------------------------------------
module.exports = router;
