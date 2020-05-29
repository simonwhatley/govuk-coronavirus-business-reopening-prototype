// Based on

'use strict'

const express = require('express');
const router = express.Router();

const Questions = require('./models/questions');
const Answers = require('./models/answers');
const Outcomes = require('./models/outcomes');
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
      start: req.baseUrl + '/sectors'
    }
  });
});

// --------------------------------------------------
// Q: Which of these sectors apply to your business?
// --------------------------------------------------
router.get('/sectors', (req, res) => {

  if (req.session.data.answers === undefined) {
    req.session.data.answers = {};
  }

  res.render('question', {
    question: Questions.question('sectors', req.session.data.answers['sectors']),
    actions: {
      save: req.baseUrl + '/sectors',
      back: req.baseUrl + '/',
      start: req.baseUrl + '/sectors'
    }
  });
});

router.post('/sectors', checkHasAnswers, (req, res) => {

  let errors = [];

  if (req.session.data.answers['sectors'] === undefined) {
    let error = {};
    error.fieldName = 'sectors';
    error.href = '#sectors';
    error.text = 'Choose an answer';
    errors.push(error);
  }

  if (errors.length) {
    res.render('question', {
      question: Questions.question('sectors', req.session.data.answers['sectors']),
      errors: errors,
      actions: {
        save: req.baseUrl + '/sectors',
        back: req.baseUrl + '/',
        start: req.baseUrl + '/'
      }
    });
  } else {
    res.redirect(req.baseUrl + '/staff');
  }

});

// --------------------------------------------------
// Q: How many staff do you have?
// --------------------------------------------------
router.get('/staff', (req, res) => {

  if (req.session.data.answers === undefined) {
    req.session.data.answers = {};
  }

  res.render('question', {
    question: Questions.question('staff', req.session.data.answers['staff']),
    actions: {
      save: req.baseUrl + '/staff',
      back: req.baseUrl + '/sectors',
      start: req.baseUrl + '/'
    }
  });
});

router.post('/staff', checkHasAnswers, (req, res) => {

  let errors = [];

  if (req.session.data.answers['staff'] === undefined) {
    let error = {};
    error.fieldName = 'staff';
    error.href = '#staff';
    error.text = 'Choose an answer';
    errors.push(error);
  }

  if (errors.length) {
    res.render('question', {
      question: Questions.question('staff', req.session.data.answers['staff']),
      errors: errors,
      actions: {
        save: req.baseUrl + '/staff',
        back: req.baseUrl + '/sectors',
        start: req.baseUrl + '/'
      }
    });
  } else {
    res.redirect(req.baseUrl + '/visitors');
  }

});

// --------------------------------------------------
// Q: Do you have customers, visitors or contractors on site?
// --------------------------------------------------
router.get('/visitors', (req, res) => {

  if (req.session.data.answers === undefined) {
    req.session.data.answers = {};
  }

  res.render('question', {
    question: Questions.question('visitors', req.session.data.answers['visitors']),
    actions: {
      save: req.baseUrl + '/visitors',
      back: req.baseUrl + '/staff',
      start: req.baseUrl + '/'
    }
  });
});

router.post('/visitors', checkHasAnswers, (req, res) => {

  let errors = [];

  if (req.session.data.answers['visitors'] === undefined) {
    let error = {};
    error.fieldName = 'visitors';
    error.href = '#visitors';
    error.text = 'Choose an answer';
    errors.push(error);
  }

  if (errors.length) {
    res.render('question', {
      question: Questions.question('visitors', req.session.data.answers['visitors']),
      errors: errors,
      actions: {
        save: req.baseUrl + '/visitors',
        back: req.baseUrl + '/staff',
        start: req.baseUrl + '/'
      }
    });
  } else {
    res.redirect(req.baseUrl + '/meetings');
  }

});

// --------------------------------------------------
// Q: Do you have any staff meetings (small or large)?
// --------------------------------------------------
router.get('/meetings', (req, res) => {

  if (req.session.data.answers === undefined) {
    req.session.data.answers = {};
  }

  res.render('question', {
    question: Questions.question('meetings', req.session.data.answers['meetings']),
    actions: {
      save: req.baseUrl + '/meetings',
      back: req.baseUrl + '/visitors',
      start: req.baseUrl + '/'
    }
  });
});

router.post('/meetings', checkHasAnswers, (req, res) => {

  let errors = [];

  if (req.session.data.answers['meetings'] === undefined) {
    let error = {};
    error.fieldName = 'meetings';
    error.href = '#meetings';
    error.text = 'Choose an answer';
    errors.push(error);
  }

  if (errors.length) {
    res.render('question', {
      question: Questions.question('meetings', req.session.data.answers['meetings']),
      errors: errors,
      actions: {
        save: req.baseUrl + '/meetings',
        back: req.baseUrl + '/visitors',
        start: req.baseUrl + '/'
      }
    });
  } else {
    res.redirect(req.baseUrl + '/travel');
  }

});

// --------------------------------------------------
// Q: Do your employees need to travel for work?
// --------------------------------------------------
router.get('/travel', (req, res) => {

  if (req.session.data.answers === undefined) {
    req.session.data.answers = {};
  }

  res.render('question', {
    question: Questions.question('travel', req.session.data.answers['travel']),
    actions: {
      save: req.baseUrl + '/travel',
      back: req.baseUrl + '/meetings',
      start: req.baseUrl + '/'
    }
  });
});

router.post('/travel', checkHasAnswers, (req, res) => {

  let errors = [];

  if (req.session.data.answers['travel'] === undefined) {
    let error = {};
    error.fieldName = 'travel';
    error.href = '#travel';
    error.text = 'Choose an answer';
    errors.push(error);
  }

  if (errors.length) {
    res.render('question', {
      question: Questions.question('travel', req.session.data.answers['travel']),
      errors: errors,
      actions: {
        save: req.baseUrl + '/travel',
        back: req.baseUrl + '/meetings',
        start: req.baseUrl + '/'
      }
    });
  } else {
    res.redirect(req.baseUrl + '/goods');
  }

});

// --------------------------------------------------
// Q: On your site do you receive and send goods?
// --------------------------------------------------
router.get('/goods', (req, res) => {

  if (req.session.data.answers === undefined) {
    req.session.data.answers = {};
  }

  res.render('question', {
    question: Questions.question('goods', req.session.data.answers['goods']),
    actions: {
      save: req.baseUrl + '/goods',
      back: req.baseUrl + '/travel',
      start: req.baseUrl + '/'
    }
  });
});

router.post('/goods', checkHasAnswers, (req, res) => {

  let errors = [];

  if (req.session.data.answers['goods'] === undefined) {
    let error = {};
    error.fieldName = 'goods';
    error.href = '#goods';
    error.text = 'Choose an answer';
    errors.push(error);
  }

  if (errors.length) {
    res.render('question', {
      question: Questions.question('goods', req.session.data.answers['goods']),
      errors: errors,
      actions: {
        save: req.baseUrl + '/goods',
        back: req.baseUrl + '/travel',
        start: req.baseUrl + '/'
      }
    });
  } else {
    res.redirect(req.baseUrl + '/results');
  }

});

// --------------------------------------------------
// results
// --------------------------------------------------
router.get('/results', checkHasAnswers, (req, res) => {

  res.render('results', {
    outcomes: Outcomes.find(),
    rules: Rules.find(req.session.data.answers),
    actions: {
      start: req.baseUrl + '/',
      back: req.baseUrl + '/goods'
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
